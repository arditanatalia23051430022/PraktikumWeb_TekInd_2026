export default function Dashboard({ data }) {
  const totalProduksi = data.reduce((sum, d) => sum + d.produksi,0)
  const totalReject = data.reduce((sum, d) => sum + d.reject,0)

  const avgYield = data.length > 0
    ? data.reduce((s, d) => s + d.yield, 0) / data.length
    : 0

  return (
    <div>
      <h2 className='mb-4'>Dashboard Produksi</h2>

      <div className='row g-3'>

        <div className='col-md-4'>
          <div className='card text-white bg-primary'>
            <div className='card-body'>
              <h6 className='card-subtitle mb-1'>
                Total Produksi
              </h6>
              <h2 className='card-title'>
                {totalProduksi}
              </h2>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card text-white bg-danger'>
            <div className='card-body'>
              <h6 className='card-subtitle mb-1'>
                Total Reject
              </h6>
              <h2 className='card-title'>
                {totalReject}
              </h2>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='card text-white bg-success'>
            <div className='card-body'>
              <h6 className='card-subtitle mb-1'>
                Yield
              </h6>

              <h2
                className='card-title'
                style={{ color: data.length > 0 && avgYield < 85 ? '#B91C1C' : '#15803D' }}
              >
                {avgYield.toFixed(2)}%
              </h2>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}