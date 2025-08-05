import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const CleanCode = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #1 - Conceitos gerais e tipagens</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> O que é um banco de dados relacional? </h5>
              <p>É um tipo de banco de dados que organiza os dados em tabelas, que podem se relacionar por meio de chaves primarias ou estrangeiras.  </p>
            </div>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CleanCode
