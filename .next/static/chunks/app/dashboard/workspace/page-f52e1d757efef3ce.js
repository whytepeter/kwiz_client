(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{1159:function(e,t,a){Promise.resolve().then(a.bind(a,1898))},1898:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(7437),l=a(2265);function n(e){let{title:t="Oops",description:a="Nothing here",icon:l,className:n,children:r}=e;return(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2 py-10",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/img/empty.png",className:"h-20",alt:""})}),(0,s.jsx)("h3",{className:"text-lg sm:text-xl text-secondary-dark  font-light",children:t}),(0,s.jsx)("p",{className:"text-xs sm:text-sm text-dark-200 mb-1 font-light",children:a}),r]})}var r=a(5602),i=a(8343),o=a(1590),c=a(4114);let d=["Rename","Leave","Delete"],m=[{label:"Date created",value:"createdAt",icon:"/icons/calendar.svg"},{label:"Last updated",value:"updatedAt",icon:"/icons/edit.svg"},{label:"Alphabetical",value:"title",icon:"/icons/sort.svg"}],f=[{label:"List",value:"LIST",icon:"/icons/list.svg",active:"/icons/list_active.svg"},{label:"Grid",value:"GRID",icon:"/icons/workspace.svg",active:"/icons/workspace_active.svg"}];function u(){let{selectedWorkspace:e,quizDisplay:t}=(0,i.a)(),[a,n]=(0,l.useState)(!1),[u,x]=(0,l.useState)(!1),[p,h]=(0,l.useState)(!1),[g,j]=(0,l.useState)(m[0]),N=e=>{i.a.setState({quizDisplay:e})},v=async()=>{try{n(!0)}catch(e){console.log(e)}finally{n(!1)}},y=async()=>{try{n(!0)}catch(e){console.log(e)}finally{n(!1)}},b=e=>{switch(e){case"Rename":x(!0);case"Leave":v();case"Delete":y()}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-full border-y ",children:(0,s.jsxs)("div",{className:"container flex items-center justify-between gap-4 p-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 ",children:[(0,s.jsx)("h3",{className:"text-sm sm:text-base text-secondary-dark",children:null==e?void 0:e.title}),(0,s.jsxs)(o.h_,{children:[(0,s.jsx)(o.$F,{asChild:!0,children:(0,s.jsx)("img",{className:"cursor-pointer",src:"/icons/dots.svg",alt:""})}),(0,s.jsx)(o.AW,{className:"w-24 mt-2 bg-white/30 backdrop-blur-md",children:(0,s.jsx)(o.Qk,{className:"max-h-44 overflow-auto",children:d.map(e=>(0,s.jsx)(o.Xi,{onClick:()=>b(e),className:"".concat("Delete"==e?"text-error-dark":""," font-light gap-2 py-2"),children:e},e))})})]})]}),(0,s.jsxs)(r.z,{className:"!text-dark-300 !text-sm hover:!bg-dark-50/30",color:"white",size:"xsmall",children:[(0,s.jsx)("img",{src:"/icons/invite.svg",alt:""}),(0,s.jsx)("span",{className:"hidden md:flex",children:"Invite"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)(o.h_,{open:p,onOpenChange:h,children:[(0,s.jsx)(o.$F,{asChild:!0,children:(0,s.jsxs)("div",{className:"flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)("img",{src:null==g?void 0:g.icon,alt:""}),(0,s.jsx)("span",{className:"hidden sm:flex text-sm text-dark-300 ",children:null==g?void 0:g.label}),(0,s.jsx)("span",{className:"".concat(p?"":"-rotate-90"," transition-transform transform "),children:(0,s.jsx)("img",{src:"/icons/arrow_down.svg",alt:""})})]})}),(0,s.jsx)(o.AW,{className:"w-44 mt-2 bg-white/30 backdrop-blur-md",children:(0,s.jsx)(o.Qk,{className:"max-h-44 overflow-auto",children:m.map(e=>(0,s.jsxs)(o.Xi,{onClick:()=>j(e),className:"font-light gap-2 py-2",children:[(0,s.jsx)("img",{src:e.icon,alt:""}),e.label]},e.label))})})]}),(0,s.jsx)("div",{className:"grid grid-cols-2 rounded-lg border overflow-hidden",children:f.map(e=>(0,s.jsxs)("div",{onClick:()=>N(e.value),className:"".concat(e.value==t?"text-secondary-dark bg-accent":"text-dark-300"," flex items-center gap-2 p-1.5 text-sm cursor-pointer"),children:[(0,s.jsx)("img",{className:"w-4.5",src:e.value==t?e.active:e.icon,alt:""}),(0,s.jsx)("span",{className:"hidden md:flex",children:e.label})]},e.label))})]})]})}),(0,s.jsx)(c.Z,{edit:!0,open:u,setOpen:x})]})}var x=a(8015);let p=async e=>{try{let t=await (0,x.Z)("WorkspaceQuiz","get",null,{suffix:e});console.log("Quizzes",t),(null==t?void 0:t.length)&&i.a.setState({quizzes:t})}catch(e){throw e}};var h=a(8726);function g(){let[e,t]=(0,l.useState)(!1),{selectedWorkspace:a,quizzes:o}=(0,i.a)(),c=async()=>{if(a)try{t(!0),await p(a._id)}catch(e){h.ZP.error(e.message||"Error fetching quiz")}finally{t(!1)}};return(0,l.useEffect)(()=>{c()},[a]),(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsx)(u,{}),e?(0,s.jsx)("div",{className:"text-center p-4",children:"Loading"}):(null==o?void 0:o.length)?(0,s.jsx)("div",{children:"List Quiz"}):(0,s.jsx)(n,{title:"There’s not a quiz in sight",description:"",children:(0,s.jsxs)(r.z,{children:[(0,s.jsx)("i",{className:"pi pi-plus"}),"Create a new quiz"]})})]})}},4114:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var s=a(7437),l=a(2265),n=a(1014),r=a(9343),i=a(7114),o=a(3304),c=a(4697),d=a(9354);let m=o.fC;o.xz;let f=o.h_;o.x8;let u=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(o.aV,{ref:t,className:(0,d.cn)("fixed inset-0 z-50 bg-black/70 backdrop-blur-sm  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...l})});u.displayName=o.aV.displayName;let x=l.forwardRef((e,t)=>{let{className:a,children:l,...n}=e;return(0,s.jsxs)(f,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(o.VY,{ref:t,className:(0,d.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:[l,(0,s.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(c.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=o.VY.displayName;let p=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};p.displayName="DialogHeader";let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};h.displayName="DialogFooter";let g=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(o.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold leading-none tracking-tight",a),...l})});g.displayName=o.Dx.displayName,l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(o.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",a),...l})}).displayName=o.dk.displayName;var j=a(8726),N=a(6685),v=a(5602),y=a(5375),b=a(8343),w=a(4760);function k(e){let{open:t,setOpen:a,edit:o=!1}=e,[c,d]=(0,l.useState)(!1),{selectedWorkspace:f}=(0,b.a)(),u=(0,r.cI)({resolver:(0,n.F)(y.TN),defaultValues:{title:""}});async function k(e){try{if(d(!0),o){let t={title:e.title,workspaceId:null==f?void 0:f._id};await (0,w.qQ)(t)}else await (0,w.MB)(e.title);z(),j.ZP.success("Workspace ".concat(o?"updated":"created"," successfully"))}catch(e){j.ZP.error((null==e?void 0:e.message)||"Error creating workspace")}finally{d(!1)}}function z(){u.reset(),a(!1)}return(0,l.useEffect)(()=>{o&&u.setValue("title",(null==f?void 0:f.title)||"")},[t]),(0,s.jsx)(m,{open:t,onOpenChange:z,children:(0,s.jsxs)(x,{onInteractOutside:e=>{e.preventDefault()},className:"sm:max-w-[425px]",children:[(0,s.jsx)(p,{children:(0,s.jsx)(g,{className:"font-medium",children:o?"Rename workspace":"Create a new workspace"})}),(0,s.jsx)(i.l0,{...u,children:(0,s.jsx)("form",{className:"w-full  mx-auto   text-dark-300 flex flex-col gap-3.5",children:(0,s.jsx)(i.Wi,{control:u.control,name:"title",render:e=>{let{field:t,fieldState:{error:a}}=e;return(0,s.jsxs)(i.xJ,{children:[(0,s.jsx)(i.lX,{children:"Workspace name"}),(0,s.jsx)(i.NI,{children:(0,s.jsx)(N.Z,{id:"title",placeholder:"Name of your workspace",error:a?String(a.message):"",...t})})]})}})})}),(0,s.jsx)(h,{children:(0,s.jsxs)("div",{className:"flex items-start justify-end gap-4",children:[(0,s.jsx)(v.z,{onClick:z,type:"button",variant:"outline",children:"Cancel"}),(0,s.jsx)(v.z,{onClick:u.handleSubmit(k),loading:c,children:o?"Update workspace":"Create workspace"})]})})]})})}},1590:function(e,t,a){"use strict";a.d(t,{$F:function(){return m},AW:function(){return u},Qk:function(){return f},VD:function(){return p},Xi:function(){return x},h_:function(){return d}});var s=a(7437),l=a(2265),n=a(9518),r=a(7592),i=a(2468),o=a(8165),c=a(9354);let d=n.fC,m=n.xz,f=n.ZA;n.Uv,n.Tr,n.Ee,l.forwardRef((e,t)=>{let{className:a,inset:l,children:i,...o}=e;return(0,s.jsxs)(n.fF,{ref:t,className:(0,c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",l&&"pl-8",a),...o,children:[i,(0,s.jsx)(r.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=n.fF.displayName,l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(n.tu,{ref:t,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})}).displayName=n.tu.displayName;let u=l.forwardRef((e,t)=>{let{className:a,sideOffset:l=4,...r}=e;return(0,s.jsx)(n.Uv,{children:(0,s.jsx)(n.VY,{ref:t,sideOffset:l,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})})});u.displayName=n.VY.displayName;let x=l.forwardRef((e,t)=>{let{className:a,inset:l,...r}=e;return(0,s.jsx)(n.ck,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",l&&"pl-8",a),...r})});x.displayName=n.ck.displayName,l.forwardRef((e,t)=>{let{className:a,children:l,checked:r,...o}=e;return(0,s.jsxs)(n.oC,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:r,...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.wU,{children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})}),l]})}).displayName=n.oC.displayName,l.forwardRef((e,t)=>{let{className:a,children:l,...r}=e;return(0,s.jsxs)(n.Rk,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...r,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.wU,{children:(0,s.jsx)(o.Z,{className:"h-2 w-2 fill-current"})})}),l]})}).displayName=n.Rk.displayName,l.forwardRef((e,t)=>{let{className:a,inset:l,...r}=e;return(0,s.jsx)(n.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",l&&"pl-8",a),...r})}).displayName=n.__.displayName;let p=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(n.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-outline",a),...l})});p.displayName=n.Z0.displayName}},function(e){e.O(0,[990,776,628,726,754,980,419,971,23,744],function(){return e(e.s=1159)}),_N_E=e.O()}]);