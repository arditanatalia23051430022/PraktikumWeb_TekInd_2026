import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import InputLaporan from './pages/InputLaporan'
import RiwayatData from './pages/RiwayatData'

const KEY = 'DATA_LAPORAN_PRODUKSI'

export default function App() {

    const [data, setData] = useState([])

    const location = useLocation()
    const active = (path) => location.pathname === path ? 'active' : ''

    useEffect(() => {
        try {
            const saved = localStorage.getItem(KEY)
            if (saved) setData(JSON.parse(saved))
        } catch (err) {
            console.error('Gagal load storage:', err)
        }
    }, [])

    const updateData = (newData) => {
        setData(newData)
        localStorage.setItem(KEY, JSON.stringify(newData))
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>

                    <span className='navbar-brand fw-bold'>
                        Laporan Produksi 
                    </span>

                    <small className='text-light opacity-75 me-3'>
                        Ardita Natalia (23051430022)
                    </small>

                    <button className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navMenu'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse justify-content-end'
                        id='navMenu'>

                        <div className='navbar-nav'>
                            <Link className={`nav-link ${active('/')}`} to='/'>Dashboard</Link>
                            <Link className={`nav-link ${active('/input')}`} to='/input'>Input Laporan</Link>
                            <Link className={`nav-link ${active('/riwayat')}`} to='/riwayat'>Riwayat Data</Link>
                        </div>

                    </div>
                </div>
            </nav>

            <div className='container mt-4'>

                <Routes>

                    <Route path='/' element={<Dashboard data={data} />} />

                    <Route path='/input'
                        element={<InputLaporan data={data} updateData={updateData} />} />

                    <Route path='/riwayat'
                        element={<RiwayatData data={data} updateData={updateData} />} />

                </Routes>

            </div>
        </>
    )
}