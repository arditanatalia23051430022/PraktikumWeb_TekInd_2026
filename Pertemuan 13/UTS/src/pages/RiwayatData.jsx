export default function RiwayatData({ data, updateData }) {

    const handleHapus = (id) => {
        if (window.confirm('Hapus data ini?')) {
            updateData(data.filter(item => item.id !== id))
        }
    }

    const handleHapusSemua = () => {
        if (window.confirm('Hapus SEMUA data? Tidak bisa dibatalkan.')) {
            localStorage.removeItem('DATA_LAPORAN_PRODUKSI')
            updateData([])
        }
    }

    return (
        <div>

            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h2 className='mb-4'>Riwayat Data Produksi</h2>

                <button className='btn btn-outline-danger btn-sm'
                    onClick={handleHapusSemua}>
                    Hapus Semua
                </button>
            </div>

            <div className='table-responsive'>

                <table className='table table-striped table-bordered align-middle w-100'>

                    <thead className='table-dark'>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Shift</th>
                            <th>Nama Mesin</th>
                            <th>Produksi</th>
                            <th>Reject</th>
                            <th>Netto</th>
                            <th>Yield (%)</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data.length === 0 ? (
                            <tr>
                                <td colSpan='9' className='text-center text-muted'>
                                    Belum ada data
                                </td>
                            </tr>
                        ) : (

                            data.map((item, i) => (
                                <tr key={item.id}>
                                    <td>{i + 1}</td>
                                    <td>{item.tanggal}</td>
                                    <td>{item.shift}</td>
                                    <td>{item.mesin}</td>
                                    <td>{item.produksi}</td>
                                    <td>{item.reject}</td>
                                    <td>{item.netto}</td>
                                    <td>{item.yield}%</td>

                                    <td>
                                        <button className='btn btn-danger btn-sm'
                                            onClick={() => handleHapus(item.id)}>
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    )
}