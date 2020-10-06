import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CFormGroup,
  CSelect,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CLabel,
  CTextarea,
  CInput,
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

const Detailhostbl = (props) => {

  const [modal, setModal] = useState(true)
  const [value, setValue] = useState('')
  console.log('daridetailhostbl', props.nomaster)
  const handleChange = e => {
    const { name, value } = e.target;
    setValue(prevState => ({...prevState, [name] : value }));
  };
  console.log('heheheheh', value)
  return (
    <>
      <CButton 
        onClick={() => setModal(!modal)} 
        className="mr-1"
        color="info"
      >
        <a>Tambah</a>
      </CButton>
      <CModal 
        show={modal} 
        onClose={setModal}
        size="xl"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Host BL</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <CCard>
        <CCardHeader>
        <h5> Data Header </h5>
        </CCardHeader>
        <CCardBody className="bg-light text-dark">
          <CRow>
            <CCol sm="9">
              <CCard className="">
                <CCardBody>
                  <CRow>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="noaju">No/Tgl Aju</CLabel>
                        <CInput name="noaju" onLoad={handleChange} value={props.noaju} disabled/>
                      </CFormGroup>
                    </CCol>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="kelpos">Kelompok Pos</CLabel>
                        <CInput name="kelpos" value={props.kelpos} disabled/>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="3">
              <CCard className="">
                <CCardBody>
                  <CRow>
                    <CCol sm="12">
                      <CFormGroup>
                        <CLabel htmlFor="nopos">Nomor POS</CLabel>
                          <CRow>
                            <CCol sm="4" className="px-1">
                            <CInput name="nopos" placeholder="000" disabled />
                            </CCol>
                            <CCol sm="4" className="px-1">
                            <CInput name="nopos" placeholder="000" disabled/>
                            </CCol>
                            <CCol sm="4" className="px-1">
                            <CInput name="nopos" placeholder="000" disabled/>
                            </CCol>
                          </CRow>                                                        
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
        </CCard>
        <CCard>
        <CCardHeader>
        <h5> Host BL dan Pengangkutan </h5>
        </CCardHeader>        
        <CCardBody className="bg-light text-dark"> 
          <CRow>
            <CCol sm="7">
              <CCard className="">
                <CCardBody>
                  <CRow>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="nomaster">No Master Host BL</CLabel>
                        <CInput name="nomaster" value={props.nomaster} disabled/>
                      </CFormGroup>
                    </CCol>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="tglmaster">Tgl Master Host BL</CLabel>
                        <CInput name="tglmaster" value={props.tglmaster} disabled/>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="nohost">No Host BL</CLabel>
                        <CInput name="nohost" onChange={handleChange} placeholder="Masukkan No Host BL" />
                      </CFormGroup>
                    </CCol>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="tglhost">Tgl Host BL</CLabel>
                        <CInput name="tglhost" onChange={handleChange} type="date" />
                      </CFormGroup>
                    </CCol>
                  </CRow> 
                  <CRow>
                    <CCol sm="12">
                      <CFormGroup>
                        <CLabel htmlFor="originpengangkut">Origin Pengangkut</CLabel>
                        <CInput name="originpengangkut" onChange={handleChange} placeholder="Masukkan Origin Pengangkut" />
                      </CFormGroup>
                    </CCol>
                  </CRow>                                    
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="5">
              <CCard className="">
                <CCardBody>
                  <CRow>
                    <CCol sm="12">
                      <CFormGroup>
                        <CRow className='pb-2'>
                          <CCol sm="5">
                            <CLabel htmlFor="">Pelabuhan Asal :</CLabel>
                          </CCol>
                          <CCol sm="7">
                            <CSelect onChange={handleChange} custom name="pelasal" id="select">
                              {datakpbcs.map(datakpbc => (
                                <option value={datakpbc.id}>{datakpbc.kpbc}</option>
                              ))}
                            </CSelect>
                          </CCol>
                        </CRow>
                        <CRow className='pb-2'>
                          <CCol sm="5">
                            <CLabel htmlFor="">Pelabuhan transit :</CLabel>
                          </CCol>
                          <CCol sm="7">
                            <CSelect onChange={handleChange} custom name="peltransit" id="select">
                              {datakpbcs.map(datakpbc => (
                                <option value={datakpbc.id}>{datakpbc.kpbc}</option>
                              ))}
                            </CSelect>
                          </CCol>
                        </CRow>
                        <CRow className='pb-2'>
                          <CCol sm="5">
                            <CLabel htmlFor="">Pelabuhan Bongkar :</CLabel>
                          </CCol>
                          <CCol sm="7">
                            <CSelect onChange={handleChange} custom name="pelbongkar" id="select">
                              {datakpbcs.map(datakpbc => (
                                <option value={datakpbc.id}>{datakpbc.kpbc}</option>
                              ))}
                            </CSelect>
                          </CCol>
                        </CRow>
                        <CRow className='pb-2'>
                          <CCol sm="5">
                            <CLabel htmlFor="">Pelabuhan Akhir :</CLabel>
                          </CCol>
                          <CCol sm="7">
                            <CSelect onChange={handleChange} custom name="pelakhir" id="select">
                              {datakpbcs.map(datakpbc => (
                                <option value={datakpbc.id}>{datakpbc.kpbc}</option>
                              ))}
                            </CSelect>
                          </CCol>
                        </CRow>                                                                        
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
        </CCard>
        <CCard>
        <CCardHeader>
        <h5> Total Kemasan & Petikemas </h5>
        </CCardHeader>        
        <CCardBody className="bg-light text-dark">          
          <CRow>
            <CCol sm="6">
              <CCard className="">
                <CCardBody>
                  <CRow>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="jmlkemasanterangkut">Jumlah Kemasan Terangkut</CLabel>
                        <CInput onChange={handleChange} name="jmlkemasanterangkut" placeholder="Masukkan Jml Kemasan Terangkut" />
                      </CFormGroup>
                    </CCol>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="jnskemasan">Jenis Kemasan</CLabel>
                        <CSelect onChange={handleChange} custom name="jnskemasan" id="select">
                          {datakpbcs.map(datakpbc => (
                            <option value={datakpbc.id}>{datakpbc.kpbc}</option>
                          ))}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="12">
                      <CFormGroup>
                        <CLabel htmlFor="jmlpetikemasterangkut">Jumlah Peti Kemas Terangkut</CLabel>
                        <CInput onChange={handleChange} name="jmlpetikemasterangkut" placeholder="" disabled/>
                      </CFormGroup>
                    </CCol>
                  </CRow> 
                  <CRow>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="bruto">Bruto</CLabel>
                        <CInput onChange={handleChange} name="bruto" placeholder="Masukkan Jumlah Bruto" />
                      </CFormGroup>
                    </CCol>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="volume">Volume</CLabel>
                        <CInput onChange={handleChange} name="volume" placeholder="Masukkan Jumlah Volume" />
                      </CFormGroup>
                    </CCol>                  
                  </CRow>                                    
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="6">
              <CCard className="">
                <CCardBody className="">
                  <CRow className="pb-2">
                    <CCol sm="12">
                    <CLabel htmlFor="mark">Mark</CLabel>                    
                    <CTextarea 
                      name="mark" 
                      id="mark" 
                      rows="5"
                      placeholder="Masukkan Mark"
                      className=""
                      onChange={handleChange} 
                    />                    
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="totalkemasan">Total Kemasan</CLabel>
                        <CInput onChange={handleChange} name="totalkemasan" placeholder="" disabled />
                      </CFormGroup>
                    </CCol>
                    <CCol sm="6">
                      <CFormGroup>
                        <CLabel htmlFor="totalpetikemas">Total Peti Kemas</CLabel>
                        <CInput onChange={handleChange} name="totalpetikemas" placeholder="" disabled/>
                      </CFormGroup>
                    </CCol>                  
                  </CRow>                   
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>  
        </CCardBody>
        </CCard>
        <CCard>
        <CCardHeader>
        <h5> Data Parties </h5>
        </CCardHeader>
        <CCardBody className="bg-light text-dark">
          <CRow>
            <CCol sm="12">
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>
                          Data Shipper
                        </CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>
                          Data Consignee
                        </CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>
                          Data Notify Party
                        </CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <CCard>
                        <CCardBody>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="nmshipper">Nama Shipper</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CInput onChange={handleChange} name="nmshipper" placeholder="" />                           
                            </CCol>
                          </CRow>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="alamatshipper">Alamat Shipper</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CTextarea onChange={handleChange} name="alamatshipper" placeholder="" />
                            </CCol>                          
                          </CRow>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="negarashipper">Negara Shipper</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CSelect onChange={handleChange} name="negarashipper" placeholder="" />
                            </CCol>                          
                          </CRow>
                        </CCardBody>
                        </CCard>                                                                        
                      </CTabPane>
                      <CTabPane>
                        <CCard>
                        <CCardBody>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="nmconsignee">Nama Consignee</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CInput onChange={handleChange} name="nmconsignee" placeholder="" />                           
                            </CCol>
                          </CRow>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="npwpconsignee">NPWP Consignee</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CInput onChange={handleChange} name="npwpconsignee" placeholder="" />                           
                            </CCol>
                          </CRow>                          
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="alamatconsignee">Alamat Consignee</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CTextarea onChange={handleChange} name="alamatconsignee" placeholder="" />
                            </CCol>                          
                          </CRow>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="negaraconsignee">Negara Consignee</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CSelect onChange={handleChange} name="negaraconsignee" placeholder="" />
                            </CCol>                          
                          </CRow>
                        </CCardBody>
                        </CCard>                         
                      </CTabPane>
                      <CTabPane>
                        <CCard>
                        <CCardBody>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="nmnotify">Nama Notify Party</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CInput onChange={handleChange} name="nmnotify" placeholder="" />                           
                            </CCol>
                          </CRow>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="alamatnotify">Alamat Notify Party</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CTextarea onChange={handleChange} name="alamatnotify" placeholder="" />
                            </CCol>                          
                          </CRow>
                          <CRow className="p-1">
                            <CCol sm="5">
                                <CLabel htmlFor="negaranotify">Negara Notify Party</CLabel>
                            </CCol>
                            <CCol sm="4">
                                <CSelect onChange={handleChange} name="negaranotify" placeholder="" />
                            </CCol>                          
                          </CRow>
                        </CCardBody>
                        </CCard>                         
                      </CTabPane>                      
                    </CTabContent>
                  </CTabs>
            </CCol>
          </CRow>
        </CCardBody>
        </CCard> 
        <CCard>
        <CCardHeader>
        <h5> Data Barang, Kontainer, dan Dokumen </h5>
        </CCardHeader>
        <CCardBody className="bg-light text-dark">
          <CRow>
            <CCol sm="12">
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>
                          Data Barang
                        </CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>
                          Data Kontainer
                        </CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>
                          Data Dokumen
                        </CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <CCard>
                        <CCardBody>
                          <CDataTable
                            itemsPerPage={5}
                            pagination/>                          
                        </CCardBody>
                        </CCard>                                                                        
                      </CTabPane>
                      <CTabPane>
                        <CCard>
                        <CCardBody>
                          <CDataTable
                            itemsPerPage={5}
                            pagination/>                            
                        </CCardBody>
                        </CCard>                         
                      </CTabPane>
                      <CTabPane>
                        <CCard>
                        <CCardBody>
                          <CDataTable
                            itemsPerPage={5}
                            pagination/>                            
                        </CCardBody>
                        </CCard>                         
                      </CTabPane>                      
                    </CTabContent>
                  </CTabs>
            </CCol>
          </CRow>
        </CCardBody>
        </CCard>                                                                       
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
    </>
  )
}    

export default Detailhostbl