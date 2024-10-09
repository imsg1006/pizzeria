import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

import {  useNavigate } from 'react-router-dom';

const UserInfo = ({setIsOrderPlaced,setCart,setIsModalOpen}) => {

    const navigate = useNavigate();

    const handleSubmit = (values, { resetForm }) => {
        setIsOrderPlaced(true); 
        setCart([]);
        localStorage.removeItem('cart');
        setTimeout(() => {
          navigate('/');
          resetForm(); 
        }, 2000); 
      };

    const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          address: ''
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters long'),
          phone: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
          address: Yup.string()
            .required('Address is required')
            .min(10, 'Address must be at least 10 characters long'),
        }),
        onSubmit: handleSubmit,
      });

      

  return (
    <div>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formik.values.name} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                  required
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-xs">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formik.values.phone} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
                  required
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-xs">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="address">Address</label>
                <input 
                  type="text" 
                  name="address" 
                  value={formik.values.address} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'} rounded`}
                  required
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500 text-xs">{formik.errors.address}</div>
                ) : null}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-2 p-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2 bg-pink-500 text-white rounded"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default UserInfo