// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography, presetUno, presetWebFonts,
    transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            lightGray: 'hsl(212, 45%, 89%)',
            grayishBlue: 'hsl(220, 15%, 55%)',
            darkBlue: 'hsl(218, 44%, 22%)'
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Outfit:400,700',
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})