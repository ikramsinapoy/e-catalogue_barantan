import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Form() {
    const [form, setForm] = useState({
        companyName: "",
        companyAddress: "",
        contactPerson: "",
        telepon: "",
        statusResmi: "",
        produkUnggulan: "",
        produksiPanen: "",
        luasLahan: "",
        typeProduct: "",
        komoditiProduct: "",
        productName: "",
        productPhoto: [],
        productDescription: "",
        benefit: "",
        origins: "",
        species: "",
        price: "",
        unit: "",
    });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    console.log("data", form)
    return (
        <div className=''>
            <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Profile</h3>
            <hr className='my-5'/>

            <form>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Nama Perusahaan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' name='companyName' value={form.companyName} onChange={onChange} type="text"/>
                </div>
                
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Alamat Perusahaaan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='companyAddress' value={form.companyAddress} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Contact Person</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='contactPerson' value={form.contactPerson} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Telepon/Fax/HP</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='telepon' value={form.telepon} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Status Resmi</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='statusResmi' value={form.statusResmi} onChange={onChange}/>
                </div>

                <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Informasi Pendukung</h3>
                <hr className='my-5'/>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Produk Unggulan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='produkUnggulan' value={form.produkUnggulan} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Produksi Panen</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='produksiPanen' value={form.produksiPanen} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Luas Lahan</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='luasLahan' value={form.luasLahan} onChange={onChange}/>
                </div>

                <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Products</h3>
                <hr className='my-5'/>
                
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Tipe Produk</p>
                    <select className='border border-[#ced4da] rounded-md p-2 md:w-2/3' name='typeProduct' value={form.typeProduct} onChange={onChange}>
                        <option className='text-gray-light'>Pilih Tipe</option>
                        <option value="estate">Estate</option>
                        <option value="horticulture">Horticulture</option>
                        <option value="corps">Corps</option>
                        <option value="animal">Animal</option>
                    </select>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Komoditi Produk</p>
                    <select className='border border-[#ced4da] rounded-md p-2 md:w-2/3' name='komoditiProduct' value={form.komoditiProduct} onChange={onChange}>
                        {form.typeProduct === "estate" ?
                            <>
                                <option value="coffeBean">Coffee Bean</option>
                                <option value="nutmeg">Nutmeg</option>
                                <option value="vanili">Vanili</option>
                                <option value="pepper">Pepper</option>
                            </>
                            :
                            <>
                                {form.typeProduct === "horticulture" ?
                                    <>
                                        <option value="mangosteen">Mangosteen</option>
                                        <option value="mango">Mango</option>
                                        <option value="banana">Banana</option>
                                        <option value="pineapple">Pineapple</option>
                                    </>
                                    :
                                    <>
                                        {form.typeProduct === "corps" ?
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
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='productName' value={form.productName} onChange={onChange}/>
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
                    <textarea className='border border-[#ced4da] rounded-md p-2 md:w-2/3' rows="4" name='productDescription' value={form.productDescription} onChange={onChange}></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:items-start justify-between mb-3'>
                    <p className='text-lg'>Manfaat Produk</p>
                    <textarea className='border border-[#ced4da] rounded-md p-2 md:w-2/3' rows="3" name='benefit' value={form.benefit} onChange={onChange}></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Asal Produk</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='origins' value={form.origins} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Jenis Produk</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text" name='species' value={form.species} onChange={onChange}/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Harga</p>
                    <div className='md:w-2/3 flex flex-col md:flex-row md:items-center justify-between gap-2'>
                        <input className='border border-[#ced4da] rounded-md p-2 w-full' type="text" name='price' value={form.price} onChange={onChange}/>
                        <p className='text-lg ml-3 md:ml-0'>/</p>
                        <select className='border border-[#ced4da] rounded-md p-2' name='unit' value={form.unit} onChange={onChange}>
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