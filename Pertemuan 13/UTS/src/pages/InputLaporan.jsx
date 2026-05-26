import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InputLaporan({ data, updateData }) {

    const navigate = useNavigate()

    const [tanggal, setTanggal] = useState('')
    const [shift, setShift] = useState('')
    const [mesin, setMesin] = useState('')
    const [produksi, setProduksi] = useState('')
    const [reject, setReject] = useState('')

    const netto = Number(produksi) - Number(reject)

    const yieldPct = produksi > 0
        ? ((netto / Number(produksi)) * 100).toFixed(2)
        : '0.00'

    const rejectMelebihi = Number(reject) > Number(produksi)

    const isValid =
        tanggal &&
        shift &&
        mesin &&
        produksi !== '' &&
        reject !== '' &&
        !rejectMelebihi

    const handleSubmit = (e) => {
        e.preventDefault()

        const entri = {
            id: Date.now(),
            tanggal,
            shift,
            mesin,
            produksi: Number(produksi),
            reject: Number(reject),
            netto,
            yield: Number(yieldPct)
        }

        updateData([entri, ...data])

        setTanggal('')
        setShift('')
        setMesin('')
        setProduksi('')
        setReject('')

        navigate('/riwayat')
    }

    return (
        <div>

            <h2 className='mb-4'>Input Laporan Produksi</h2>

            <div className='card shadow-sm'>
                <div className='card-body'>

                    <form onSubmit={handleSubmit}>

                        <div className='row g-3'>

                            <div className='col-md-6'>
                                <input
                                    type='date'
                                    className='form-control'
                                    value={tanggal}
                                    onChange={(e) => setTanggal(e.target.value)}
                                />
                            </div>

                            <div className='col-md-6'>
                                <select
                                    className='form-select'
                                    value={shift}
                                    onChange={(e) => setShift(e.target.value)}
                                >
                                    <option value=''>-- Pilih Shift --</option>
                                    <option value='Pagi'>Pagi</option>
                                    <option value='Siang'>Siang</option>
                                    <option value='Malam'>Malam</option>
                                </select>
                            </div>

                            <div className='col-md-6'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nama Mesin'
                                    value={mesin}
                                    onChange={(e) => setMesin(e.target.value)}
                                />
                            </div>

                            <div className='col-md-6'>
                                <input
                                    type='number'
                                    min='0'
                                    className='form-control'
                                    placeholder='Jumlah Produksi'
                                    value={produksi}
                                    onChange={(e) => setProduksi(e.target.value)}
                                />
                            </div>

                            <div className='col-md-6'>
                                <input
                                    type='number'
                                    min='0'
                                    className={`form-control ${rejectMelebihi ? 'is-invalid' : ''}`}
                                    placeholder='Jumlah Reject'
                                    value={reject}
                                    onChange={(e) => setReject(e.target.value)}
                                />

                                {rejectMelebihi && (
                                    <div className='invalid-feedback'>
                                        Reject tidak boleh melebihi Produksi
                                    </div>
                                )}
                            </div>

                            {produksi && (
                                <div className='col-12'>
                                    <div className='alert alert-info mb-0'>
                                        <b>Netto:</b> {netto} unit |
                                        <b> Yield:</b> {yieldPct}%
                                    </div>
                                </div>
                            )}

                            <div className='col-12'>
                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                    disabled={!isValid}
                                >
                                    Simpan
                                </button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}