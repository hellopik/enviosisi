(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[45],{672:function(e,a,t){"use strict";t.r(a);var l=t(627),n=t(105),s=t(159),r=t(160),m=t(161),c=t(164),u=t(163),o=t(1),i=t.n(o),h=t(626),d=t(614),E=t(621),b=t(638),k=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).handleReactSelect=function(e,a){var t,n=a.name;if("jns_manifest"!=n||"01"!=e.value&&"03"!=e.value)if("jns_manifest"!=n||"02"!=e.value&&"04"!=e.value)l.setState(Object(s.a)({},n,e.value));else{var r;l.setState((r={},Object(s.a)(r,n,e.value),Object(s.a)(r,"jns_moda",E.k[0]),r))}else l.setState((t={},Object(s.a)(t,n,e.value),Object(s.a)(t,"jns_moda",E.k[1]),t))},l.handleOption=function(e){e.target.checked?l.setState({disabled:!1}):l.setState({disabled:!0})},l.setjmlAktualHouse=function(e,a){var t,s=l.state.datamasterhost.findIndex((function(a){return a.id==e-1}));(t=l.state.datamasterhost)[s].jmlhouse=a,t[s].jmlhouse==a?t[s].status="Lengkap":t[s].status=t[s].status,l.setState((function(e){return Object(n.a)(Object(n.a)({},e),{},{datamasterhost:t})}))},l.ref=i.a.createRef(),l.state={datamasterhost:[],nopos:0,kelpos:null,nomaster:"",tglmaster:"",jmlhouse:"",posbc11:"",respon:"",status:"",hostbl:0,jns_moda:null,id:0,noaju:"1234567890",disabled:!0},l}return Object(m.a)(t,[{key:"handleChange",value:function(e){var a=e.target.name;this.setState(Object(s.a)({},a,e.target.value))}},{key:"handleClick",value:function(){var e=this;""!=this.state.kelpos&&""!=this.state.nomaster&&""!=this.state.tglmaster&&""!=this.state.jmlhouse?this.setState((function(a){return{datamasterhost:[].concat(Object(l.a)(a.datamasterhost),[{id:e.state.id,kelpos:e.state.kelpos,nomaster:e.state.nomaster,tglmaster:e.state.tglmaster,jmlasumsihouse:parseInt(e.state.jmlhouse),jmlhouse:e.state.hostbl,posbc11:"",respon:"",status:"Tidak Lengkap"}]),id:e.state.id+1,kelpos:null,nomaster:"",tglmaster:"",jmlhouse:""}})):alert("Harap Dilengkapi dulu formnya")}},{key:"render",value:function(){var e=this,a=function(e){switch(e){case"Lengkap":return"success";case"Tidak Lengkap":return"danger"}};return console.log("status state",this.state.id),console.log("status nomaster",this.state),console.log("status aktua house",this.state.hostbl),i.a.createElement(d.j,null,i.a.createElement(d.n,{className:"bg-light text-dark"},i.a.createElement("h5",null,"Entry Manifest")),i.a.createElement(d.k,null,i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12",sm:"6"},i.a.createElement(d.j,null,i.a.createElement(d.n,{className:"bg-light text-dark"},i.a.createElement("h5",null,"Data Header")),i.a.createElement(d.k,null,i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"noaju"},"No. Pengajuan"),i.a.createElement(d.Q,{id:"No Pengajuan",value:this.state.noaju,disabled:!0})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"kpbc"},"Kantor Pelayanan Bea Cukai"),i.a.createElement(h.a,{name:"kpbc",id:"select",options:E.a})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"jns_manifest"},"Jenis Manifest"),i.a.createElement(h.a,{onChange:this.handleReactSelect.bind(this),name:"jns_manifest",id:"select",options:E.j})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"jns_moda"},"Jenis Moda"),i.a.createElement(h.a,{value:this.state.jns_moda,name:"jns_moda",id:"select",isDisabled:!0,options:E.k}))))))),i.a.createElement(d.u,{xs:"12",sm:"6"},i.a.createElement(d.j,null,i.a.createElement(d.n,{className:"bg-light text-dark"},i.a.createElement("h5",null,"Cek Rekon")),i.a.createElement(d.k,null,i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"nama_angkut"},"Nama Sarana Angkut"),i.a.createElement(d.Q,{id:"nama_angkut",placeholder:"Masukkan Nama Sarana Angkut",required:!0})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"6"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"no_voyage"},"Nomor Voyage"),i.a.createElement(d.Q,{id:"no_voyage",placeholder:"Masukkan Nomor Voyage",required:!0}))),i.a.createElement(d.u,{xs:"6"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"ccnumber"},"Nomor IMO"),i.a.createElement(d.Q,{id:"no_imo",placeholder:"Masukkan Nomor IMO",required:!0})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"6"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"tgl_tiba"},"Tanggal Tiba"),i.a.createElement(d.Q,{type:"date",id:"tgl_tiba",name:"tgl_tiba",placeholder:"date"}))),i.a.createElement(d.u,{xs:"6"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"jam_tiba"},"Jam Tiba"),i.a.createElement(d.Q,{type:"time",id:"jam_tiba",name:"jam_tiba",placeholder:"time",step:"2"})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"pemberitahu"},"Pemberitahu"),i.a.createElement(d.Q,{id:"pemberitahu",placeholder:"Masukkan Pemberitahu",required:!0})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},i.a.createElement(d.f,{block:!0,color:"info"},"Cek Rekon"))))))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12",sm:"12"},i.a.createElement(d.j,null,i.a.createElement(d.n,{className:"bg-light text-dark"},i.a.createElement("h5",null,"Daftar Master Host BL")),i.a.createElement(d.k,null,i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement("div",{ref:this.ref},i.a.createElement(d.y,{items:this.state.datamasterhost,fields:E.f,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return i.a.createElement("td",null,i.a.createElement(d.b,{color:a(e.status)},e.status))},jmlhouse:function(a,t){var l=e.state.datamasterhost.filter((function(e){return e.id==t})),n=l[0].jmlhouse,s=(e.state.datamasterhost.filter((function(e){return e.id==t})),l[0].jmlasumsihouse);return i.a.createElement("td",null,n," dari ",s)},action:function(a,t){var l=e.state.datamasterhost.filter((function(e){return e.id==t}))[0].nomaster,n=e.state.datamasterhost.filter((function(e){return e.id==t}))[0].tglmaster,s=e.state.datamasterhost.filter((function(e){return e.id==t}))[0].kelpos,r=e.state.datamasterhost.filter((function(e){return e.id==t}))[0].jmlasumsihouse;return i.a.createElement("td",null,i.a.createElement(b.a,{idmaster:t+1,nomaster:l,tglmaster:n,kelpos:s,noaju:e.state.noaju,jmlhouse:r,calleback:e.setjmlAktualHouse})," ")},no:function(e,a){return i.a.createElement("td",null,a+1)}}})))))))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12",sm:"12"},i.a.createElement(d.j,null,i.a.createElement(d.n,{className:"bg-light text-dark"},i.a.createElement("h5",null,"Tambah Master Host BL")),i.a.createElement(d.k,null,i.a.createElement(d.J,{id:"tambahmasterhost"},i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"kelpos"},"Kelompok Pos"),i.a.createElement(h.a,{onChange:this.handleReactSelect.bind(this),name:"kelpos",id:"select",options:E.l})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"6"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"nomaster"},"No. Master Host BL"),i.a.createElement(d.Q,{value:this.state.nomaster,onChange:this.handleChange.bind(this),name:"nomaster",placeholder:"Masukkan No Master Host BL"}))),i.a.createElement(d.u,{xs:"6"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"tglmaster"},"Tgl Master Host BL"),i.a.createElement(d.Q,{value:this.state.tglmaster,onChange:this.handleChange.bind(this),type:"date",name:"tglmaster",id:"tglmaster",placeholder:"date"})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{xs:"12"},i.a.createElement(d.K,null,i.a.createElement(d.ab,{htmlFor:"jml_house"},"Jumlah House BL"),i.a.createElement(d.Q,{value:this.state.jmlhouse,onChange:this.handleChange.bind(this),name:"jmlhouse",placeholder:"Masukkan Jumlah House"})))),i.a.createElement(d.ub,null,i.a.createElement(d.u,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},i.a.createElement(d.f,{onClick:this.handleClick.bind(this),block:!0,color:"info"},"Tambah"))))))))),i.a.createElement(d.l,null,i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(d.ub,null,i.a.createElement(d.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},i.a.createElement(d.K,{variant:"custom-checkbox",inline:!0},i.a.createElement(d.R,{custom:!0,id:"inline-checkbox1",name:"inline-checkbox1",value:"option1",onChange:this.handleOption.bind(this)}),i.a.createElement(d.ab,{variant:"custom-checkbox",htmlFor:"inline-checkbox1"}," Saya Menyatakan Bahwa Data yang Saya akan Kirimkan adalah benar dan Dapat Dipertanggungjawabkan"))))),i.a.createElement("div",{className:"d-flex flex-row justify-content-center"},i.a.createElement(d.ub,null,i.a.createElement("div",{className:"p-2"},i.a.createElement(d.f,{color:"info",disabled:this.state.disabled},"Kirim")),i.a.createElement("div",{className:"p-2"},i.a.createElement(d.f,{color:"danger"},"Batal"))))))}}]),t}(o.Component);a.default=k}}]);
//# sourceMappingURL=45.eb025ff3.chunk.js.map