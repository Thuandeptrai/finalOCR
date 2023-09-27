import React, { useEffect, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { BsPencilFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import noImage from "../image/No-Image-Placeholder.svg.webp";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "flowbite-react";
import { Button } from "antd";
import { FaUpload } from "react-icons/fa";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchResidentById } from "../redux/slices/resident.slice";
import { EditMedication } from "../layout/upload-file/EditMedication";
import { AddMedication } from "../layout/upload-file/AddMedication";

export const Profile: React.FC<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [edit, setEdit] = useState<string>("");
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [data, setData] = useState({});
  const { id } = useParams();

  const resident = useSelector(
    (state: RootState) => state.residents.userProfile
  );
  const navigate = useNavigate();
  useEffect(() => {
    // check if do not have userProfile then fetch
    if (!resident) {
      id && dispatch(fetchResidentById(+id));
    }
  }, [dispatch, id]);

  const showModal = (id: any) => {
    navigate(`/upload-image/${id}`);
  };
  const showModalEdit = (item: any) => {
    props.setOpenModal("edit");
    setEdit("Edit medication");
    setData(item);
  };
  const showModalAdd = () => {
    props.setOpenModal("add");
    setEdit("Add medication");
  };

  return (
    <div className="w-5/6 mx-5">
      <div className="h-[25vh] border rounded-lg border-b-[3px] text-black py-4 w-full">
        <div className="flex py-4 h-full text-sm">
          <img src={noImage} alt="" className="w-[10%] mx-3" />
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
      <div className="flex gap-5 py-3">
        <div className="flex my-2 items-center border-2 border-transparent hover:border-2 px-3 rounded-lg hover:border-teal-700 ease-out duration-300 py-2">
          <AiFillPlusCircle className="text-teal-700 w-6 h-6" />
          <div
            className="text-black text-lg ml-1 font-semibold cursor-pointer"
            onClick={showModalAdd}
          >
            Add Medication
          </div>
        </div>
        <div className="flex my-auto">
          <Button
            onClick={() => showModal(resident?.id)}
            type="primary"
            className="bg-[#1677ff] h-12 flex gap-2 items-center"
          >
            <FaUpload />
            Upload Prescription
          </Button>
        </div>
      </div>
      <div className="">
        {resident &&
        resident.listMedication &&
        resident?.listMedication.length > 0 ? (
          resident?.listMedication.map((item: any) => (
            <div
              className="pr-4 flex justify-items-start items-center border border-b-[3px] border-slate-100 rounded-lg text-lg w-full my-3"
              key={item.id}
            >
              <div className="bg-blue-700 w-10 h-[110px] rounded-tl-lg rounded-bl-lg"></div>
              <div className="flex text-black w-full items-center gap-3">
                <img src={noImage} alt="" className="w-[8%] mx-1 h-20" />
                <div className="w-1/4 flex flex-col items-start px-3">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-base italic">{item.description}</div>
                </div>
                <div className="border p-4 ">
                  <div className="">Routes</div>
                  <div className="font-semibold">{item.routes}</div>
                </div>
                <div className="flex flex-col items-start w-[30%]">
                  <div className="font-semibold">{item.takeMedicines}</div>
                  <div className="">{item.times}</div>
                  <div className="font-bold text-red-500">{item.crush}</div>
                </div>
                <div className="w-1/5 flex flex-col items-start">
                  <div className="flex gap-1">
                    <div className="">Start Date:</div>
                    <div className="">{item.startDate}</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="">Script Number:</div>
                    <div className="">{item.scriptNumber}</div>
                  </div>
                </div>
                <button className="border-b-[3px] border px-8 py-2 flex items-center gap-1 rounded-lg bg-red-600 text-white hover:bg-red-700 ease-out duration-500">
                  <ImCancelCircle /> Delete
                </button>
                <button
                  className="border-b-[3px] border px-8 py-2 flex items-center gap-1 rounded-lg bg-teal-600 text-white hover:bg-teal-700 ease-out duration-300"
                  onClick={() => showModalEdit(item)}
                >
                  <BsPencilFill /> Edit
                </button>
                <Modal
                  show={props.openModal === "edit" || props.openModal === "add"}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header className="font-semibold bg-teal-600">
                    <div className="text-white">{edit}</div>
                  </Modal.Header>
                  <Modal.Body>
                    {edit === "Edit medication" ? (
                      <div className="">
                        <EditMedication data={data} />
                        <div className="flex justify-end gap-3 absolute bottom-0 left-0 bg-slate-200 py-2 w-full px-4">
                          <Button
                            type="default"
                            className="text-red-500 flex gap-2 font-semibold items-center py-5 "
                            onClick={() => props.setOpenModal(undefined)}
                          >
                            <div className="text-red-500">X</div>
                            Cancel
                          </Button>
                          <Button
                            type="default"
                            className="bg-teal-500 font-semibold text-white px-7 flex items-center py-5"
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <AddMedication />
                        <div className="flex justify-end gap-3 absolute bottom-0 left-0 bg-slate-200 py-2 w-full px-4">
                          <Button
                            type="default"
                            className="text-red-500 flex gap-2 font-semibold items-center py-5 "
                            onClick={() => props.setOpenModal(undefined)}
                          >
                            <div className="text-red-500">X</div>
                            Cancel
                          </Button>
                          <Button
                            type="default"
                            className="bg-teal-500 font-semibold text-white px-7 flex items-center py-5"
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    )}
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          ))
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};
