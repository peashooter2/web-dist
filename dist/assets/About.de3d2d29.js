import{d as a,Y as r,j as t,$ as n}from"./index.be808c1f.js";import{o}from"./index.3f8a9893.js";import{M as s}from"./Markdown.bbb7a05d.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),u=()=>{a(),o("manage.sidemenu.about");const[e]=r(i);return t(n,{get loading(){return e.loading},get children(){return t(s,{get children(){return e()}})}})};export{u as default};