Search.setIndex({docnames:["flowx","flowx.domain","flowx.domain._grid","flowx.imbound","flowx.imbound._interface","flowx.imbound._interface.rigid","flowx.imbound._interface.utils","flowx.imbound._interface.visco","flowx.imbound._interface.visco._interface","flowx.ins","flowx.ins._interface","flowx.io","flowx.io._interface","flowx.poisson","flowx.poisson._interface","flowx.quantum","flowx.quantum._interface","index","modules","setup"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["flowx.rst","flowx.domain.rst","flowx.domain._grid.rst","flowx.imbound.rst","flowx.imbound._interface.rst","flowx.imbound._interface.rigid.rst","flowx.imbound._interface.utils.rst","flowx.imbound._interface.visco.rst","flowx.imbound._interface.visco._interface.rst","flowx.ins.rst","flowx.ins._interface.rst","flowx.io.rst","flowx.io._interface.rst","flowx.poisson.rst","flowx.poisson._interface.rst","flowx.quantum.rst","flowx.quantum._interface.rst","index.rst","modules.rst","setup.rst"],objects:{"":[[0,0,0,"-","flowx"]],"flowx.domain":[[1,0,0,"-","_domain"],[2,0,0,"-","_grid"],[1,0,0,"-","_particles"],[1,0,0,"-","_scalars"]],"flowx.domain._domain":[[1,1,1,"","Domain"]],"flowx.domain._grid":[[2,0,0,"-","_grid"],[2,0,0,"-","_gridBase"],[2,0,0,"-","_gridC"],[2,0,0,"-","_gridX"],[2,0,0,"-","_gridY"]],"flowx.domain._grid._grid":[[2,1,1,"","Grid"]],"flowx.domain._grid._gridBase":[[2,2,1,"","GridBase"]],"flowx.domain._grid._gridBase.GridBase":[[2,3,1,"","addvar"],[2,3,1,"","compute_error"],[2,3,1,"","fill_guard_cells"],[2,3,1,"","fill_guard_cells_dirichlet"],[2,3,1,"","fill_guard_cells_neumann"],[2,3,1,"","fill_guard_cells_projection"],[2,3,1,"","get_l2_norm"],[2,3,1,"","initialize_block_attributes"],[2,3,1,"","initialize_data_attributes"],[2,3,1,"","set_default_bc"],[2,3,1,"","set_gridline_coordinates"],[2,3,1,"","set_user_bc"],[2,4,1,"","type_"],[2,3,1,"","update_bc_type"],[2,3,1,"","update_bc_val"]],"flowx.domain._grid._gridC":[[2,2,1,"","GridCellCentered"]],"flowx.domain._grid._gridC.GridCellCentered":[[2,3,1,"","check_gridtype"],[2,3,1,"","fill_guard_cells_dirichlet"],[2,3,1,"","initialize_data_attributes"],[2,3,1,"","set_gridline_coordinates"],[2,4,1,"","type_"]],"flowx.domain._grid._gridX":[[2,2,1,"","GridFaceX"]],"flowx.domain._grid._gridX.GridFaceX":[[2,3,1,"","check_gridtype"],[2,3,1,"","fill_guard_cells_dirichlet"],[2,3,1,"","initialize_data_attributes"],[2,3,1,"","set_gridline_coordinates"],[2,4,1,"","type_"]],"flowx.domain._grid._gridY":[[2,2,1,"","GridFaceY"]],"flowx.domain._grid._gridY.GridFaceY":[[2,3,1,"","check_gridtype"],[2,3,1,"","fill_guard_cells_dirichlet"],[2,3,1,"","initialize_data_attributes"],[2,3,1,"","set_gridline_coordinates"],[2,4,1,"","type_"]],"flowx.domain._particles":[[1,2,1,"","Particles"]],"flowx.domain._particles.Particles":[[1,3,1,"","advance"],[1,3,1,"","offset"],[1,3,1,"","reset"],[1,3,1,"","rotate"]],"flowx.domain._scalars":[[1,2,1,"","Scalars"]],"flowx.domain._scalars.Scalars":[[1,3,1,"","_set_default_values"],[1,3,1,"","_set_user_values"],[1,3,1,"","advance"]],"flowx.imbound":[[3,0,0,"-","_imbound"],[4,0,0,"-","_interface"]],"flowx.imbound._imbound":[[3,2,1,"","ImBound"]],"flowx.imbound._imbound.ImBound":[[3,3,1,"","advect"],[3,3,1,"","force_flow"],[3,3,1,"","map_to_grid"]],"flowx.imbound._interface":[[5,0,0,"-","rigid"],[4,0,0,"-","stub"],[6,0,0,"-","utils"],[7,0,0,"-","visco"]],"flowx.imbound._interface.rigid":[[5,0,0,"-","_force_flow"],[5,0,0,"-","_map_to_grid"]],"flowx.imbound._interface.rigid._force_flow":[[5,1,1,"","force_flow"]],"flowx.imbound._interface.rigid._map_to_grid":[[5,1,1,"","map_to_grid"]],"flowx.imbound._interface.stub":[[4,1,1,"","advect"],[4,1,1,"","force_flow"],[4,1,1,"","map_to_grid"]],"flowx.imbound._interface.utils":[[6,0,0,"-","_ann_search"],[6,0,0,"-","_classical_search"],[6,0,0,"-","_shapely_search"]],"flowx.imbound._interface.utils._ann_search":[[6,1,1,"","ann_search"]],"flowx.imbound._interface.utils._classical_search":[[6,1,1,"","_search_jit"],[6,1,1,"","classical_search"]],"flowx.imbound._interface.utils._shapely_search":[[6,1,1,"","shapely_search"]],"flowx.imbound._interface.visco":[[7,0,0,"-","_advect"],[7,0,0,"-","_force_flow"],[8,0,0,"-","_interface"],[7,0,0,"-","_map_to_grid"]],"flowx.imbound._interface.visco._advect":[[7,1,1,"","advect"]],"flowx.imbound._interface.visco._force_flow":[[7,1,1,"","force_flow"]],"flowx.imbound._interface.visco._interface":[[8,0,0,"-","_advect_weno3"],[8,0,0,"-","_constant_extrapolation"],[8,0,0,"-","_directional_derivative"],[8,0,0,"-","_linear_extrapolation"],[8,0,0,"-","_normal_vector_solid"],[8,0,0,"-","_redistance_solid"],[8,0,0,"-","_solid_props"],[8,0,0,"-","_solid_stress"],[8,0,0,"-","_solid_ustar"]],"flowx.imbound._interface.visco._interface._advect_weno3":[[8,1,1,"","_jit_advect_weno3"],[8,1,1,"","advect_dynamic_grid"],[8,1,1,"","advect_solid"],[8,1,1,"","advect_weno3"]],"flowx.imbound._interface.visco._interface._constant_extrapolation":[[8,1,1,"","constant_extrapolation"],[8,1,1,"","jit_constant_extrapolation"]],"flowx.imbound._interface.visco._interface._directional_derivative":[[8,1,1,"","directional_derivative"]],"flowx.imbound._interface.visco._interface._linear_extrapolation":[[8,1,1,"","_jit_linear_extrapolation"],[8,1,1,"","linear_extrapolation"]],"flowx.imbound._interface.visco._interface._normal_vector_solid":[[8,1,1,"","normal_vector_solid"]],"flowx.imbound._interface.visco._interface._redistance_solid":[[8,1,1,"","_jit_redistance_solid"],[8,1,1,"","redistance_solid"]],"flowx.imbound._interface.visco._interface._solid_props":[[8,1,1,"","solid_props"]],"flowx.imbound._interface.visco._interface._solid_stress":[[8,1,1,"","jit_solid_stress"],[8,1,1,"","solid_stress"]],"flowx.imbound._interface.visco._interface._solid_ustar":[[8,1,1,"","_jit_solid_ustar"],[8,1,1,"","solid_ustar"]],"flowx.imbound._interface.visco._map_to_grid":[[7,1,1,"","map_to_grid"]],"flowx.ins":[[9,0,0,"-","_ins"],[10,0,0,"-","_interface"]],"flowx.ins._ins":[[9,2,1,"","IncompNS"]],"flowx.ins._ins.IncompNS":[[9,3,1,"","_advance"],[9,3,1,"","_advance_stub"],[9,3,1,"","advance"]],"flowx.ins._interface":[[10,0,0,"-","_mass_balance"],[10,0,0,"-","_operators"],[10,0,0,"-","_projection"],[10,0,0,"-","_stats"]],"flowx.ins._interface._mass_balance":[[10,1,1,"","get_convvel"],[10,1,1,"","get_qin"],[10,1,1,"","get_qout"],[10,1,1,"","rescale_velocity"],[10,1,1,"","rescale_velocity_stub"],[10,1,1,"","update_outflow_bc"]],"flowx.ins._interface._operators":[[10,1,1,"","convective_facex"],[10,1,1,"","convective_facey"],[10,1,1,"","diffusion"]],"flowx.ins._interface._projection":[[10,1,1,"","corrector"],[10,1,1,"","divergence"],[10,1,1,"","predictor_ab2"],[10,1,1,"","predictor_euler"],[10,1,1,"","predictor_rk3"]],"flowx.ins._interface._stats":[[10,1,1,"","stats"]],"flowx.io":[[12,0,0,"-","_interface"]],"flowx.io._interface":[[12,0,0,"-","_display_stats"],[12,0,0,"-","_plot_contour"],[12,0,0,"-","_plot_line"],[12,0,0,"-","_plot_mesh"],[12,0,0,"-","_plot_scatter"],[12,0,0,"-","_plot_vector"],[12,0,0,"-","_write_hdf5_checkpoint"],[12,0,0,"-","_write_hdf5_output"]],"flowx.io._interface._display_stats":[[12,1,1,"","display_stats"]],"flowx.io._interface._plot_contour":[[12,1,1,"","_fmt"],[12,1,1,"","plot_contour"]],"flowx.io._interface._plot_line":[[12,1,1,"","plot_line"]],"flowx.io._interface._plot_mesh":[[12,1,1,"","plot_mesh"]],"flowx.io._interface._plot_scatter":[[12,1,1,"","plot_scatter"]],"flowx.io._interface._plot_vector":[[12,1,1,"","plot_vector"]],"flowx.io._interface._write_hdf5_checkpoint":[[12,1,1,"","write_hdf5_checkpoint"]],"flowx.io._interface._write_hdf5_output":[[12,1,1,"","map_center_to_edge"],[12,1,1,"","map_facex_to_edge"],[12,1,1,"","map_facey_to_edge"],[12,1,1,"","write_hdf5_output"]],"flowx.poisson":[[14,0,0,"-","_interface"],[13,0,0,"-","_poisson"]],"flowx.poisson._interface":[[14,0,0,"-","_helpers"],[14,0,0,"-","_solvers"]],"flowx.poisson._interface._helpers":[[14,1,1,"","build_sparse_matrix"]],"flowx.poisson._interface._solvers":[[14,1,1,"","solve_cg"],[14,1,1,"","solve_direct"],[14,1,1,"","solve_jacobi"],[14,1,1,"","solve_stub"],[14,1,1,"","solve_superlu"]],"flowx.poisson._poisson":[[13,2,1,"","Poisson"]],"flowx.poisson._poisson.Poisson":[[13,3,1,"","solve"]],"flowx.quantum":[[16,0,0,"-","_interface"],[15,0,0,"-","_quantum"]],"flowx.quantum._interface":[[16,0,0,"-","_calibrate_circuit"],[16,0,0,"-","_initialize"],[16,0,0,"-","_run_circuit"],[16,0,0,"-","grover"]],"flowx.quantum._interface._calibrate_circuit":[[16,1,1,"","calibrate_circuit_IBMQ"],[16,1,1,"","calibrate_circuit_QASM"]],"flowx.quantum._interface._initialize":[[16,1,1,"","initialize_system"]],"flowx.quantum._interface._run_circuit":[[16,1,1,"","run_circuit_IBMQ"],[16,1,1,"","run_circuit_QASM"]],"flowx.quantum._interface.grover":[[16,1,1,"","amplification_gate"],[16,1,1,"","controlled_Z_gate"],[16,1,1,"","oracle_gate"]],"flowx.quantum._quantum":[[15,2,1,"","Quantum"]],"flowx.quantum._quantum.Quantum":[[15,3,1,"","run_circuit"],[15,3,1,"","setup_circuit"]],flowx:[[0,0,0,"-","__meta__"],[1,0,0,"-","domain"],[3,0,0,"-","imbound"],[9,0,0,"-","ins"],[11,0,0,"-","io"],[13,0,0,"-","poisson"],[15,0,0,"-","quantum"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":10,"1":[2,10],"3":16,"class":[1,2,3,9,12,13,15],"default":[1,2,10],"final":14,"float":[2,10,14],"function":[4,5,7,10,12],"return":[2,10,14],"static":2,"var":12,The:[2,10],__meta__:[17,18],_advanc:9,_advance_stub:9,_advect:[3,4],_advect_weno3:[4,7],_ann_search:[3,4],_calibrate_circuit:[0,15],_classical_search:[3,4],_constant_extrapol:[4,7],_dataset:2,_directional_deriv:[4,7],_display_stat:[0,11],_domain:[0,18],_fmt:12,_force_flow:[3,4],_grid:[0,1],_gridbas:[0,1],_gridc:[0,1],_gridi:[0,1],_gridx:[0,1],_helper:[0,13],_imbound:[0,18],_in:[0,18],_initi:[0,15],_interfac:[0,3,9,11,13,15],_jit_advect_weno3:8,_jit_linear_extrapol:8,_jit_redistance_solid:8,_jit_solid_ustar:8,_linear_extrapol:[4,7],_map_to_grid:[3,4],_mass_bal:[0,9],_normal_vector_solid:[4,7],_oper:[0,9],_particl:[0,18],_plot_contour:[0,11],_plot_lin:[0,11],_plot_mesh:[0,11],_plot_scatt:[0,11],_plot_vector:[0,11],_poisson:[0,18],_project:[0,9],_quantum:[0,18],_redistance_solid:[4,7],_run_circuit:[0,15],_scalar:[0,18],_search_jit:6,_set_default_valu:1,_set_user_valu:1,_shapely_search:[3,4],_solid_prop:[4,7],_solid_stress:[4,7],_solid_ustar:[4,7],_solver:[0,13],_stat:[0,9],_write_hdf5_checkpoint:[0,11],_write_hdf5_output:[0,11],absolut:2,access:[4,5,7],add:[2,8],addit:8,addvar:2,adfi:8,adfx:8,advanc:[1,9],advect:[3,4,7,8],advect_dynamic_grid:8,advect_solid:8,advect_weno3:8,along:10,alpha:[1,10],amplification_g:16,an:[2,10],analyt:2,ann_search:6,appli:16,approxim:6,arg:2,arrai:10,asol:2,auxvar:12,backend:16,base:[1,2,3,9,13,15],bc:2,bc_type_cent:1,bc_type_facei:1,bc_type_facex:1,bc_val:2,bc_val_cent:1,bc_val_facei:1,bc_val_facex:1,bctype:10,between:2,bit:16,block:2,blockdata:2,bottom:2,boundari:[1,2,3,4,5,7,10],bubblebox:2,build_sparse_matrix:14,calibr:16,calibrate_circuit_ibmq:16,calibrate_circuit_qasm:16,cell:[2,4,8,10],center:[2,4,5,7,10,12],center_var:[1,12],check:2,check_gridtyp:2,checkpoint:12,child:2,choic:2,circuit:16,classical_regist:16,classical_search:6,classmethod:2,coeffici:10,comput:[2,3,4,5,7,10,14],compute_error:2,condit:[2,10],conjug:14,constant_extrapol:8,contain:[4,5,7,10,12,14],contan:10,content:18,contour:12,control:16,controlled_z_g:16,convect:10,convective_facei:10,convective_facex:10,convvel:10,coordin:2,correct:10,corrector:10,creat:2,csr:14,d:10,data:[1,10,12,14],dataset:2,ddsn:8,defin:[1,2,10],delp:10,delta:2,desir:2,devic:16,dictionari:[2,6,10,14],differ:2,diffus:10,direct:[2,10,14],directional_deriv:8,dirichlet:2,displai:12,display_stat:12,divc:10,diverg:10,domain:[0,10,18],domain_data_struct:[3,9,12,15],dt:[8,10],due:[5,7],dvar:10,dx:[2,8],dy:[2,8],dynam:8,equat:[9,10,13,14],eror:2,error:2,etc:1,explicit:9,f:10,face:[2,4,5,7,10,12],face_var:[1,12],factor:10,file:12,fill:[2,12],fill_guard_cel:2,fill_guard_cells_dirichlet:2,fill_guard_cells_neumann:2,fill_guard_cells_project:2,fitter:16,fluid:[5,7],forc:[3,4,5,7],force_flow:[3,4,5,7],format:14,fraction:9,from:14,gate:16,gather:10,get:10,get_convvel:10,get_l2_norm:2,get_qin:10,get_qout:10,given:[2,10,12],gradient:14,grid:[2,3,4,5,6,7,8,10,12,13,14,16],gridbas:2,gridc:[4,5,7,10,12],gridcellcent:2,gridfacei:2,gridfacex:[2,10],gridi:[4,5,7,10,12],gridlin:2,gridtyp:2,gridx:[4,5,7,10,12],grover:[0,15],guard:[2,8],hand:14,hconst:10,hdf5:12,head:12,homogen:2,hvar:10,i:12,ib:[4,5,7],ibmf:[4,5,6,7],ibmi:[4,5,7],ibmx:[4,5,7],ifac:10,imbound:[0,9,18],imbound_info:3,imbound_var:3,immers:[1,3,4,5,7],implement:[2,3,15],incompn:9,incompress:9,index:17,inform:[4,5,7,12],initi:[2,16],initialize_block_attribut:2,initialize_data_attribut:2,initialize_system:16,ins:[0,18],ins_info:9,ins_stat:10,ins_var:9,instanc:2,integ:[2,14],interfac:[8,13],io:[0,18],ipr:10,item:2,iter:14,ites:14,ivar:[2,10,12,14],ivari:12,jacobi:14,jit_constant_extrapol:8,jit_solid_stress:8,kwarg:2,l2:2,l2_norm:2,left:2,level:[2,4,5,6,7,12],librari:[2,14],limit:2,linear:10,linear_extrapol:8,list:[2,12],lmda:8,loc:2,locat:2,map:[3,4,5,7],map_center_to_edg:12,map_facex_to_edg:12,map_facey_to_edg:12,map_to_grid:[3,4,5,7],mass:10,matrix:14,mean:10,mesh:12,meshgrid:12,metadata:0,method:[2,14],modul:[17,18],mu_solid:8,multipli:10,name:[2,10,12,14],navier:9,nblock:2,ndarrai:10,nearest:6,neccesari:12,neighbor:6,neumann:2,nois:16,none:[1,2,3,9,10,12,13,14,15],norm:2,normal_vector_solid:8,np:6,number:[1,2,4,5,7,10,14,16],numer:[2,14],numpi:10,nx:[1,2,6,8],nxb:2,ny:[1,2,6,8],nyb:2,o:12,obj:2,object:[1,2,3,4,5,6,7,9,10,12,13,14,15],offset:1,ones:2,oper:10,option:[4,5,6,7,10,14],oracl:16,oracle_g:16,origin:1,out:10,outflow:10,output:12,overwrit:2,packag:[17,18],page:17,paramet:[2,4,5,7,10,12,14,16],particl:[1,4,5,6,7,12,16],particle_info:1,pfl:8,phi:6,plot:12,plot_contour:12,plot_lin:12,plot_mesh:12,plot_scatt:12,plot_vector:12,po:12,point:6,poisson:[0,9,18],poisson_info:13,poisson_var:13,posit:1,pre:10,predict:10,predictor:10,predictor_ab2:10,predictor_eul:10,predictor_rk3:10,presenc:[5,7],pressur:10,privat:[1,2],project:2,provid:2,pvar:10,qin:10,qout:10,quantum:[0,18],quantum_info:15,quantum_regist:16,quantum_var:15,qubit:16,re:10,re_:8,redistance_solid:8,regist:16,relat:1,rescal:10,rescale_veloc:10,rescale_velocity_stub:10,reset:1,residu:14,reynold:[1,4,5,7,10],right:[2,10,14],rigid:[3,4],rotat:1,routin:[10,14],run_circuit:15,run_circuit_ibmq:16,run_circuit_qasm:16,rvar:14,s:8,scalar:[1,4,5,7,12],scalar_info:1,scipi:14,sd:8,search:[4,5,6,7,17],search_funct:[4,5,7],set:[1,2,4,5,6,7],set_default_bc:2,set_gridline_coordin:2,set_user_bc:2,setup:18,setup_circuit:15,shapely_search:6,side:[2,14],simul:1,size:10,sn:8,so:8,solid:8,solid_prop:8,solid_stress:8,solid_ustar:8,solut:[2,10,14],solv:[13,14],solve_cg:14,solve_direct:14,solve_jacobi:14,solve_stub:14,solve_superlu:14,solver:[13,14],soo:8,specifi:12,stat:[10,12],statist:10,stencil:[8,10],step:[1,4,5,7,9,10],stoke:9,store:[1,10],string:[2,4,5,6,7,10,12,14],structur:10,stub:[0,3,9,10,14],submodul:[11,17,18],subpackag:[17,18],subroutin:[1,3,4,5,7,8,9,12,13],sx:8,sxmin:8,sxplu:8,sy:8,symin:8,syplu:8,system:[14,16],tag:10,tau1:8,tau2:8,tau3:8,tau4:8,term:10,time:[1,4,5,7,9,10],top:2,transform:1,tripl:16,two:2,type:[2,10],type_:2,u:8,up:[8,12],updat:[2,10],update_bc_typ:2,update_bc_v:2,update_outflow_bc:10,us:[2,5,7,10,14],user:[1,2,12],user_bc_typ:2,user_bc_v:2,ustr:8,util:[3,4],v:8,valu:[1,2,10],variabl:[2,4,5,6,7,10,12,14],varkei:2,varlist:2,vector:12,velc:[4,5,7],velcoiti:10,veloc:[4,5,7,10],visco:[3,4],vp:8,vstr:8,weno3:8,where:10,which:2,width:2,write:12,write_hdf5_checkpoint:12,write_hdf5_output:12,x:[2,4,5,6,7,8,10,12],xblock:2,xm:8,xmax:[1,2],xmin:[1,2],xmu:8,y:[2,4,5,6,7,8,10,12],yblock:2,ymax:[1,2],ymin:[1,2],z:16},titles:["flowx package","flowx.domain package","flowx.domain._grid package","flowx.imbound package","flowx.imbound._interface package","flowx.imbound._interface.rigid package","flowx.imbound._interface.utils package","flowx.imbound._interface.visco package","flowx.imbound._interface.visco._interface package","flowx.ins package","flowx.ins._interface package","flowx.io package","flowx.io._interface package","flowx.poisson package","flowx.poisson._interface package","flowx.quantum package","flowx.quantum._interface package","Welcome to FlowX\u2019s documentation!","FlowX","setup module"],titleterms:{__meta__:0,_advect:7,_advect_weno3:8,_ann_search:6,_calibrate_circuit:16,_classical_search:6,_constant_extrapol:8,_directional_deriv:8,_display_stat:12,_domain:1,_force_flow:[5,7],_grid:2,_gridbas:2,_gridc:2,_gridi:2,_gridx:2,_helper:14,_imbound:3,_in:9,_initi:16,_interfac:[4,5,6,7,8,10,12,14,16],_linear_extrapol:8,_map_to_grid:[5,7],_mass_bal:10,_normal_vector_solid:8,_oper:10,_particl:1,_plot_contour:12,_plot_lin:12,_plot_mesh:12,_plot_scatt:12,_plot_vector:12,_poisson:13,_project:10,_quantum:15,_redistance_solid:8,_run_circuit:16,_scalar:1,_shapely_search:6,_solid_prop:8,_solid_stress:8,_solid_ustar:8,_solver:14,_stat:10,_write_hdf5_checkpoint:12,_write_hdf5_output:12,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],document:17,domain:[1,2],flowx:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],grover:16,imbound:[3,4,5,6,7,8],indic:17,ins:[9,10],io:[11,12],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19],packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],poisson:[13,14],quantum:[15,16],rigid:5,s:17,setup:19,stub:4,submodul:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16],subpackag:[0,1,3,4,7,9,11,13,15],tabl:17,util:6,visco:[7,8],welcom:17}})