import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Form() {
    const [type, setType] = useState({
        typeName: ""
    });

    const onChangeType = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setType({ ...type, [name]: value });
    };

    return (
        <div className=''>
            <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Profile</h3>
            <hr className='my-5'/>

            <form>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Nama Perusahaan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>
                
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Alamat Perusahaaan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Contact Person</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Telepon/Fax/HP</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="phone"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Status Resmi</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="phone"/>
                </div>

                <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Informasi Pendukung</h3>
                <hr className='my-5'/>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Produk Unggulan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="phone"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Produksi Panen</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="phone"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Luas Lahan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="phone"/>
                </div>

                <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Products</h3>
                <hr className='my-5'/>
                
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Tipe Produk</p>
                    <select className='border border-[#ced4da] rounded-md p-2 md:w-2/3' name='typeName' value={type.typeName} onChange={onChangeType}>
                        <option className='text-gray-light'>Pilih Tipe</option>
                        <option value="estate">Estate</option>
                        <option value="horticulture">Horticulture</option>
                        <option value="corps">Corps</option>
                        <option value="animal">Animal</option>
                    </select>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Komoditi Produk</p>
                    <select className='border border-[#ced4da] rounded-md p-2 md:w-2/3'>
                        {type.typeName === "estate" ?
                            <>
                                <option value="coffeBean">Coffee Bean</option>
                                <option value="nutmeg">Nutmeg</option>
                                <option value="vanili">Vanili</option>
                                <option value="pepper">Pepper</option>
                            </>
                            :
                            <>
                                {type.typeName === "horticulture" ?
                                    <>
                                        <option value="mangosteen">Mangosteen</option>
                                        <option value="mango">Mango</option>
                                        <option value="banana">Banana</option>
                                        <option value="pineapple">Pineapple</option>
                                    </>
                                    :
                                    <>
                                        {type.typeName === "corps" ?
                                            <>
                                                <option value="mungBean">Mung Bean</option>
                                                <option value="porang">Porang</option>
                                                
                                            </>
                                            :
                                            <>
                                                <option value="birdsNest">Bird's Nest</option>
                                                <option value="honey">Honey</option>
                                                <option value="blackSoldierFly">Black Soldier Fly</option>
                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                        
                    </select>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Nama Produk</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-start justify-between mb-3'>
                    <p className='text-lg'>Foto Produk</p>
                    <div className='md:w-2/3 flex flex-col gap-2'>
                        <input className='border border-[#ced4da] rounded-md p-2' type="file"/>
                        <input className='border border-[#ced4da] rounded-md p-2' type="file"/>
                        <input className='border border-[#ced4da] rounded-md p-2' type="file"/>
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-row md:items-start justify-between mb-3'>
                    <p className='text-lg'>Deskripsi Produk</p>
                    <textarea className='border border-[#ced4da] rounded-md p-2 md:w-2/3' rows="4"></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:items-start justify-between mb-3'>
                    <p className='text-lg'>Manfaat Produk</p>
                    <textarea className='border border-[#ced4da] rounded-md p-2 md:w-2/3' rows="3"></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Asal Produk</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Jenis Produk</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Harga</p>
                    <div className='md:w-2/3 flex flex-col md:flex-row md:items-center justify-between gap-2'>
                        <input className='border border-[#ced4da] rounded-md p-2 w-full' type="text"/>
                        <p className='text-lg ml-3 md:ml-0'>/</p>
                        <select className='border border-[#ced4da] rounded-md p-2 '>
                            <option value="gram">gram</option>
                            <option value="ons">hg(ons)</option>
                            <option value="kg">kg</option>
                        </select>
                    </div>
                    
                </div>

                <div className='flex justify-center'>
                    <Link to="/">
                        <button className='bg-primary hover:bg-[#2f9e44] text-white rounded-md p-2 w-52 font-medium text-lg hover:drop-shadow-md'>Submit</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form