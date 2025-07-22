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
import { DocsComponents, DocsExample } from 'src/components'

const RelationalDatabase = () => {
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

            <div className='mt-5'>
              <h5> Qual a diferença entre SQL e Postgres? </h5>
              <p> SQL é uma linguagem de programação padrão para criar, consultar, editar um banco de dados relacional. Já o Postgres é um sistema gerenciador de banco de dados (SGDB)  </p>
            </div>

            <div className='mt-5'>
              <h5> Tipos numéricos </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Descrição
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Smallint
                    </CTableDataCell>
                    <CTableDataCell>
                      Aceita valores entre 32 mil e -32 mil
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Int
                    </CTableDataCell>
                    <CTableDataCell>
                      Aceita valores entre 2 milhões e -2 milhões
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Bigint
                    </CTableDataCell>
                    <CTableDataCell>
                      Aceita valores entre 9 quintilhões e -9 quintilhões
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Numeric(p,s)
                    </CTableDataCell>
                    <CTableDataCell>
                      É utilizado para precisão exata, onde o "p" define a quantidade máxima de digitos e o "s" define a quantidade de digitos após a virgula.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Serial
                    </CTableDataCell>
                    <CTableDataCell>
                      É tipo inteiro com auto incremento, muito utilizado em ids
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>

            <div className='mt-5'>
              <h5> Tipos texto </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Descrição
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Char(n)
                    </CTableDataCell>
                    <CTableDataCell>
                      Texto de tamanho fixo definido por n
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Varchar(n)
                    </CTableDataCell>
                    <CTableDataCell>
                      Tamanho variável onde n é o quantidade máxima de caracteres.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Text
                    </CTableDataCell>
                    <CTableDataCell>
                      Tamanho ilimitado, ou seja a coluna não tem limite pré-definido de caracteres
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>

             <div className='mt-5'>
              <h5> Tipos Data/hora </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Descrição
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Date
                    </CTableDataCell>
                    <CTableDataCell>
                      Armazena somente a data YYYY-MM-DD
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Time 
                    </CTableDataCell>
                    <CTableDataCell>
                      Armazena somente hora, minutos e segundos: hh:mm:ss
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      timestamp
                    </CTableDataCell>
                    <CTableDataCell>
                      Armazena tanto data quanto horas: YYYY-MM-DD hh:mm:ss
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RelationalDatabase
