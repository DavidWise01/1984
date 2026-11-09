/* 1984 Sprite Chronicle — Kernel 001
   Deterministic, offline, append-only in-memory event reducer.
   This module cannot publish commits or persist itself between browser sessions.
   Commit history is the durable external record. */
export const KERNEL_ID = "1984.sprite-chronicler.001";
export const INVARIANTS = Object.freeze({
  observationBeforeInference: true,
  immutableEvents: true,
  chapterOrder: "part/chapter",
  noSilentOverwrite: true,
  preserveSourceLineage: true,
  separateNarrativeFromSource: true,
  futureUnobserved: true
});
const classes = Object.freeze(["observation","source","interpretation","choice","correction"]);
export function makeEvent({id,chapter,kind,description,sourceId=null,previousId=null,sequence=0}){
  if(!id||typeof id!=="string")throw Error("event id required");
  if(!/^([1-3])\/([0-9]{2})$/.test(chapter))throw Error("chapter must be part/chapter");
  if(!classes.includes(kind))throw Error("unsupported event kind");
  if(!description||typeof description!=="string")throw Error("description required");
  if(!Number.isSafeInteger(sequence)||sequence<0)throw Error("invalid sequence");
  return Object.freeze({id,chapter,kind,description,sourceId,previousId,sequence});
}
export function appendEvent(history,event){
  if(!Array.isArray(history))throw Error("history must be an array");
  if(history.some(e=>e.id===event.id))throw Error("duplicate event id: "+event.id);
  if(history.some(e=>e.chapter===event.chapter&&e.sequence===event.sequence))throw Error("sequence collision");
  if(history.length&&event.sequence<=history[history.length-1].sequence)throw Error("sequence must increase");
  if(event.previousId && !history.some(e=>e.id===event.previousId))throw Error("missing parent witness");
  return Object.freeze([...history,event]);
}
export function lineage(history,id){
  const byId = new Map(history.map(e=>[e.id,e]));const path=[];const seen=new Set();let current=byId.get(id);
  while(current){if(seen.has(current.id))throw Error("lineage cycle");seen.add(current.id);path.push(current);
    current=current.previousId?byId.get(current.previousId):null;
  }
  return Object.freeze(path);
}
export function verify(history){
  let last=-1;const ids=new Set();const issues=[];
  for(const e of history){
    if(ids.has(e.id))issues.push("duplicate ID "+e.id);ids.add(e.id);
    if(e.sequence<=last)issues.push("nonmonotonic sequence "+e.sequence);last=e.sequence;
    if(e.previousId&&!ids.has(e.previousId))issues.push("unresolved prior parent "+e.previousId);
  }
  return Object.freeze({ok:issues.length===0,count:history.length,issues:Object.freeze(issues)});
}
