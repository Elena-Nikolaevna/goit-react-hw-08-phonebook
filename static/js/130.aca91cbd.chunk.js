"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[130],{2130:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r=t(2791),a=t(9434),s=t(3634),i=t(6916),o=function(n){return n.contacts.items},c=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},d=(0,i.P1)([o,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),u=t(5984),p="ContactForm_formWrap__LBMtj",x="ContactForm_inputWrap__XQBhT",m="ContactForm_label__-cVXI",h="ContactForm_input__Bl93P",f="ContactForm_button__eSwX9",b=t(184);function _(){var n=(0,a.v9)(o),e=(0,a.I0)();return(0,b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.name,i=r.number,o={name:a.value,number:i.value};if(n.some((function(n){return n.name.toLowerCase()===a.value.toLowerCase()})))return alert("".concat(a.value," is already in contacts."));e((0,s.uK)(o)),r.reset()},className:p,children:[(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("label",{className:m,children:"Name"}),(0,b.jsx)("input",{className:h,id:(0,u.x0)(),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("label",{className:m,children:"Number"}),(0,b.jsx)("input",{className:h,id:(0,u.x0)(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})}var g,j,v,y,C,N,Z,w="Phonebook_title__ipARL",P="Phonebook_sub_title__pa11n",k=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{className:w,children:"Phonebook"}),(0,b.jsx)(_,{}),(0,b.jsx)("h2",{className:P,children:"Contacts"})]})},F="Filter_filterWrap__xOHoa",z="Filter_label__vEd1E",A="Filter_input__N7T3z",L=t(3165),I=function(){var n=(0,a.I0)();return(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("label",{className:z,children:"Find contact by name"}),(0,b.jsx)("input",{className:A,id:(0,u.x0)(),type:"text",name:"filter",onChange:function(e){var t=e.target.value;n((0,L.T)(t.trim()))}})]})},B=t(7322),M=t(168),q=t(7691),E=q.ZP.div(g||(g=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 5px 0;\n"]))),S=q.ZP.p(j||(j=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  font-family: inherit;\n  font-size: 15px;\n  flex-grow: 1;\n  span {\n    font-size: 12px;\n  }\n"]))),T=q.ZP.div(v||(v=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.color})),W=q.ZP.button(y||(y=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  svg {\n    color: #bdbdbd;\n  }\n  &:hover {\n    svg {\n      color: #2196f3;\n    }\n  }\n"]))),X=function(n){var e,t=n.contact,r=t.id,i=t.name,o=t.number,c=(0,a.I0)();return(0,b.jsxs)(E,{children:[(0,b.jsx)(T,{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),children:(e=i,e.charAt(0).toUpperCase())}),(0,b.jsxs)(S,{children:[i,(0,b.jsxs)("span",{children:["Phone: ",o]})]}),(0,b.jsx)(W,{type:"button",onClick:function(){c((0,s.GK)(r))},children:(0,b.jsx)(B.FH3,{size:28})})]})},H=q.ZP.ul(C||(C=(0,M.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),K=q.ZP.li(N||(N=(0,M.Z)(["\n  border-top: 1px solid #2f2f37;\n"]))),R=function(){var n=(0,a.v9)(d);return(0,b.jsx)(H,{children:n.map((function(n){return(0,b.jsx)(K,{children:(0,b.jsx)(X,{contact:n})},n.id)}))})},D=q.ZP.div(Z||(Z=(0,M.Z)(["\n  width: 280px;\n  padding: 20px;\n  margin: 0 auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n"]))),G=function(){var n=(0,a.I0)(),e=(0,a.v9)(c),t=(0,a.v9)(l);return(0,r.useEffect)((function(){n((0,s.yF)())}),[n]),(0,b.jsxs)(D,{children:[(0,b.jsx)(k,{}),(0,b.jsx)(I,{}),e&&!t&&(0,b.jsx)("b",{children:"Request in progress..."}),(0,b.jsx)(R,{})]})}}}]);
//# sourceMappingURL=130.aca91cbd.chunk.js.map