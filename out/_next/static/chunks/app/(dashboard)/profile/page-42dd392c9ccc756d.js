(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{2429:function(e,r,t){Promise.resolve().then(t.bind(t,5270))},5270:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(7437),s=t(8110),a=t(1865),i=t(4578),o=t(3434),l=t(6039),d=t(6788),c=t(5337),u=t(2265),f=t(9311);let m=u.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("textarea",{className:(0,f.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});m.displayName="Textarea";var x=t(1424);let p=i.Ry({username:i.Z_().min(2,{message:"Username must be at least 2 characters."}).max(30,{message:"Username must not be longer than 30 characters."}),email:i.Z_().min(1,{message:"This field cannot be empty."}).email("This is not a valid email."),bio:i.Z_().max(160).min(4),urls:i.Ry({twitter:i.Z_().url({message:"Please enter a valid URL."}).optional(),github:i.Z_().url({message:"Please enter a valid URL."}).optional()}).optional()}),h={bio:"I'm a software developer...",urls:{twitter:"https://twitter.com/",github:"https://github.com/"}};function g(){let e=(0,a.cI)({resolver:(0,s.F)(p),defaultValues:h,mode:"onChange"});return(0,n.jsxs)("div",{className:"flex-1 space-y-4 p-8 pt-6",children:[(0,n.jsx)("div",{className:"flex items-center justify-between space-y-2",children:(0,n.jsx)("h2",{className:"text-3xl font-bold tracking-tight",children:"Profile"})}),(0,n.jsxs)(l.Zb,{children:[(0,n.jsxs)(l.Ol,{children:[(0,n.jsx)(l.ll,{children:"Profile Settings"}),(0,n.jsx)(l.SZ,{children:"Manage your public profile information"})]}),(0,n.jsx)(l.aY,{children:(0,n.jsx)(d.l0,{...e,children:(0,n.jsxs)("form",{onSubmit:e.handleSubmit(function(e){x.Am.success("Profile updated!")}),className:"space-y-8",children:[(0,n.jsx)(d.Wi,{control:e.control,name:"username",render:e=>{let{field:r}=e;return(0,n.jsxs)(d.xJ,{children:[(0,n.jsx)(d.lX,{children:"Username"}),(0,n.jsx)(d.NI,{children:(0,n.jsx)(c.I,{placeholder:"shadcn",...r})}),(0,n.jsx)(d.pf,{children:"This is your public display name."}),(0,n.jsx)(d.zG,{})]})}}),(0,n.jsx)(d.Wi,{control:e.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(d.xJ,{children:[(0,n.jsx)(d.lX,{children:"Email"}),(0,n.jsx)(d.NI,{children:(0,n.jsx)(c.I,{placeholder:"example@email.com",...r})}),(0,n.jsx)(d.pf,{children:"Your email address."}),(0,n.jsx)(d.zG,{})]})}}),(0,n.jsx)(d.Wi,{control:e.control,name:"bio",render:e=>{let{field:r}=e;return(0,n.jsxs)(d.xJ,{children:[(0,n.jsx)(d.lX,{children:"Bio"}),(0,n.jsx)(d.NI,{children:(0,n.jsx)(m,{placeholder:"Tell us a little bit about yourself",className:"resize-none",...r})}),(0,n.jsxs)(d.pf,{children:["You can ",(0,n.jsx)("span",{children:"@mention"})," other users and organizations."]}),(0,n.jsx)(d.zG,{})]})}}),(0,n.jsx)(o.z,{type:"submit",children:"Update profile"})]})})})]})]})}},6788:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return d},lX:function(){return p},pf:function(){return g},xJ:function(){return x},zG:function(){return b}});var n=t(7437),s=t(2265),a=t(7256),i=t(1865),o=t(9311),l=t(5821);let d=i.RV,c=s.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(c.Provider,{value:{name:r.name},children:(0,n.jsx)(i.Qr,{...r})})},f=()=>{let e=s.useContext(c),r=s.useContext(m),{getFieldState:t,formState:n}=(0,i.Gc)(),a=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...a}},m=s.createContext({}),x=s.forwardRef((e,r)=>{let{className:t,...a}=e,i=s.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:r,className:(0,o.cn)("space-y-1",t),...a})})});x.displayName="FormItem";let p=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:a,formItemId:i}=f();return(0,n.jsx)(l._,{ref:r,className:(0,o.cn)(a&&"text-destructive",t),htmlFor:i,...s})});p.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:i,formDescriptionId:o,formMessageId:l}=f();return(0,n.jsx)(a.g7,{ref:r,id:i,"aria-describedby":s?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!s,...t})});h.displayName="FormControl";let g=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:a}=f();return(0,n.jsx)("p",{ref:r,id:a,className:(0,o.cn)("text-sm text-muted-foreground",t),...s})});g.displayName="FormDescription";let b=s.forwardRef((e,r)=>{let{className:t,children:s,...a}=e,{error:i,formMessageId:l}=f(),d=i?String(null==i?void 0:i.message):s;return d?(0,n.jsx)("p",{ref:r,id:l,className:(0,o.cn)("text-sm font-medium text-destructive",t),...a,children:d}):null});b.displayName="FormMessage"},5337:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(7437),s=t(2265),a=t(9311);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex w-[358px] h-[44px] py-3 pl-3 pr-2.5 items-center gap-[8px] text-neutral-0","rounded-lg border border-neutral-800 bg-neutral-700","transition-all duration-500 ease-in-out","focus:outline-none focus:ring-2 focus:ring-primary-light",t),ref:r,...i})});i.displayName="Input"},5821:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(7437),s=t(2265),a=t(6743),i=t(9213),o=t(9311);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,o.cn)(l(),t),...s})});d.displayName=a.f.displayName},6039:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=t(7437),s=t(2265),a=t(9311);let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg bg-transparent py-[70px] text-card-foreground shadow-sm",t),...s})});i.displayName="Card";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 py-6",t),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold flex justify-center items-center leading-none tracking-tight",t),...s})});l.displayName="CardTitle";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,a.cn)("flex justify-center items-center text-sm text-muted-foreground",t),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("pt-0 px-0",t),...s})});c.displayName="CardContent";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex mt-[24px] items-center pt-0",t),...s})});u.displayName="CardFooter"},3434:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(7437),s=t(2265),a=t(7256),i=t(9213),o=t(9311);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary-base text-neutral hover:bg-primary-dark px-6 py-2.5 gap-1 rounded-lg bg-primary-base shadow-[0px_1px_2px_0px_rgba(55,93,251,0.08)]",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:t})),ref:r,...c})});d.displayName="Button"},9311:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(7042),s=t(4769);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}},6743:function(e,r,t){"use strict";t.d(r,{f:function(){return o}});var n=t(2265),s=t(9381),a=t(7437),i=n.forwardRef((e,r)=>(0,a.jsx)(s.WV.label,{...e,ref:r,onMouseDown:r=>{let t=r.target;t.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var o=i},9381:function(e,r,t){"use strict";t.d(r,{WV:function(){return o},jH:function(){return l}});var n=t(2265),s=t(4887),a=t(7256),i=t(7437),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...s}=e,o=n?a.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...s,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function l(e,r){e&&s.flushSync(()=>e.dispatchEvent(r))}}},function(e){e.O(0,[895,810,329,971,864,744],function(){return e(e.s=2429)}),_N_E=e.O()}]);