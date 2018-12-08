// module
import {PapyrusMethod} from "./module-papyrus-method.js";

export class PapyrusClass {
   constructor(a) {
      this.__construct_default();
      if (a instanceof Element && a.nodeName == "class") {
         this.name = a.getAttribute("name");
         let node;
         if (node = a.querySelector("class>blurb"))
            this.blurb = node.innerHTML;
         if (node = a.querySelector("class>description"))
            this.description = node.innerHTML;
         if (node = a.querySelectorAll("class>concepts>concept"))
            for (let i of node) {
               let entry = {};
               entry.name = i.getAttribute("name");
               this.concepts.push(entry);
            }
         if (node = a.querySelectorAll("class>methods>method"))
            for (let i of node) {
               let entry = new PapyrusMethod(i);
               this.methods.push(entry);
            }
      }
   }
   __construct_default() {
      this.name = "";
      this.blurb = "";
      this.description = "";
      this.concepts = [];
      this.methods = [];
   }
}