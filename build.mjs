import esbuild from "esbuild"
import { sassPlugin } from 'esbuild-sass-plugin'

esbuild.build({
  plugins: [sassPlugin({ type: "style" })],
  entryPoints: ["src/app.tsx", "src/scss/global.scss"],
  outdir:"public/built",
  bundle: true
})
