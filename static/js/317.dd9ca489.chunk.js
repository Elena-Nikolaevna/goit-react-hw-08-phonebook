"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[317],{317:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r=t(2791),a=t(9434),s=t(3634),o=t(6916),i=function(n){return n.contacts.items},c=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},u=(0,o.P1)([i,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),d=t(5984),f="ContactForm_formWrap__LBMtj",m="ContactForm_inputWrap__XQBhT",p="ContactForm_label__-cVXI",x="ContactForm_input__Bl93P",h="ContactForm_button__eSwX9",_=t(184);function b(){var n=(0,a.v9)(i),e=(0,a.I0)();return(0,_.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.name,o=r.number,i={name:a.value,number:o.value};if(n.some((function(n){return n.name.toLowerCase()===a.value.toLowerCase()})))return alert("".concat(a.value," is already in contacts."));e((0,s.uK)(i)),r.reset()},className:f,children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("label",{className:p,children:"Name"}),(0,_.jsx)("input",{className:x,id:(0,d.x0)(),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("label",{className:p,children:"Number"}),(0,_.jsx)("input",{className:x,id:(0,d.x0)(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})}var g,j,v,y,C,N,Z="Phonebook_title__ipARL",w="Phonebook_sub_title__pa11n",k=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{className:Z,children:"Phonebook"}),(0,_.jsx)(b,{}),(0,_.jsx)("h2",{className:w,children:"Contacts"})]})},F="Filter_filterWrap__xOHoa",P="Filter_label__vEd1E",z="Filter_input__N7T3z",A=t(3165),L=function(){var n=(0,a.I0)();return(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)("label",{className:P,children:"Find contact by name"}),(0,_.jsx)("input",{className:z,id:(0,d.x0)(),type:"text",name:"filter",onChange:function(e){var t=e.target.value;n((0,A.T)(t.trim()))}})]})},I=t(7322),B=t(168),M=t(7691),W=M.ZP.div(g||(g=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 5px 0;\n  background-color: #4f83cc;\n  border-radius: 20px;\n"]))),q=M.ZP.p(j||(j=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  //flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: 500;\n  flex-grow: 1;\n  color: #edffff;\n  span {\n    font-size: 20px;\n    color: #edffff;\n  }\n"]))),E=M.ZP.div(v||(v=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  margin-left: 10px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.color})),S=M.ZP.button(y||(y=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin-right: 10px;\n  //margin: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  svg {\n    color: #bdbdbd;\n  }\n  &:hover {\n    svg {\n      color: #2196f3;\n    }\n  }\n"]))),T=function(n){var e,t=n.contact,r=t.id,o=t.name,i=t.number,c=(0,a.I0)();return(0,_.jsxs)(W,{children:[(0,_.jsx)(E,{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),children:(e=o,e.charAt(0).toUpperCase())}),(0,_.jsxs)(q,{children:[o,(0,_.jsxs)("span",{children:[" ",i]})]}),(0,_.jsx)(S,{type:"button",onClick:function(){c((0,s.GK)(r))},children:(0,_.jsx)(I.FH3,{size:28})})]})},X=M.ZP.ul(C||(C=(0,B.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),H=M.ZP.li(N||(N=(0,B.Z)(["\n  border-top: 1px solid #2f2f37;\n"]))),K=function(){var n=(0,a.v9)(u);return(0,_.jsx)(X,{children:n.map((function(n){return(0,_.jsx)(H,{children:(0,_.jsx)(T,{contact:n})},n.id)}))})},R="Contacts_container__WzsIr",D=function(){var n=(0,a.I0)(),e=(0,a.v9)(c),t=(0,a.v9)(l);return(0,r.useEffect)((function(){n((0,s.yF)())}),[n]),(0,_.jsxs)("div",{className:R,children:[(0,_.jsx)(k,{}),(0,_.jsx)(L,{}),e&&!t&&(0,_.jsx)("b",{children:"Request in progress..."}),(0,_.jsx)(K,{})]})}}}]);
//# sourceMappingURL=317.dd9ca489.chunk.js.map