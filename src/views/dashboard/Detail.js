import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

import {fieldhostbl, jns_manifest, jns_moda, datakpbcs, kelpos } from './Datasource.js'
import Detailhostbl from './Detailhostbl.js'

const Detail = (props) => {

  const [modal, setModal] = useState(true)
  const [datablhost, setDatablhost] = useState([])
  const filteran = datablhost.filter(item => item.parentid == 2)
  return (
    <CRow>
      <CButton 
        onClick={() => setModal(!modal)} 
        className="mr-1"
        color="info"
      >
        <a>detail</a>
      </CButton>
      <CModal 
        show={modal} 
        onClose={setModal}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Daftar Host BL</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="p-2 d-flex justify-content-end">
          <CRow>
          <Detailhostbl nomaster={props.nomaster} tglmaster={props.tglmaster} kelpos={props.kelpos} noaju={props.noaju} />
          </CRow>
          </div>
          <CRow>
            <CCol xs="12">
              <CDataTable
                items={filteran}
                fields={fieldhostbl}
                itemsPerPage={5}
                pagination                      
              />
              </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>{' '}
          <CButton 
            color="secondary" 
            onClick={() => setModal(false)}
          >
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}    

export default Detail