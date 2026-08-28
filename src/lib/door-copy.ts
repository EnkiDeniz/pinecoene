export const DOOR_BEATS = [
  { id:"thing", eyebrow:"THE THING", title:"", body:"" },
  { id:"scary", eyebrow:"IDEAS ARE SCARY", title:"They frighten us because they threaten what is known.", body:"Something unfamiliar can look ugly, impossible, or hostile simply because the everyday world does not yet know where to put it." },
  { id:"care", eyebrow:"CARE", title:"But when an idea is held with care, it can become something beautiful.", body:"Care does not make the unfamiliar harmless. It gives it enough time to reveal the shape it was trying to become." },
  { id:"courage", eyebrow:"COURAGE", title:"Care gives us the courage to remain with what we do not yet understand.", body:"Not certainty. Not agreement. The courage to stay near enough for another possibility to appear." },
  { id:"world", eyebrow:"ANOTHER WORLD", title:"Sometimes that courage makes another world possible.", body:"A world where the idea no longer has to flatten itself into the language that first rejected it." },
  { id:"travel", eyebrow:"A SHAPE THAT CAN TRAVEL", title:"Perhaps an idea needs a shape that can travel without pretending it arrived finished.", body:"Something that can carry its record, its changes, its gaps, its relations, and the care that let it become." },
  { id:"pinecoene", eyebrow:"PINECŒNE", title:"That object you turned is one of those shapes.", body:"A Pinecœne is a work that remembers how it became." },
] as const;

export const DOOR_COPY = {
  object:"This is a Pinecœne. Turn it.",
  beats:DOOR_BEATS,
  project:"This idea is still messy. We are trying to care it into a thing people want to share. That care is the project.",
  invitation:"Come make a Pinecœne.",
  actions:["Watch one become","See the works","Bring an idea"],
  ending:"The music is still playing.",
} as const;
