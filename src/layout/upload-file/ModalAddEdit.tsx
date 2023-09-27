import { Modal } from 'flowbite-react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { EditMedication } from './EditMedication';
import { Button } from 'antd';
import { AddMedication } from './AddMedication';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

export const ModalAddEdit: React.FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [edit, setEdit] = useState<string>('');
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const [data, setData] = useState({})
    const { id } = useParams();
    return (
        <Modal show={props.openModal === 'edit' || props.openModal === 'add'} onClose={() => props.setOpenModal(undefined)} >
        <Modal.Header className='font-semibold bg-teal-600'><div className='text-white'>{edit}</div></Modal.Header>
        <Modal.Body>
            {edit === 'Edit medication' ?
                (
                    <div className="">
                        <EditMedication data={data} />
                        <div className="flex justify-end gap-3 absolute bottom-0 left-0 bg-slate-200 py-2 w-full px-4">
                            <Button type="default" className="text-red-500 flex gap-2 font-semibold items-center py-5 " onClick={() => props.setOpenModal(undefined)}>
                                <div className="text-red-500">X</div>
                                Cancel
                            </Button>
                            <Button type="default" className="bg-teal-500 font-semibold text-white px-7 flex items-center py-5" >Save</Button>
                        </div>
                    </div>

                ) : (
                    <div className="">
                        <AddMedication />
                        <div className="flex justify-end gap-3 absolute bottom-0 left-0 bg-slate-200 py-2 w-full px-4">
                            <Button type="default" className="text-red-500 flex gap-2 font-semibold items-center py-5 " onClick={() => props.setOpenModal(undefined)}>
                                <div className="text-red-500">X</div>
                                Cancel
                            </Button>
                            <Button type="default" className="bg-teal-500 font-semibold text-white px-7 flex items-center py-5" >Save</Button>
                        </div>
                    </div>
                )
            }
        </Modal.Body>
    </Modal>
    )
}