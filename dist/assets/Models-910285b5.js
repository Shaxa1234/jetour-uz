import{j as e}from"./index-18b2069c.js";import{m as l}from"./db-12c2e489.js";const t="/assets/arrow-492401c1.svg",p=({case:{title:s,description:x,img:r,link:a,speed:c}})=>e.jsxs("div",{className:"card flex gap-x-[132px] border-b-2  py-[40px]",children:[e.jsx("div",{className:"bg-[#E6E6E6] px-[55px] pt-[30px] pb-[10px] rounded-[12px] w-[650px]",children:e.jsx("img",{src:r,alt:"car"})}),e.jsxs("div",{className:"flex flex-col justify-between",children:[e.jsx("p",{className:"text-[#999] text-[18px] uppercase",children:c}),e.jsxs("div",{children:[e.jsx("h2",{className:"uppercase text-[24px] mb-5 text-[#1A1A1A] w-[400px]",children:s}),e.jsxs("p",{className:"font-['PoppinsRegular'] text-[16px] text-[#2e2525] flex",children:[x," ",e.jsx("span",{className:"bg-[#E6E6E6] w-[56px] h-[44px] flex items-center justify-center rounded-[8px]",children:e.jsx("a",{href:a,children:e.jsx("img",{src:t,alt:"arrow"})})})]})]})]})]}),d="/assets/discover-3041b339.svg",o=()=>e.jsx("section",{id:"models",className:"pb-[120px]",children:e.jsxs("div",{className:"container mx-auto px-5",children:[e.jsx("h2",{className:"uppercase text-[#666] font-bold mb-[61px] border-b-2 pb-[20px]",children:"Models"}),e.jsx("div",{className:"flex flex-col mb-[40px]",children:l.map(s=>e.jsx(p,{case:s},s.id))}),e.jsx("div",{className:"flex justify-end mr-[250px]",children:e.jsxs("div",{className:"w-[200px] h-[200px] bg-[#F0F0F0] rounded-full flex items-center justify-center flex-col",children:[e.jsx("p",{className:"text-[#666666] text-[20px] capitalize font-medium border-b pb-[5px] font-['PoppinsMedium']",children:"Discover"}),e.jsx("img",{src:d,alt:"arrow"})]})})]})});export{o as default};