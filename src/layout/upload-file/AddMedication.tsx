
import { Button, DatePicker, DatePickerProps, Input, Select } from 'antd'
import React, { useState } from 'react'
import { AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai'

type AddFormProps = {
    
}
export const AddMedication: React.FC<AddFormProps> = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div>
            <form className='font-medium pb-8'>
                    <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="floating_repeat_password" className="text-red-600">Medicine*</label>
                        <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 w-full text-sm text-gray-900" placeholder=" " required />
                    </div>
                    <div className="relative z-0 w-full mb-6 group flex gap-2 items-center">
                        <input type="checkbox" name="repeat_password" id="floating_repeat_password" />
                        <label htmlFor="floating_repeat_password">Brand name clinically necessary</label>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-4">
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="floating_repeat_password">Qty</label>
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 w-full text-sm text-gray-900" placeholder=" " required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="floating_repeat_password">Authority Code</label>
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 w-full text-sm text-gray-900" placeholder=" " required />
                        </div>
                        <div className="flex w-full items-center">
                            <Button type='default' className='bg-cyan-600 text-white h-10 hover:!text-white w-full flex items-center text-lg font-semibold justify-center gap-2 py-[22px]'><AiOutlineSearch />PBS Lookup</Button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-4">
                        <div className="relative z-0 w-full mb-6 group col-span-2">
                            <label htmlFor="floating_repeat_password" className='flex items-center gap-2'>Authorsation Reference No. <AiOutlineQuestionCircle className='text-emerald-700' /></label>
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 w-full text-sm text-gray-900" placeholder=" " required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-4">
                        <div className="relative z-0 w-full mb-6 group col-span-1">
                            <label htmlFor="floating_repeat_password">Route</label>
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 w-full text-sm text-gray-900" placeholder=" " required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group col-span-2">
                            <label htmlFor="floating_repeat_password" className='text-red-600'>Indication (Reason for prescribing)*</label>
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 w-full text-sm text-gray-900" placeholder=" " required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-5 md:gap-4">
                        <div className="relative z-0 w-full group col-span-2 ">
                            <label htmlFor="floating_repeat_password" className='text-red-600 flex items-center gap-1'>Psychotropic Consent *<AiOutlineQuestionCircle className='text-emerald-700' /></label>
                        </div>
                        <div className="relative z-0 w-full group col-span-1 gap-2 flex items-center">
                            <div className="flex items-center gap-1">
                                <input type="radio" className="border-red-500" name="repeat_password" id="floating_repeat_password" placeholder="" required value="YES" />
                                <label htmlFor="floating_repeat_password">YES</label>
                            </div>
                            <div className="flex items-center gap-1">
                                <input type="radio" className="border-red-500" name="repeat_password" id="floating_repeat_password" placeholder="" required value="NO"/>
                                <label htmlFor="floating_repeat_password">NO</label>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2 my-2">
                        <div className="">Treatment Type</div>
                        <Select
                            defaultValue="lucy"
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                    <div className="flex gap-2 justify-between my-3">
                        <label htmlFor="floating_repeat_password" className='text-red-500'>Full Direction* </label>
                        <div className="flex gap-1 items-center">
                            <label htmlFor="">PRN</label>
                            <input type="checkbox" name="repeat_password" id="floating_repeat_password" />
                        </div>
                    </div>
                    <textarea className='w-full' />
                    <div className="grid gap-2 my-2">
                        <div className="text-red-500">Frequency*</div>
                        <Select
                            defaultValue="lucy"
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                    <div className="grid md:grid-cols-10 gap-4 my-4">
                        <div className="grid grid-cols-7 col-span-7 w-5/6">
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Mon</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Tue</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Wed</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Thu</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Fri</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Sat</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                            <div className="col-span-1 mx-auto">
                                <label htmlFor="">Sun</label>
                                <input type="checkbox" name="repeat_password" id="floating_repeat_password" className='block mx-auto my-1' />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <div className="text-red-500">Breakfast*</div>
                            <select
                                defaultValue="lucy"
                                className='w-full mt-2 border-black'
                                onChange={(event) => handleChange(event.target.value)}
                            >
                                <option value="08:00">08:00</option>
                                <option value="12:00">12:00</option>
                                <option value="17:00">17:00</option>
                                <option value="20:00">20:00</option>
                            </select>
                            <Input value=".125" className='' />
                        </div>
                        <div className="col-span-1">
                            <div className="text-red-500">Lunch*</div>
                            <select
                                defaultValue="lucy"
                                className='w-full mt-2 border-black'
                                onChange={(event) => handleChange(event.target.value)}
                            >
                                <option value="08:00">08:00</option>
                                <option value="12:00">12:00</option>
                                <option value="17:00">17:00</option>
                                <option value="20:00">20:00</option>
                            </select>
                            <Input value=".125" className='' />
                        </div>
                        <div className="col-span-1">
                            <div className="text-red-500">Dinner*</div>
                            <select
                                defaultValue="lucy"
                                className='w-full mt-2 border-black'
                                onChange={(event) => handleChange(event.target.value)}
                            >
                                <option value="08:00">08:00</option>
                                <option value="12:00">12:00</option>
                                <option value="17:00">17:00</option>
                                <option value="20:00">20:00</option>
                            </select>
                            <Input value=".125" className='' />
                        </div>
                        <div className="col-span-1">
                            <div className="text-red-500">Bedtime*</div>
                            <select
                                defaultValue="lucy"
                                className='w-full mt-2 border-black'
                                onChange={(event) => handleChange(event.target.value)}
                            >
                                <option value="08:00">08:00</option>
                                <option value="12:00">12:00</option>
                                <option value="17:00">17:00</option>
                                <option value="20:00">20:00</option>
                            </select>
                            <Input value=".125" className='' />
                        </div>
                    </div>
                    <div className="flex gap-1 items-center my-3">
                        <input type="checkbox" name="repeat_password" id="floating_repeat_password" />
                        <label htmlFor="">Add Times</label>
                    </div>
                    <div className="flex gap-1 items-center my-3">
                        <input type="checkbox" name="repeat_password" id="floating_repeat_password" />
                        <label htmlFor="">Valid for duration of chart</label>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <div className="text-red-500">Start Date*</div>
                            <DatePicker onChange={onChange} className='w-full border-black rounded-none ' />
                        </div>
                        <div className="col-span-1">
                            <div>End Date</div>
                            <DatePicker onChange={onChange} className='w-full border-black rounded-none ' />
                        </div>
                        <div className="col-span-1">
                            <div>No. Days</div>
                            <Input className='p-1' />
                        </div>
                    </div>
                    <div className="flex gap-1 items-center my-3">
                        <input type="checkbox" name="repeat_password" id="floating_repeat_password" />
                        <label htmlFor="">Add Variable Regimen</label>
                    </div>
                    <div className="flex gap-1 items-center my-3">
                        <input type="checkbox" name="repeat_password" id="floating_repeat_password" />
                        <label htmlFor="">Brand Substitution not permitted</label>
                    </div>
                    
                </form>
        </div>
    )
}