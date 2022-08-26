import React from 'react'
import visit from '../Asset/visit.png'
import dataPerusahaan from '../Asset/data perusahaan.png'
import dataKomoditas from '../Asset/data komoditas.png'
import post from '../Asset/post.png'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Promote() {
    const navigate = useNavigate();
    const onClick = () =>{
        Swal.fire({
        title: 'Are you an agriculture exportir ?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#00A700',
        cancelButtonColor: '#273444',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: 'Submit your PPK online number',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (login) => {
                    return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                        throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                        `Request failed: ${error}`
                        )
                    })
                },
                allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/registrasi-products')
                    }
                })
            } else {
                navigate('/registrasi-products')
            }
        })

        // const swalWithBootstrapButtons = Swal.mixin({
        // customClass: {
        //     confirmButton: 'btn btn-success',
        //     cancelButton: 'btn btn-danger'
        // },
        // buttonsStyling: false
        // })

        // swalWithBootstrapButtons.fire({
        // title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        // icon: 'warning',
        // showCancelButton: true,
        // confirmButtonText: 'Yes, delete it!',
        // cancelButtonText: 'No, cancel!',
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        // reverseButtons: true
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         swalWithBootstrapButtons.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //         )
        //     } else if (
        //         /* Read more about handling dismissals below */
        //         result.dismiss === Swal.DismissReason.cancel
        //     ) {
        //         swalWithBootstrapButtons.fire(
        //         'Cancelled',
        //         'Your imaginary file is safe :)',
        //         'error'
        //         )
        //     }
        // })
    }
  return (
    <div>
        <h2 className='font-bold text-6xl text-center mb-10 text-[#333333]'>How To Promotes</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12 2xl:gap-20 justify-items-center content-center mb-16'>
            <div className='w-48'>
                <img src={visit} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>01</h4>
                <p className='text-xl text-center text-[#555555]'>Visit <span className='font-bold'>e-catalog</span> website</p>
            </div>

            <div className='w-48'>
                <img src={dataPerusahaan} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>02</h4>
                <p className='text-xl text-center text-[#555555]'>Fill In Company Profile</p>
            </div>

            <div className='w-48'>
                <img src={dataKomoditas} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>03</h4>
                <p className='text-xl text-center text-[#555555]'>Fill In Commodity Data</p>
            </div>

            <div className='w-48'>
                <img src={post} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>04</h4>
                <p className='text-xl text-center text-[#555555]'>Post</p>
            </div>
        </div>

        <div className='flex justify-center'>
            {/* <Link to="/registrasi-products"> */}
                <button onClick={onClick} className='bg-primary hover:bg-[#2f9e44] text-white p-3 rounded-md w-52 font-medium text-lg hover:drop-shadow-md'>promote me!</button>
            {/* </Link> */}
        </div>
    </div>
  )
}

export default Promote