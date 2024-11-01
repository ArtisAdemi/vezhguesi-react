import React, { useState } from 'react';
import ReportServices from "../services/Reports"
import { Report } from '../models/Reports';
import { useAuth } from '../hooks/useAuth';
import Swal from "sweetalert2";
interface ReportsFormProps {
    closeModal: () => void;
}

const ReportsForm: React.FC<ReportsFormProps> = ({ closeModal }) => {

    const { currentUser, authToken } = useAuth();

    const [reportsData, setReportsData] = useState<Report>({
        subject: "",
        endDate: new Date(),
        startDate: new Date(),
    });

    const [errors, setErrors] = useState<Partial<Report>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setReportsData((prevData: Report) => ({
            ...prevData,
            [name]: name === 'startDate' || name === 'endDate' ? new Date(value) : value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors: Partial<Report> = {};
        if (!reportsData.subject) newErrors.subject = "Subject is required";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const currentDate = new Date();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (reportsData.startDate > currentDate) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Date Input.',
                text: "Start date should be an older date than the current date",
            });
            return;
        }
        if (reportsData.endDate > currentDate) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Date Input.',
                text: "You cannot make a report for the future",
            });
            return;
        }
        if (reportsData.startDate > reportsData.endDate) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Date Input.',
                text: "Start date should be an older date than end date",
            });
            return;
        }

        try {
            if (currentUser && authToken) {
                await ReportServices.createReport(reportsData, authToken);
            }
            Swal.fire({
                icon: 'success',
                title: 'Report created successfully!',
            });
            closeModal();
        } catch (error) {
            console.error("Report error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error creating report!',
                text: 'Please try again.',
            });
        }
    };

    return (
        <div className="fixed z-100 h-full inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg max-w-lg w-full space-y-4">
                <h1 className='text-[#54595E] text-2xl font-semibold'>New Report</h1>
                <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='flex flex-col mb-3'>
                        <label className='mb-2' htmlFor="subject">Subject</label>
                        <input className='p-2 border border-[#4F4F4F] rounded-lg'
                            name='subject'
                            value={reportsData.subject}
                            onChange={handleChange}
                            type="text"
                            id='subject'
                            placeholder='Your subject' />
                        {errors.subject && (
                            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                        )}
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col mb-3 mr-2 w-1/2'>
                            <label className='mb-2' htmlFor="startDate">Start Date</label>
                            <input
                                className='p-2 border border-[#4F4F4F] rounded-lg'
                                name='startDate'
                                value={reportsData.startDate.toISOString().split('T')[0]} // Convert Date to YYYY-MM-DD string
                                onChange={handleChange}
                                type="date"
                                id='startDate'
                            />
                        </div>
                        <div className='flex flex-col mb-3 w-1/2'>
                            <label className='mb-2' htmlFor="endDate">To Date</label>
                            <input
                                className='p-2 border border-[#4F4F4F] rounded-lg'
                                type="date"
                                name='endDate'
                                value={reportsData.endDate.toISOString().split('T')[0]} // Convert Date to YYYY-MM-DD string
                                onChange={handleChange}
                                id='endDate'
                            />
                        </div>

                    </div>
                    <div>
                        <button className='border border-black w-1/5 text-black py-2 px-3 rounded-lg mr-4 hover:opacity-80 duration-300 hover:scale-105' onClick={closeModal}>Cancel</button>
                        <button type="submit" className='bg-[#0C7FDA] w-1/5 text-white py-2 px-3 rounded-lg hover:opacity-80 duration-300 hover:scale-105'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReportsForm