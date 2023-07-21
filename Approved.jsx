import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { EditOutlined } from '@mui/icons-material';

const Approved = () => {

    return (
        <div className='mt-5 ms-5'>
            <h4 class="text-center">Curriculum List</h4>
            <table class="table table-bordered mt-5 ms-2 ">
                <thead>
                    <tr class="table-primary text-center">
                        <th scope="col">Sl.No</th>
                        <th scope="col">Training Name</th>
                        <th scope="col">Training Area</th>
                        <th scope="col">Training Category</th>
                        <th scope="col">Training Institution</th>
                        <th scope="col">Training Hours</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-secondary text-center">
                        <th scope="row">1</th>
                        <td>Training A</td>
                        <td>FSD</td>
                        <td>Corporate</td>
                        <td>Institution 1</td>
                        <td>X hours</td>
                        <td>
                            <DeleteOutlineOutlinedIcon />
                            <EditOutlined />
                            <VisibilityOutlinedIcon />

                        </td>
                        <td>Approved</td>
                    </tr>
                    <tr class="table-success text-center">
                        <th scope="row">2</th>
                        <td>Training B</td>
                        <td>ST</td>
                        <td>Academic</td>
                        <td>Institution 2</td>
                        <td>y hours</td>
                        <td>
                            <DeleteOutlineOutlinedIcon />
                            <EditOutlined />
                            <VisibilityOutlinedIcon />

                        </td>
                        <td>Approved</td>

                    </tr>
                    <tr class="table-danger text-center">
                        <th scope="row">3</th>
                        <td>Training C</td>
                        <td>ML-AI</td>
                        <td>Retail</td>
                        <td>Institution 3</td>
                        <td>X hours</td>
                        <td>
                            <DeleteOutlineOutlinedIcon />
                            <EditOutlined />
                            <VisibilityOutlinedIcon />
                        </td>
                        <td>Pending</td>
                    </tr>
                    <tr class="table-warning text-center">
                        <th scope="row">4</th>
                        <td>Training D</td>
                        <td>RPA</td>
                        <td>Corporate</td>
                        <td>Institution 4</td>
                        <td>X hours</td>
                        <td>
                            <DeleteOutlineOutlinedIcon />
                            <EditOutlined />
                            <VisibilityOutlinedIcon />
                        </td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Approved