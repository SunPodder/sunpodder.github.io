import{c as n,j as e}from"./index-DS_sElTm.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],o=n("CircleCheck",c);function d({title:t,points:i,image:r,href:a}){return e.jsxs("div",{className:"border-2 border-gray-800 rounded-xl max-w-6xl w-full flex flex-col md:flex-row gap-4 text-left p-6 bg-gray-800/50 overflow-hidden mt-15",children:[e.jsxs("div",{className:"w-full md:min-w-2/5 md:mt-10 md:ml-5",children:[e.jsx("h3",{className:"text-3xl font-bold w-4/5",children:t}),e.jsx("ul",{className:"mt-6 text-lg text-gray-400",children:i.map((s,l)=>e.jsxs("li",{className:"mt-2.5",children:[e.jsx(o,{className:"w-5 h-5 inline-block mr-2"})," ",s]},l))}),e.jsx("div",{className:"mt-12",children:e.jsx("a",{className:"bg-white text-black px-4 py-2 rounded-lg cursor-pointer",href:a,target:"_blank",rel:"noopener noreferrer",children:"View Project"})})]}),e.jsx("div",{className:"w-full md:max-w-3/5 border-4 border-gray-600 bg-black rounded-lg p-3 min-w-4xl",children:e.jsx("div",{children:e.jsx("img",{src:r,alt:t})})})]})}const m=[{title:"Real-time Chat Application",image:"/chat.png",href:"https://github.com/SunPodder/chat-app",points:["Real-time messaging platform with intuitive interface and comprehensive functionality","Built with React, Express, PostgreSQL for data persistence, and Socket.IO for real-time communication","Integrated Redis for optimized caching, significantly improving response times"]},{title:"Social Media Application",image:"/social.png",href:"https://github.com/SunPodder/chirper",points:["Full-featured social platform with content creation, user interactions, and discovery features","Utilized SvelteKit for lightning-fast page transitions and optimized client-side rendering","Implemented SurrealDB for flexible document storage with powerful relation capabilities"]},{title:"URL Shortening Service",image:"/short.png",href:"https://github.com/SunPodder/shorty",points:["Minimalist yet powerful URL shortening service with custom alias support","Developed detailed click analytics system tracking geographic data and referral sources","Built with React for the frontend and PocketBase for rapid backend development"]}];function h(){return e.jsxs("div",{className:"text-center px-4",id:"projects",children:[e.jsx("div",{className:"pt-20",children:e.jsx("span",{className:"section-title",children:"REAL-WORLD RESULTS"})}),e.jsx("h2",{className:"text-5xl font-bold mt-5",children:"Featured Projects"}),e.jsx("p",{className:"mt-3 text-gray-400 text-lg",children:"See how I transformed concepts into enganging digital experiences."}),e.jsx("div",{className:"w-full flex items-center flex-col",children:m.map((t,i)=>e.jsx(d,{...t},i))})]})}export{h as default};
