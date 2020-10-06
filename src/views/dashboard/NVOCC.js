import React, { Component, lazy } from 'react'
import {
  CBadge,
  CDataTable,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CButton,
  CForm,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CInputCheckbox,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from '../users/UsersData'
import {fields, jns_manifest, jns_moda, datakpbcs, kelpos } from './Datasource.js'
import Detail from './Detail.js'
class NVOCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datamasterhost:[],
      nopos:0,
      kelpos:'',
      nomaster:'',
      tglmaster:'',
      jmlhouse:'',
      posbc11:'',
      respon:'',
      status:'',
      hostbl:0,
      id:0,
      noaju: '1234567890'
    };
  }
      handleChange (event) {
        const nama = event.target.name;
        this.setState({
          [nama] : event.target.value
        })
      }
      handleClick (){
        if (this.state.kelpos != '' && this.state.nomaster != '' && this.state.tglmaster != '' && this.state.jmlhouse != '') {
        this.setState( prevState => ({
          datamasterhost:[...prevState.datamasterhost, {id:this.state.id, kelpos: this.state.kelpos, nomaster: this.state.nomaster, tglmaster: this.state.tglmaster, jmlhouse: this.state.hostbl +" dari "+ this.state.jmlhouse , posbc11: '', respon: '' , status: 'Tidak Lengkap'}],
          id: this.state.id + 1,
          kelpos : '',
          nomaster:'',
          tglmaster:'',
          jmlhouse:''
        }),
        )          
      } else {
        alert("Harap Dilengkapi dulu formnya")
      }
      }    

  render(){
      const Getbadge = status => {
        switch (status) {
          case 'Lengkap': return 'success'
          case 'Tidak Lengkap': return 'danger'
        }
      }

      console.log("status state", this.state.id)
      console.log("status nomaster", this.state.datamasterhost.nomaster)  
    return(
      <CCard>
        <CCardHeader className="bg-light text-dark" >
          <h5>Entry Manifest</h5>
        </CCardHeader>      
        <CCardBody>
          <CRow>
            <CCol xs="12" sm="6">
              <CCard>
                <CCardHeader className="bg-light text-dark">
                  <h5>Data Header</h5>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="noaju">No. Pengajuan</CLabel>
                        <CInput id="No Pengajuan" value={this.state.noaju} disabled />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="kpbc">Kantor Pelayanan Bea Cukai</CLabel>
                        <CSelect custom name="kpbc" id="select">
                          {datakpbcs.map(datakpbc => (
                            <option key={datakpbc.id} value={datakpbc.id}>{datakpbc.kpbc}</option>
                          ))}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="jns_manifest">Jenis Manifest</CLabel>
                        <CSelect custom name="jns_manifest" id="select">
                          {jns_manifest.map(item => (
                            <option value={item.id}>{item.manifest}</option>
                          ))}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="jns_moda">Jenis Moda</CLabel>
                        <CSelect custom name="jns_moda" id="select">
                          {jns_moda.map(item => (
                            <option value={item.id}>{item.moda}</option>
                          ))}
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                  </CRow>                                    
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" sm="6" >
              <CCard>
                <CCardHeader className="bg-light text-dark">
                  <h5>Cek Rekon</h5>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs="12">
                      <CFormGroup>
                        <CLabel htmlFor="nama_angkut">Nama Sarana Angkut</CLabel>
                        <CInput id="nama_angkut" placeholder="Masukkan Nama Sarana Angkut" required />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="6">
                      <CFormGroup>
                        <CLabel htmlFor="no_voyage">Nomor Voyage</CLabel>
                        <CInput id="no_voyage" placeholder="Masukkan Nomor Voyage" required />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                      <CFormGroup>
                        <CLabel htmlFor="ccnumber">Nomor IMO</CLabel>
                        <CInput id="no_imo" placeholder="Masukkan Nomor IMO" required />
                      </CFormGroup>
                    </CCol>                    
                  </CRow>
                  <CRow>
                    <CCol xs="6">
                      <CFormGroup>
                        <CLabel htmlFor="tgl_tiba">Tanggal Tiba</CLabel>
                        <CInput type="date" id="tgl_tiba" name="tgl_tiba" placeholder="date" />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                      <CFormGroup>
                        <CLabel htmlFor="jam_tiba">Jam Tiba</CLabel>
                        <CInput type="time" id="jam_tiba" name="jam_tiba" placeholder="time" />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <CButton block color="info">Cek Rekon</CButton>
                    </CCol> 
                  </CRow>                 
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12" sm="12">
              <CCard>
                <CCardHeader className="bg-light text-dark">
                  <h5>Daftar Master Host BL</h5>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs="12">
                      <CDataTable
                        items={this.state.datamasterhost}
                        fields={fields}
                        itemsPerPage={5}
                        pagination
                        scopedSlots = {
                          {
                          'status':
                            (item)=>(
                              <td>
                                <CBadge color={Getbadge(item.status)}>
                                  {item.status}
                                </CBadge>
                              </td>
                            ),
                            'action' :
                            (item,index) => {
                              var nomaster=this.state.datamasterhost.filter(item => item.id == index)
                              var nomastern=nomaster[0].nomaster
                              var tglmaster=this.state.datamasterhost.filter(item => item.id == index)
                              var tglmastern=tglmaster[0].tglmaster
                              var kelpos=this.state.datamasterhost.filter(item => item.id == index)
                              var kelposn=kelpos[0].kelpos
                              return (
                                <td>
                                <Detail idmaster={index+1} nomaster={nomastern} tglmaster={tglmastern} kelpos={kelposn} noaju={this.state.noaju} />
                                </td>
                                )
                            },
                            'no' :
                            (item,index) => {
                              return (
                                <td>
                                {index + 1}
                                </td>
                                )
                            }                                                        
                          }                         
                      }                        
                      />
                      </CCol>
                  </CRow>                                  
                </CCardBody>
              </CCard>
            </CCol>
          </CRow> 
          <CRow>
            <CCol xs="12" sm="12">
              <CCard>
                <CCardHeader className="bg-light text-dark">
                  <h5>Tambah Master Host BL</h5>
                </CCardHeader>
                <CCardBody>
                  <CForm id="tambahmasterhost">
                    <CRow>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="kelpos">Kelompok Pos</CLabel>
                          <CSelect value ={this.state.kelpos} onChange={this.handleChange.bind(this)} custom name="kelpos" id="select">
                            {kelpos.map((item) => {
                              return <option value={item.kelpos}>{item.kelpos}</option>;
                            })}
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="nomaster">No. Master Host BL</CLabel>
                          <CInput value ={this.state.nomaster} onChange={this.handleChange.bind(this)} name="nomaster" placeholder="Masukkan No Master Host BL" />
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="tglmaster">Tgl Master Host BL</CLabel>
                          <CInput value={this.state.tglmaster} onChange={this.handleChange.bind(this)} type="date" name="tglmaster" id="tglmaster" placeholder="date" />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="jml_house">Jumlah House BL</CLabel>
                          <CInput value={this.state.jmlhouse} onChange={this.handleChange.bind(this)} name="jmlhouse" placeholder="Masukkan Jumlah House"  />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                        <CButton onClick={this.handleClick.bind(this)} block color="info">Tambah</CButton>
                      </CCol> 
                    </CRow>
                  </CForm>                                                       
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>                   
        </CCardBody>
        <CCardFooter>
        <div className="d-flex justify-content-center">
          <CRow>
            <CCol md sm="12" className="mb-sm-2 mb-0">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox 
                      custom 
                      id="inline-checkbox1" 
                      name="inline-checkbox1" 
                      value="option1" 
                    />
                    <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1"> Saya Menyatakan Bahwa Data yang Saya akan Kirimkan adalah benar dan Dapat Dipertanggungjawabkan</CLabel>
                  </CFormGroup>            
            </CCol>
          </CRow>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <CRow>
            <div className="p-2"><CButton color="info">Kirim</CButton></div>
            <div className="p-2"><CButton color="danger">Batal</CButton></div>                  
          </CRow>
        </div>
        </CCardFooter>
      </CCard>
      )
  }  
}

export default NVOCC
