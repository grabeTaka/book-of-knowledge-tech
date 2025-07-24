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

            <div className='mt-5'>
              <h5>Como criar um banco?</h5>
              <code>
                CREATE DATABASE database_name;
              </code>
            </div>
            <div className='mt-5'>
              <h5> O que são schemas e suas vantagens? </h5>
              <p> Schemas são basicamentes compartimentos dentro de um mesmo banco de dados, suas vantagens de utilização são: </p>
              <ul>
                <li>
                  Organização lógica, você pode agrupar tabelas dentro de um mesmo schema evitando que muitas tabelas fiquem misturadas dentro um mesmo namespace.
                </li>
                <li>
                  Isolamento, schemas permitem isolar tabelas, então tabelas com mesmo nome podem coexistir em schemas diferentes.
                </li>
                <li>
                  Permissões, com schemas um usuário pode ter acesso a schemas especificos de um banco de dados, mantendo segurança entre os módulos permitindo uma maior divisão de responsabilidade e segurança.
                </li>
              </ul>
            </div>

            <div className='mt-5'>
              <h5>Como criar um schema?</h5>
              <code>
                CREATE SCHEMA schema_name;
              </code>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #2 - Tipos de relacionamento</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> O que é uma primary key? </h5>
              <p> É um tipo de restrição no banco de dados, onde se define que uma coluna nunca será null, será única para aquela tabela e poderá ser referênciada por outra tabela.  </p>
            </div>

            <div className='mt-2'>
              <h5> O que é uma foreign key? </h5>
              <p> É um tipo de restrição no banco de dados, onde se define que uma coluna irá "apontar" para uma coluna que é a chave primaria de outra tabela, gerando assim relação entre tabelas.  </p>
            </div>

            <div className='mt-2'>
              <h5> Relacionamento 1:1 </h5>
              <p> Cada registro da tabela A irá se relacionar com um único registro da tabela b.  </p>
              <img src="../../../assets/images/oneToOne.png" alt="Relacionamento 1 para 1" />
            </div>

            <div className='mt-2'>
              <h5> Relacionamento 1:N </h5>
              <p> Cada registro da tabela A poderá se relacionar com vários registros da tabela b.  </p>
              <img src="../../../assets/images/oneToOne.png" alt="Relacionamento 1 para N" />
            </div>

            <div className='mt-2'>
              <h5> Relacionamento N:N </h5>
              <p> Cada registro da tabela A poderá se relacionar com vários registros da tabela b, e um registro da tabela B também poderá se relacionar com vários registros da tabela A. </p>
              <img src="../../../assets/images/oneToOne.png" alt="Relacionamento N para N" />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RelationalDatabase
