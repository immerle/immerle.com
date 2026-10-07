"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["655"],{7457(e,t,r){r.r(t),r.d(t,{metadata:()=>s,default:()=>p,frontMatter:()=>d,contentTitle:()=>c,toc:()=>h,assets:()=>m});var s=JSON.parse('{"id":"get-started/quick-start","title":"Quick Start","description":"The simplest, safest way to run Immerle: Docker Compose, with Postgres","source":"@site/docs/get-started/quick-start.md","sourceDirName":"get-started","slug":"/get-started/quick-start","permalink":"/docs/get-started/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/immerle/immerle/tree/main/docs/docs/get-started/quick-start.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Quick Start"},"sidebar":"tutorialSidebar","previous":{"title":"Get Started","permalink":"/docs/category/get-started"},"next":{"title":"Choosing a client","permalink":"/docs/get-started/choosing-a-client"}}'),i=r(4848),n=r(8453),o=r(6540),a=r(1113);function l(){let[e,t]=(0,o.useState)("change-me");return(0,o.useEffect)(()=>{let e;return t((e=new Uint8Array(18),window.crypto.getRandomValues(e),btoa(String.fromCharCode(...e))))},[]),(0,i.jsx)(a.A,{language:"yaml",title:"docker-compose.yml",children:`services:
  immerle:
    image: ghcr.io/immerle/immerle:latest
    ports:
      - "4533:4533"
    environment:
      DATABASE_DRIVER: "postgres"
      DATABASE_DSN: "postgres://immerle:immerle@postgres:5432/immerle?sslmode=disable"
      LIBRARY_DATA_DIR: "/data"
      LIBRARY_PATHS: "/music"
      ADMIN_USERNAME: "admin"
      ADMIN_PASSWORD: "${e}"
    volumes:
      - immerle-music:/music:ro
      - immerle-data:/data
    depends_on:
      postgres:
        condition: service_healthy
    restart: unless-stopped

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: immerle
      POSTGRES_PASSWORD: immerle
      POSTGRES_DB: immerle
    volumes:
      - immerle-pg:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U immerle"]
      interval: 5s
      timeout: 3s
      retries: 5
    restart: unless-stopped

  # Daily pg_dump, keeps the last 7 and prunes anything older.
  backup:
    image: prodrigestivill/postgres-backup-local:16
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      POSTGRES_HOST: postgres
      POSTGRES_DB: immerle
      POSTGRES_USER: immerle
      POSTGRES_PASSWORD: immerle
      SCHEDULE: "@daily"
      BACKUP_KEEP_DAYS: 7
      BACKUP_KEEP_WEEKS: 0
      BACKUP_KEEP_MONTHS: 0
    volumes:
      - immerle_backup:/backups
    restart: unless-stopped

volumes:
  immerle-data:
  immerle-pg:
  immerle-music:
  immerle_backup:
`})}let d={sidebar_position:1,title:"Quick Start"},c="Quick Start",m={},h=[{value:"Run it",id:"run-it",level:2},{value:"Next",id:"next",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,i.jsxs)(t.p,{children:["The simplest, safest way to run Immerle: ",(0,i.jsx)(t.strong,{children:"Docker Compose"}),", with ",(0,i.jsx)(t.strong,{children:"Postgres"}),"\ninstead of SQLite."]}),"\n",(0,i.jsx)(t.admonition,{title:"Not a sysadmin? Read this",type:"info",children:(0,i.jsxs)(t.p,{children:["If you don't already know why \"don't forward ports on your router\" matters,\nfollow this section as-is and don't deviate: every step is chosen to be the\nthing that's hardest to get wrong, not the thing with the most options. The\n",(0,i.jsx)(t.a,{href:"/docs/installation",children:"Installation"})," and ",(0,i.jsx)(t.a,{href:"/docs/configuration",children:"Configuration"}),"\npages cover the other ways to run Immerle (SQLite, building from source,\nrunning behind your own reverse proxy\u2026) once you want more control."]})}),"\n",(0,i.jsx)(t.h2,{id:"run-it",children:"Run it"}),"\n",(0,i.jsxs)(t.p,{children:["Create a folder, drop your music under ",(0,i.jsx)(t.code,{children:"music/"}),", and save this as\n",(0,i.jsx)(t.code,{children:"docker-compose.yml"})," next to it. Music, the database and daily Postgres\nbackups each live in their own Docker volume rather than a host folder, more\nportable if you manage this stack from Portainer, Komodo or similar. The\nadmin password below is generated fresh right now, reload this page for a\ndifferent one:"]}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsxs)(t.p,{children:["Start it, then copy your music into the ",(0,i.jsx)(t.code,{children:"immerle-music"})," volume:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'docker compose up -d\ndocker run --rm -v immerle-music:/dest -v "$PWD/music":/src:ro alpine cp -a /src/. /dest/\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"http://localhost:4533"})," on the same machine and sign in with ",(0,i.jsx)(t.code,{children:"admin"})," /\nthe password from the ",(0,i.jsx)(t.code,{children:"ADMIN_PASSWORD"})," line above. That's it: the server,\ndatabase and your library are all up, with the last 7 daily database backups\nalways kept in the ",(0,i.jsx)(t.code,{children:"immerle_backup"})," volume."]}),"\n",(0,i.jsx)(t.h2,{id:"next",children:"Next"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/get-started/choosing-a-client",children:"Choosing a client"}),": connect and pick between the\nImmerle app, ",(0,i.jsx)(t.code,{children:"iml"}),", or a Subsonic client."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);