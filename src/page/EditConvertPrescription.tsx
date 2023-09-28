import React, { useEffect, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { BsPencilFill } from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import noImage from "../image/No-Image-Placeholder.svg.webp";
import { Button } from "antd";
import * as cheerio from "cheerio";
import { FaUpload } from "react-icons/fa";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setImageUrl } from "../redux/slices/prescription.slice";
import { SiConvertio } from "react-icons/si";
import { fetchResidentById } from "../redux/slices/resident.slice";
import { useParams } from "react-router-dom";
import config from "../utils/config";
import axios from "axios";
export const EditConvertPrescription: React.FC<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const resident = useSelector(
    (state: RootState) => state.residents.userProfile
  );
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [previewText, setPreviewText] = useState<string>("");
  const [show, setShow] = useState(false);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  const handleAddNewMedicine = async () => {
    // convert selectedImage to base64
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = async () => {
      let base64data: any = reader?.result;
      var strImage = base64data.replace(/^data:image\/[a-z]+;base64,/, "");
      //   curl -X 'POST' \
      // 'http://174.138.20.71:8080/table_recognizer' \
      // -H 'accept: application/json' \
      // -H 'Content-Type: application/json' \
      // -d '{
      // "image_url": "string",
      // "image_base64":"string",
      // }
      // convert curl to axios
      const response = await axios({
        method: "post",
        url: `${config.baseUrl}/table_recognizer`,
        data: {
          image_url: "string",
          image_base64: strImage,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        const pattern = /<tr>\s*<td><\/td>\s*<td><\/td>\s*<\/tr>/g;
        const pattern1 = /<tr>\s*<td><\/td>\s*<\/tr>/g;
        let formatData = res.data.replace(pattern, "");
        const finalData = formatData.replace(pattern1, "");
        const $ = cheerio.load(finalData);

        // remove empty rows
        $("tr").each(function () {
          var $this = $(this);
          if ($this.text().trim() === "") {
            $this.remove();
          }
        });
        const leftOver: any = [];
        const location: any = [];
        // remove <tr> <td>{content} </td> </tr> rows and push to array
        $("tr").each(function (i) {
          var $this = $(this);
          // count number of td in each tr
          const tdLength = $this.find("td");
          // check all td in tr is empty or not
          tdLength.each(function (index) {
            if ($(this).text().trim() === "") {
              console.log($(this).text().trim());
              // push previous td to array or next td to array
              leftOver.push(
                $(this).prev().text().trim() || $(this).next().text().trim()
              );
              location.push(i - 1 - location.length);
              $this.remove();
            } else {
              // if td is not empty, push to array
            }
          });
        });
        // push leftOver to td
        $("tr").each(function (i) {
          var $this = $(this);
          const tdLength = $this.find("td");
          // check i is in location array  or not
          if (location.includes(i)) {
            // push leftOver to td
            tdLength.each(function (index) {
              if (index === 0) {
                let text = $(this).text();

                $(this).text(text + " " + leftOver[0]);
                leftOver.shift();
              }
            });
          }
        });
        console.log(leftOver);
        console.log(location);
        $("table").addClass(
          "w-full text-sm text-left text-gray-500 dark:text-gray-400"
        );
        $("tr").addClass("border-b border-gray-200 dark:border-gray-700");
        $("td").addClass(
          "py-3 px-4 border-l border-gray-200 dark:border-gray-700"
        );
        setPreviewText($.html());
      });
    };
  };
  const handleConvert = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setImageUrl(imageUrl));
      setSelectedImage(imageUrl);
    }
  };

  useEffect(() => {
    id && dispatch(fetchResidentById(+id));
  }, [dispatch, id]);
  useEffect(() => {}, [show]);
  return (
    <div className="w-5/6 mx-5">
      <div className="h-[25vh] border rounded-lg border-b-[3px] text-black py-4 w-full">
        <div className="flex py-4 h-full text-sm">
          <img
            src={resident?.imageSrc || noImage}
            alt=""
            className="w-[10%] mx-3"
          />
          <div className="flex w-1/4 items-center">
            <div className=" font-medium text-lg">{resident?.title}</div>
            <CgSandClock className="w-6 h-6" />
          </div>
          <div className="w-1/4 flex flex-col items-start justify-center">
            <div className="text-gray-500">Gender:</div>
            <div className="text-xl font-medium">{resident?.gender}</div>
            <div className="text-gray-500">Day of Birth:</div>
            <div className="text-xl font-medium">{resident?.dayOfBirth}</div>
            <div className="text-gray-500">Room:</div>
            <div className="text-xl font-medium">{resident?.room}</div>
            <div className="text-gray-500">Medicane No:</div>
            <div className="text-xl font-medium">{resident?.medicaneNo}</div>
            <div className="text-gray-500">Chart Expiry Date:</div>
            <div className="text-xl font-medium text-red-500">
              {resident?.expiryDate}
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-start justify-center">
            <div className="text-gray-500">Section:</div>
            <div className="text-xl font-medium">{resident?.section}</div>
            <div className="text-gray-500">RAC ID:</div>
            <div className="text-xl font-medium">{resident?.RACID}</div>
            <div className="text-gray-500">Facility:</div>
            <div className="text-xl font-medium">{resident?.facility}</div>
            <div className="text-gray-500">Doctor:</div>
            <div className="text-xl font-medium">{resident?.doctor}</div>
          </div>
          <div className="flex w-1/4 flex-col justify-center gap-1 items-start">
            <div className="flex gap-3">
              <div className="text-gray-500">Allergies</div>
              <BsPencilFill />
            </div>
            <div className="text-xl text-red-500">Nil Known</div>
            <div className="flex gap-3">
              <div className="text-gray-500">Diagnosis</div>
              <BsPencilFill />
            </div>
            <div className="">a</div>
            <div className="flex gap-3">
              <div className="text-gray-500">Comments</div>
              <BsPencilFill />
            </div>
            <div className="">a</div>
          </div>
        </div>
      </div>
      <div className="flex my-3 gap-10">
        <div className="w-1/2 mx-auto flex flex-col items-start">
          <div className="text-3xl font-semibold">Upload Prescription</div>
          <div className="border w-full my-5"></div>
          {selectedImage ? (
            <div className="w-full">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt=""
                className="w-full h-[400px] mx-auto"
              />
            </div>
          ) : (
            <div className="w-full h-[400px] mx-auto">
              <div className="border-dashed border border-slate-500 h-full my-1"></div>
            </div>
          )}
          <div className="flex w-full gap-5 items-center justify-center">
            <label
              htmlFor="fileInput"
              className="w-2/5 gap-2 border-slate-500 border text-slate-500 px-2 py-3 rounded-xl flex justify-center cursor-pointer items-center hover:opacity-90"
            >
              <FaUpload />
              Browse
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="fileInput"
              style={{ display: "none" }}
            />
            <Button
              type="primary"
              onClick={handleAddNewMedicine}
              className="w-2/5 bg-blue-600 text-white rounded-lg flex justify-center py-6 font-bold items-center my-6 text-xl"
            >
              <SiConvertio className="mx-2" /> Import
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-3xl font-semibold justify-start flex">
            Preview
          </div>
          <div className="border border-white w-full my-5"></div>
          {show ? (
            <div className="relative overflow-x-auto min-h-[405px] border"></div>
          ) : (
            <div className="relative overflow-x-auto min-h-[405px] border">
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: previewText,
                  }}
                ></span>
              </div>
            </div>
          )}
          <div className="flex justify-end">
            <Button
              type="primary"
              className="w-1/5 bg-blue-600 text-white rounded-lg flex justify-center py-6 font-bold items-center my-6 text-xl"
            >
              <AiFillSave className="mx-2" />
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
