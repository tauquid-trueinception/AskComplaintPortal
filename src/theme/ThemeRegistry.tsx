'use client';

import React, { ReactNode, useMemo } from 'react';
import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import * as baseColors from 'tailwindcss/colors';
import { ThemeProvider } from '@emotion/react';
import localFont from 'next/font/local';
import { RootState } from '@/redux/store/themeStore';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

export const customTheme = {
    aliasColors: {
        primary: baseColors.lime,
        secondary: baseColors.neutral,
        info: baseColors.sky,
        warning: baseColors.amber,
        error: baseColors.red,
        success: baseColors.green,
    },
    textIconography: {
        dark: {
            active: 'rgba(255, 255, 255, 0.87)',
            inactive: 'rgba(255, 255, 255, 0.60)',
            disabled: 'rgba(255, 255, 255, 0.38)',
        },
        light: {
            active: 'rgba(38, 38, 38, 0.87)',
            inactive: 'rgba(38, 38, 38, 0.60)',
            disabled: 'rgba(38, 38, 38, 0.38)',
        },
    },
    mappedColors: {
        text: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.textIconography.light.active
                    : customTheme.textIconography.dark.active;
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.textIconography.light.inactive
                    : customTheme.textIconography.dark.inactive;
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.textIconography.light.disabled
                    : customTheme.textIconography.dark.disabled;
            },
        },
        textPrimary: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.primary['500']}DE`
                    : customTheme.aliasColors.primary['300'];
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.primary['500']}99`
                    : customTheme.aliasColors.primary['500'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.primary['500']}61`
                    : customTheme.aliasColors.primary['800'];
            },
        },
        textSecondary: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.secondary['500']}DE`
                    : customTheme.aliasColors.secondary['400'];
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.secondary['500']}99`
                    : customTheme.aliasColors.secondary['700'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.secondary['500']}61`
                    : customTheme.aliasColors.secondary['900'];
            },
        },
        textInfo: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.info['600']}DE`
                    : customTheme.aliasColors.info['300'];
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.info['600']}99`
                    : customTheme.aliasColors.info['500'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.info['600']}61`
                    : customTheme.aliasColors.info['700'];
            },
        },
        textWarning: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.warning['500']}DE`
                    : customTheme.aliasColors.warning['300'];
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.warning['500']}99`
                    : customTheme.aliasColors.warning['500'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.warning['500']}61`
                    : customTheme.aliasColors.warning['700'];
            },
        },
        textSuccess: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.success['600']}DE`
                    : customTheme.aliasColors.success['300'];
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.success['600']}99`
                    : customTheme.aliasColors.success['500'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.success['600']}61`
                    : customTheme.aliasColors.success['700'];
            },
        },
        textError: {
            active(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.error['500']}DE`
                    : customTheme.aliasColors.error['400'];
            },
            inactive(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.error['500']}99`
                    : customTheme.aliasColors.error['600'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? `${customTheme.aliasColors.error['500']}61`
                    : customTheme.aliasColors.error['800'];
            },
        },
        border: {
            page(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.secondary['300']
                    : customTheme.aliasColors.secondary['700'];
            },
            primary(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.primary['300']
                    : customTheme.aliasColors.primary['700'];
            },
            secondary(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.secondary['300']
                    : customTheme.aliasColors.secondary['700'];
            },
            info(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.info['300']
                    : customTheme.aliasColors.info['700'];
            },
            warning(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.warning['300']
                    : customTheme.aliasColors.warning['700'];
            },
            error(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.error['300']
                    : customTheme.aliasColors.error['700'];
            },
            success(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.success['300']
                    : customTheme.aliasColors.success['700'];
            },
            disabled(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? baseColors.neutral['300']
                    : baseColors.neutral['700'];
            },
        },
        surface: {
            // sidebar(mode: "light" | "dark") {
            //     return mode === 'light' ? baseColors.white : baseColors.stone['800']
            // },
            page(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.secondary['50']
                    : customTheme.aliasColors.secondary['900'];
            },
            primary(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.primary['50']
                    : customTheme.aliasColors.primary['950'];
            },
            secondary(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.secondary['100']
                    : customTheme.aliasColors.secondary['950'];
            },
            info(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.info['50']
                    : customTheme.aliasColors.info['950'];
            },
            warning(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.warning['50']
                    : customTheme.aliasColors.warning['950'];
            },
            error(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.error['50']
                    : customTheme.aliasColors.error['950'];
            },
            success(mode: 'light' | 'dark') {
                return mode === 'light'
                    ? customTheme.aliasColors.success['50']
                    : customTheme.aliasColors.success['950'];
            },
        },
        // shade: {
        //     50(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['50']
        //             : baseColors.stone['950']
        //     },
        //     100(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['100']
        //             : baseColors.stone['900']
        //     },
        //     200(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['200']
        //             : baseColors.stone['800']
        //     },
        //     300(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['300']
        //             : baseColors.stone['700']
        //     },
        //     400(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['400']
        //             : baseColors.stone['600']
        //     },
        //     500(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['500']
        //             : baseColors.stone['500']
        //     },
        //     600(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['600']
        //             : baseColors.stone['400']
        //     },
        //     700(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['700']
        //             : baseColors.stone['300']
        //     },
        //     800(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['800']
        //             : baseColors.stone['200']
        //     },
        //     900(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['900']
        //             : baseColors.stone['100']
        //     },
        //     950(mode: "dark" | "light") {
        //         return mode === 'light'
        //             ? baseColors.stone['950']
        //             : baseColors.stone['50']
        //     }
        // },
        shadow: {
            10(mode: 'dark' | 'light') {
                return mode === 'light'
                    ? 'rgba(10, 10, 10, 0.1)'
                    : 'rgba(10, 10, 10, 0.1)';
            },
            20(mode: 'dark' | 'light') {
                return mode === 'light'
                    ? 'rgba(10, 10, 10, 0.2)'
                    : 'rgba(10, 10, 10, 0.2)';
            },
        },
        action: {
            primary: {
                main(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['600']
                        : customTheme.aliasColors.primary['400'];
                },
                hover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['400']
                        : customTheme.aliasColors.primary['400'];
                },
                pressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['800']
                        : customTheme.aliasColors.primary['700'];
                },
                focused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['800']
                        : customTheme.aliasColors.primary['700'];
                },
                disabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.gray['400']
                        : baseColors.gray['400'];
                },
                textMain(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['50']
                        : customTheme.aliasColors.primary['50'];
                },
                textHover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['50']
                        : customTheme.aliasColors.primary['50'];
                },
                textPressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['200']
                        : customTheme.aliasColors.primary['200'];
                },
                textDisabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.primary['50']
                        : customTheme.aliasColors.primary['50'];
                },
                textFocused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.neutral['50']
                        : baseColors.neutral['50'];
                },
            },
            secondary: {
                main(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['600']
                        : customTheme.aliasColors.secondary['500'];
                },
                hover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['500']
                        : customTheme.aliasColors.secondary['500'];
                },
                pressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['800']
                        : customTheme.aliasColors.secondary['700'];
                },
                focused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['800']
                        : customTheme.aliasColors.secondary['700'];
                },
                disabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.gray['400']
                        : baseColors.gray['400'];
                },
                textMain(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['50']
                        : customTheme.aliasColors.secondary['50'];
                },
                textHover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['50']
                        : customTheme.aliasColors.secondary['50'];
                },
                textPressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['200']
                        : customTheme.aliasColors.secondary['200'];
                },
                textDisabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.secondary['50']
                        : customTheme.aliasColors.secondary['50'];
                },
                textFocused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.neutral['50']
                        : baseColors.neutral['50'];
                },
            },
            info: {
                main(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['600']
                        : customTheme.aliasColors.info['600'];
                },
                hover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['500']
                        : customTheme.aliasColors.info['500'];
                },
                pressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['800']
                        : customTheme.aliasColors.info['700'];
                },
                focused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['800']
                        : customTheme.aliasColors.info['700'];
                },
                disabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.gray['400']
                        : baseColors.gray['900'];
                },
                textMain(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['50']
                        : customTheme.aliasColors.info['50'];
                },
                textHover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['50']
                        : customTheme.aliasColors.info['50'];
                },
                textPressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['200']
                        : customTheme.aliasColors.info['200'];
                },
                textDisabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.info['50']
                        : customTheme.aliasColors.info['50'];
                },
                textFocused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.neutral['50']
                        : baseColors.neutral['50'];
                },
            },
            warning: {
                main(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['600']
                        : customTheme.aliasColors.warning['600'];
                },
                hover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['500']
                        : customTheme.aliasColors.warning['500'];
                },
                pressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['800']
                        : customTheme.aliasColors.warning['700'];
                },
                focused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['800']
                        : customTheme.aliasColors.warning['700'];
                },
                disabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.gray['400']
                        : baseColors.gray['400'];
                },
                textMain(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['50']
                        : customTheme.aliasColors.warning['50'];
                },
                textHover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['50']
                        : customTheme.aliasColors.warning['50'];
                },
                textPressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['200']
                        : customTheme.aliasColors.warning['200'];
                },
                textDisabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.warning['50']
                        : customTheme.aliasColors.warning['50'];
                },
                textFocused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.neutral['50']
                        : baseColors.neutral['50'];
                },
            },
            success: {
                main(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['600']
                        : customTheme.aliasColors.success['900'];
                },
                hover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['500']
                        : customTheme.aliasColors.success['500'];
                },
                pressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['800']
                        : customTheme.aliasColors.success['700'];
                },
                focused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['800']
                        : customTheme.aliasColors.success['700'];
                },
                disabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.gray['400']
                        : baseColors.gray['900'];
                },
                textMain(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['50']
                        : customTheme.aliasColors.success['50'];
                },
                textHover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['50']
                        : customTheme.aliasColors.success['50'];
                },
                textPressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['200']
                        : customTheme.aliasColors.success['200'];
                },
                textDisabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.success['50']
                        : customTheme.aliasColors.success['50'];
                },
                textFocused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.neutral['50']
                        : baseColors.neutral['50'];
                },
            },
            error: {
                main(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['500']
                        : customTheme.aliasColors.error['600'];
                },
                hover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['400']
                        : customTheme.aliasColors.error['500'];
                },
                pressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['800']
                        : customTheme.aliasColors.error['700'];
                },
                focused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['800']
                        : customTheme.aliasColors.error['700'];
                },
                disabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.gray['400']
                        : baseColors.gray['900'];
                },
                textMain(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['50']
                        : customTheme.aliasColors.error['50'];
                },
                textHover(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['50']
                        : customTheme.aliasColors.error['50'];
                },
                textPressed(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['200']
                        : customTheme.aliasColors.error['200'];
                },
                textDisabled(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? customTheme.aliasColors.error['50']
                        : customTheme.aliasColors.error['50'];
                },
                textFocused(mode: 'light' | 'dark') {
                    return mode === 'light'
                        ? baseColors.neutral['50']
                        : baseColors.neutral['50'];
                },
            },
        },
    },
};

declare module '@mui/material/styles' {
    interface PaletteOptions {
        surface?: {
            sidebar?: string;
            page?: string;
            primary?: string;
            secondary?: string;
            info?: string;
            warning?: string;
            error?: string;
            success?: string;
        };
        shade?: {
            50?: string;
            100?: string;
            200?: string;
            300?: string;
            400?: string;
            500?: string;
            600?: string;
            700?: string;
            800?: string;
            900?: string;
            950?: string;
        };
        shadow?: {
            10?: string;
            20?: string;
        };
        textActive?: string;
        textInactive?: string;
        textDisabled?: string;
        textPrimary?: {
            active?: string;
            inactive?: string;
            disabled?: string;
        };
        textSecondary?: {
            active?: string;
            inactive?: string;
            disabled?: string;
        };
        textInfo?: {
            active?: string;
            inactive?: string;
            disabled?: string;
        };
        textWarning?: {
            active?: string;
            inactive?: string;
            disabled?: string;
        };
        textError?: {
            active?: string;
            inactive?: string;
            disabled?: string;
        };
        textSuccess?: {
            active?: string;
            inactive?: string;
            disabled?: string;
        };
        border?: {
            page?: string;
            primary?: string;
            secondary?: string;
            info?: string;
            warning?: string;
            error?: string;
            success?: string;
            disabled?: string;
        };
        actions?: {
            primary: {
                main?: string;
                hover?: string;
                pressed?: string;
                focused?: string;
                disabled?: string;
                textMain?: string;
                textHover?: string;
                textPressed?: string;
                textDisabled?: string;
                textFocused?: string;
            };
            secondary: {
                main?: string;
                hover?: string;
                pressed?: string;
                focused?: string;
                disabled?: string;
                textMain?: string;
                textHover?: string;
                textPressed?: string;
                textDisabled?: string;
                textFocused?: string;
            };
            info: {
                main?: string;
                hover?: string;
                pressed?: string;
                focused?: string;
                disabled?: string;
                textMain?: string;
                textHover?: string;
                textPressed?: string;
                textDisabled?: string;
                textFocused?: string;
            };
            warning: {
                main?: string;
                hover?: string;
                pressed?: string;
                focused?: string;
                disabled?: string;
                textMain?: string;
                textHover?: string;
                textPressed?: string;
                textDisabled?: string;
                textFocused?: string;
            };
            error: {
                main?: string;
                hover?: string;
                pressed?: string;
                focused?: string;
                disabled?: string;
                textMain?: string;
                textHover?: string;
                textPressed?: string;
                textDisabled?: string;
                textFocused?: string;
            };
            success: {
                main?: string;
                hover?: string;
                pressed?: string;
                focused?: string;
                disabled?: string;
                textMain?: string;
                textHover?: string;
                textPressed?: string;
                textDisabled?: string;
                textFocused?: string;
            };
        };
    }

    interface TypographyVariantsOptions {
        d1?: React.CSSProperties;
        d2?: React.CSSProperties;
        d3?: React.CSSProperties;
        d4?: React.CSSProperties;
        d5?: React.CSSProperties;
        d6?: React.CSSProperties;
        d7?: React.CSSProperties;
        fd1?: React.CSSProperties;
        fd2?: React.CSSProperties;
        fd3?: React.CSSProperties;
        fd4?: React.CSSProperties;
        fd5?: React.CSSProperties;
        fd6?: React.CSSProperties;
        fd7?: React.CSSProperties;
        fh1?: React.CSSProperties;
        fh2?: React.CSSProperties;
        fh3?: React.CSSProperties;
        fh4?: React.CSSProperties;
        fh5?: React.CSSProperties;
        fh6?: React.CSSProperties;
        p1?: React.CSSProperties;
        p2?: React.CSSProperties;
        p3?: React.CSSProperties;
        p4?: React.CSSProperties;
        l1?: React.CSSProperties;
        l2?: React.CSSProperties;
        l3?: React.CSSProperties;
        l4?: React.CSSProperties;
        overlineLarge?: React.CSSProperties;
        overlineSmall?: React.CSSProperties;
    }

    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        desktop: true;
        tabletLandscape: true;
    }

    interface ChipPropsSizeOptions {
        large?: React.CSSProperties;
        medium?: React.CSSProperties;
        small?: React.CSSProperties;
    }

    interface ChipPropsColorOptions {
        primary?: React.CSSProperties;
        success?: React.CSSProperties;
        warning?: React.CSSProperties;
        info?: React.CSSProperties;
        secondary?: React.CSSProperties;
        error?: React.CSSProperties;
    }

    interface BadgePropsVariantOptions {
        dot?: React.CSSProperties;
        standard?: React.CSSProperties;
        filled?: React.CSSProperties;
        outline?: React.CSSProperties;
    }

    interface BadgePropsColorOptions {
        primary?: React.CSSProperties;
        success?: React.CSSProperties;
        warning?: React.CSSProperties;
        info?: React.CSSProperties;
        secondary?: React.CSSProperties;
        error?: React.CSSProperties;
    }

    interface BadgePropsSizeOptions {
        small?: React.CSSProperties;
        medium?: React.CSSProperties;
        large?: React.CSSProperties;
    }

    interface BottomNavigationActionPropsVariantOptions {
        filled?: React.CSSProperties;
        outline?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        d1: true;
        d2: true;
        d3: true;
        d4: true;
        d5: true;
        d6: true;
        d7: true;
        fd1: true;
        fd2: true;
        fd3: true;
        fd4: true;
        fd5: true;
        fd6: true;
        fd7: true;
        fh1: true;
        fh2: true;
        fh3: true;
        fh4: true;
        fh5: true;
        fh6: true;
        p1: true;
        p2: true;
        p3: true;
        p4: true;
        l1: true;
        l2: true;
        l3: true;
        l4: true;
        overlineLarge: true;
        overlineSmall: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsSizeOverrides {
        large: true;
        medium: true;
        small: true;
    }

    interface ChipPropsColorOverrides {
        primary: true;
        secondary: true;
        info: true;
        warning: true;
        success: true;
        error: true;
    }

    interface ChipOwnProps {
        shape?: 'pill' | 'rounded';
        size?: 'small' | 'large' | 'medium';
    }
}

declare module '@mui/material/Badge' {
    interface BadgePropsVariantOverrides {
        dot: true;
        standard: true;
        filled: true;
        outline: true;
    }

    interface BadgePropsSizeOverrides {
        small: true;
        medium: true;
        large: true;
    }

    interface BadgePropsColorOverrides {
        primary: true;
        secondary: true;
        info: true;
        warning: true;
        success: true;
        error: true;
    }

    interface BadgeOwnProps {
        size?: 'small' | 'large' | 'medium';
    }
}

declare module '@mui/material/BottomNavigationAction' {
    interface BottomNavigationActionOwnProps {
        variant?: 'filled' | 'outline';
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonOwnProps {
        variant?: 'filled' | 'outlined' | 'standard';
        shape?: 'circle' | 'rounded';
    }

    interface IconButtonPropsColorOverrides {
        transparent: true;
    }

    interface IconButtonPropsSizeOverrides {
        xsmall: true;
    }
}

// font
export const font = localFont({
    src: [
        {
            path: './fonts/DMSans_18pt-Light.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/DMSans_18pt-Regular.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/DMSans_18pt-Medium.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/DMSans_18pt-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/DMSans_18pt-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
});

export const fontNoma = localFont({
    src: [
        {
            path: './fonts/AbrilFatface-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
});

const Theme = ({ mode = 'light' }: { mode: 'light' | 'dark' }) => {
    return createTheme({
        breakpoints: {
            // values: {
            //   mobile: 0, // 0px to 401px
            //   tablet: 402, // 402px to 764px
            //   tabletLandscape: 765, // 765px to 1168px
            //   desktop: 1169, // 1169px and above
            // },
            values: {
                mobile: 0, // between 0 and 768 is considered as mobile
                tablet: 768, // above 768 is considered as tablet
                tabletLandscape : 1133,
                desktop: 1440, // above 1440 is considered as desktop
            },
        },

        palette: {
            mode,
            background: {
                default:
                    mode == 'light'
                        ? customTheme.aliasColors.secondary['50']
                        : customTheme.aliasColors.secondary['950'],
            },
            primary: {
                main: customTheme.aliasColors.primary['500'],
                ...customTheme.aliasColors.primary,
            },
            secondary: {
                main: customTheme.aliasColors.secondary['500'],
                ...customTheme.aliasColors.secondary,
            },
            info: {
                main: customTheme.aliasColors.info['500'],
                ...customTheme.aliasColors.info,
            },
            warning: {
                main: customTheme.aliasColors.warning['500'],
                ...customTheme.aliasColors.warning,
            },
            error: {
                main: customTheme.aliasColors.error['500'],
                ...customTheme.aliasColors.error,
            },
            success: {
                main: customTheme.aliasColors.success['500'],
                ...customTheme.aliasColors.success,
            },
            surface: {
                // sidebar: customTheme.mappedColors.surface.sidebar(mode),
                page: customTheme.mappedColors.surface.page(mode),
                primary: customTheme.mappedColors.surface.primary(mode),
                secondary: customTheme.mappedColors.surface.secondary(mode),
                info: customTheme.mappedColors.surface.info(mode),
                warning: customTheme.mappedColors.surface.warning(mode),
                error: customTheme.mappedColors.surface.error(mode),
                success: customTheme.mappedColors.surface.success(mode),
            },
            // shade: {
            //     50: customTheme.mappedColors.shade[50](mode),
            //     100: customTheme.mappedColors.shade[100](mode),
            //     200: customTheme.mappedColors.shade[200](mode),
            //     300: customTheme.mappedColors.shade[300](mode),
            //     400: customTheme.mappedColors.shade[400](mode),
            //     500: customTheme.mappedColors.shade[500](mode),
            //     600: customTheme.mappedColors.shade[600](mode),
            //     700: customTheme.mappedColors.shade[700](mode),
            //     800: customTheme.mappedColors.shade[800](mode),
            //     900: customTheme.mappedColors.shade[900](mode),
            //     950: customTheme.mappedColors.shade[950](mode)
            // },
            shadow: {
                10: customTheme.mappedColors.shadow[10](mode),
                20: customTheme.mappedColors.shadow[20](mode),
            },
            textActive: customTheme.textIconography[mode].active,
            textInactive: customTheme.textIconography[mode].inactive,
            textDisabled: customTheme.textIconography[mode].disabled,
            textPrimary: {
                active: customTheme.mappedColors.textPrimary.active(mode),
                inactive: customTheme.mappedColors.textPrimary.inactive(mode),
                disabled: customTheme.mappedColors.textPrimary.disabled(mode),
            },
            textSecondary: {
                active: customTheme.mappedColors.textSecondary.active(mode),
                inactive: customTheme.mappedColors.textSecondary.inactive(mode),
                disabled: customTheme.mappedColors.textSecondary.disabled(mode),
            },
            textInfo: {
                active: customTheme.mappedColors.textInfo.active(mode),
                inactive: customTheme.mappedColors.textInfo.inactive(mode),
                disabled: customTheme.mappedColors.textInfo.disabled(mode),
            },
            textWarning: {
                active: customTheme.mappedColors.textWarning.active(mode),
                inactive: customTheme.mappedColors.textWarning.inactive(mode),
                disabled: customTheme.mappedColors.textWarning.disabled(mode),
            },
            textError: {
                active: customTheme.mappedColors.textError.active(mode),
                inactive: customTheme.mappedColors.textError.inactive(mode),
                disabled: customTheme.mappedColors.textError.disabled(mode),
            },
            textSuccess: {
                active: customTheme.mappedColors.textSuccess.active(mode),
                inactive: customTheme.mappedColors.textSuccess.inactive(mode),
                disabled: customTheme.mappedColors.textSuccess.disabled(mode),
            },
            border: {
                page: customTheme.mappedColors.border.page(mode),
                primary: customTheme.mappedColors.border.primary(mode),
                secondary: customTheme.mappedColors.border.secondary(mode),
                info: customTheme.mappedColors.border.info(mode),
                warning: customTheme.mappedColors.border.warning(mode),
                error: customTheme.mappedColors.border.error(mode),
                success: customTheme.mappedColors.border.success(mode),
                disabled: customTheme.mappedColors.border.disabled(mode),
            },
            actions: {
                primary: {
                    textMain: customTheme.mappedColors.action.primary.textMain(mode),
                    textHover: customTheme.mappedColors.action.primary.textHover(mode),
                    textPressed:
                        customTheme.mappedColors.action.primary.textPressed(mode),
                    textDisabled:
                        customTheme.mappedColors.action.primary.textDisabled(mode),
                    textFocused:
                        customTheme.mappedColors.action.primary.textFocused(mode),
                },
                secondary: {
                    textMain: customTheme.mappedColors.action.secondary.textMain(mode),
                    textHover: customTheme.mappedColors.action.secondary.textHover(mode),
                    textPressed:
                        customTheme.mappedColors.action.secondary.textPressed(mode),
                    textDisabled:
                        customTheme.mappedColors.action.secondary.textDisabled(mode),
                    textFocused:
                        customTheme.mappedColors.action.secondary.textFocused(mode),
                },
                info: {
                    textMain: customTheme.mappedColors.action.info.textMain(mode),
                    textHover: customTheme.mappedColors.action.info.textHover(mode),
                    textPressed: customTheme.mappedColors.action.info.textPressed(mode),
                    textDisabled: customTheme.mappedColors.action.info.textDisabled(mode),
                    textFocused: customTheme.mappedColors.action.info.textFocused(mode),
                },
                warning: {
                    textMain: customTheme.mappedColors.action.warning.textMain(mode),
                    textHover: customTheme.mappedColors.action.warning.textHover(mode),
                    textPressed:
                        customTheme.mappedColors.action.warning.textPressed(mode),
                    textDisabled:
                        customTheme.mappedColors.action.warning.textDisabled(mode),
                    textFocused:
                        customTheme.mappedColors.action.warning.textFocused(mode),
                },
                error: {
                    textMain: customTheme.mappedColors.action.error.textMain(mode),
                    textHover: customTheme.mappedColors.action.error.textHover(mode),
                    textPressed: customTheme.mappedColors.action.error.textPressed(mode),
                    textDisabled:
                        customTheme.mappedColors.action.error.textDisabled(mode),
                    textFocused: customTheme.mappedColors.action.error.textFocused(mode),
                },
                success: {
                    textMain: customTheme.mappedColors.action.success.textMain(mode),
                    textHover: customTheme.mappedColors.action.success.textHover(mode),
                    textPressed:
                        customTheme.mappedColors.action.success.textPressed(mode),
                    textDisabled:
                        customTheme.mappedColors.action.success.textDisabled(mode),
                    textFocused:
                        customTheme.mappedColors.action.success.textFocused(mode),
                },
            },
        },
        typography: {
            allVariants: {
                color: customTheme.textIconography[mode].active,
                fontWeight: 500,
            },

            fontFamily: font.style.fontFamily,
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,

            /** for the display */
            d1: {
                fontFamily: font.style.fontFamily,
                fontSize: '112px',
                fontStyle: 'normal',
                lineHeight: '124px',
                letterSpacing: '-2%',
            },
            d2: {
                fontFamily: font.style.fontFamily,
                fontSize: '96px',
                fontStyle: 'normal',
                lineHeight: '112px',
                letterSpacing: '-2%',
            },
            d3: {
                fontFamily: font.style.fontFamily,
                fontSize: '84px',
                fontStyle: 'normal',
                lineHeight: '56px',
                letterSpacing: '-2%',
            },
            d4: {
                fontFamily: font.style.fontFamily,
                fontSize: '70px',
                fontStyle: 'normal',
                lineHeight: '44px',
                letterSpacing: '-2%',
            },
            d5: {
                fontFamily: font.style.fontFamily,
                fontSize: '56px',
                fontStyle: 'normal',
                lineHeight: '64px',
                letterSpacing: '-2%',
            },
            d6: {
                fontFamily: font.style.fontFamily,
                fontSize: '45px',
                fontStyle: 'normal',
                lineHeight: '56px',
                letterSpacing: '-2%',
            },
            d7: {
                fontFamily: font.style.fontFamily,
                fontSize: '36px',
                fontStyle: 'normal',
                lineHeight: '44px',
                letterSpacing: '-2%',
            },

            /**for the Fancy display fd*/

            fd1: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '112px',
                fontStyle: 'normal',
                lineHeight: '124px',
                letterSpacing: '1%',
            },
            fd2: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '96px',
                fontStyle: 'normal',
                lineHeight: '112px',
                letterSpacing: '1%',
            },
            fd3: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '84px',
                fontStyle: 'normal',
                lineHeight: '56px',
                letterSpacing: '1%',
            },
            fd4: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '70px',
                fontStyle: 'normal',
                lineHeight: '44px',
                letterSpacing: '1%',
            },
            fd5: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '56px',
                fontStyle: 'normal',
                lineHeight: '64px',
                letterSpacing: '1%',
            },
            fd6: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '45px',
                fontStyle: 'normal',
                lineHeight: '56px',
                letterSpacing: '1%',
            },
            fd7: {
                fontFamily: fontNoma.style.fontFamily,
                fontSize: '36px',
                fontStyle: 'normal',
                lineHeight: '44px',
                letterSpacing: '1%',
            },

            /**for the heading */
            h1: {
                fontFamily: font.style.fontFamily,
                fontSize: '70px',
                fontStyle: 'normal',
                lineHeight: '72px',
                letterSpacing: '-2%',
            },
            h2: {
                fontFamily: font.style.fontFamily,
                fontSize: '48px',
                fontStyle: 'normal',
                lineHeight: '56px',
                letterSpacing: '-2%',
            },
            h3: {
                fontFamily: font.style.fontFamily,
                fontSize: '40px',
                fontStyle: 'normal',
                lineHeight: '48px',
                letterSpacing: '-2%',
            },
            h4: {
                fontFamily: font.style.fontFamily,
                fontSize: '32px',
                fontStyle: 'normal',
                lineHeight: '40px',
                letterSpacing: '-2%',
            },
            h5: {
                fontFamily: font.style.fontFamily,
                fontSize: '24px',
                fontStyle: 'normal',
                lineHeight: '32px',
                letterSpacing: '-2%',
            },
            h6: {
                fontFamily: font.style.fontFamily,
                fontSize: '20px',
                fontStyle: 'normal',
                lineHeight: '24px',
                letterSpacing: '-2%',
            },

            /** for the fancy heading */

            fh1: {
                fontSize: '70px',
                fontStyle: 'normal',
                lineHeight: '72px',
                letterSpacing: '2%',
                fontFamily: fontNoma.style.fontFamily,
            },
            fh2: {
                fontSize: '48px',
                fontStyle: 'normal',
                lineHeight: '56px',
                letterSpacing: '2%',
                fontFamily: fontNoma.style.fontFamily,
            },
            fh3: {
                fontSize: '40px',
                fontStyle: 'normal',
                lineHeight: '48px',
                letterSpacing: '2%',
                fontFamily: fontNoma.style.fontFamily,
            },
            fh4: {
                fontSize: '32px',
                fontStyle: 'normal',
                lineHeight: '40px',
                letterSpacing: '2%',
                fontFamily: fontNoma.style.fontFamily,
            },
            fh5: {
                fontSize: '24px',
                fontStyle: 'normal',
                lineHeight: '32px',
                letterSpacing: '2%',
                fontFamily: fontNoma.style.fontFamily,
            },
            fh6: {
                fontSize: '20px',
                fontStyle: 'normal',
                lineHeight: '24px',
                letterSpacing: '2%',
                fontFamily: fontNoma.style.fontFamily,
            },

            /** for the paragraph*/
            p1: {
                fontFamily: font.style.fontFamily,
                fontSize: '20px',
                fontStyle: 'normal',
                lineHeight: '28px',
            },
            p2: {
                fontFamily: font.style.fontFamily,
                fontSize: '18px',
                fontStyle: 'normal',
                lineHeight: '24px',
            },
            p3: {
                fontFamily: font.style.fontFamily,
                fontSize: '14px',
                fontStyle: 'normal',
                lineHeight: '20px',
            },
            p4: {
                fontFamily: font.style.fontFamily,
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: '16px',
            },

            /** for the label  */

            l1: {
                fontSize: '16px',
                lineHeight: '24px',
                fontStyle: 'normal',
                fontFamily: font.style.fontFamily,
            },

            l2: {
                fontFamily: font.style.fontFamily,
                fontSize: '14px',
                fontStyle: 'normal',
                lineHeight: '20px',
            },

            l3: {
                fontFamily: font.style.fontFamily,
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: '16px',
            },

            l4: {
                fontFamily: font.style.fontFamily,
                fontSize: '10px',
                fontStyle: 'normal',
                lineHeight: '14px',
            },

            /**for the overline */
            overlineLarge: {
                fontFamily: font.style.fontFamily,
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
                fontVariant: 'all-small-caps',
                letterSpacing: '0.14px',
            },
            overlineSmall: {
                fontFamily: font.style.fontFamily,
                fontSize: '12px',
                fontWeight: '500',
                lineHeight: '16px',
                fontVariant: 'all-small-caps',
                letterSpacing: '0.12px',
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'text',
                    color: 'primary',
                    size: 'medium',
                },
                styleOverrides: {
                    root: {
                        backgroundColor: customTheme.mappedColors.action.primary.main(mode),
                        color: customTheme.mappedColors.action.primary.textMain(mode),
                        fontSize: '16px',
                        lineHeight: '24px',
                        textTransform: 'none',
                        fontWeight: 400,
                        borderRadius: '4px',
                        boxShadow: 'none',

                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.hover(mode),
                            color: customTheme.mappedColors.action.primary.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.pressed(mode),
                            color: customTheme.mappedColors.action.primary.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.disabled(mode),
                            color: customTheme.mappedColors.action.primary.textDisabled(mode),
                        },
                    },

                    // for the size variant
                    sizeSmall: {
                        fontSize: '0.75rem',
                        lineHeight: '16px',
                        padding: '8px 12px',
                        width: '135px',
                        height: '32px',
                    },
                    sizeMedium: {
                        fontSize: '14px',
                        lineHeight: '20px',
                        padding: '10px 16px',
                        width: '162px',
                        height: '40px',
                    },
                    sizeLarge: {
                        fontSize: '16px',
                        lineHeight: '24px',
                        padding: '12px 20px',
                        width: '188px',
                        height: '48px',
                    },

                    // contained variants
                    containedPrimary: {
                        backgroundColor: customTheme.mappedColors.action.primary.main(mode),
                        color: customTheme.mappedColors.action.primary.textMain(mode),
                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.hover(mode),
                            color: customTheme.mappedColors.action.primary.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.pressed(mode),
                            color: customTheme.mappedColors.action.primary.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.disabled(mode),
                            color: customTheme.mappedColors.action.primary.textDisabled(mode),
                        },
                    },
                    containedSecondary: {
                        backgroundColor:
                            customTheme.mappedColors.action.secondary.main(mode),
                        color: customTheme.mappedColors.action.secondary.textMain(mode),
                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.secondary.hover(mode),
                            color: customTheme.mappedColors.action.secondary.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.secondary.pressed(mode),
                            color:
                                customTheme.mappedColors.action.secondary.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.secondary.disabled(mode),
                            color:
                                customTheme.mappedColors.action.secondary.textDisabled(mode),
                        },
                    },
                    containedInfo: {
                        backgroundColor: customTheme.mappedColors.action.info.main(mode),
                        color: customTheme.mappedColors.action.info.textMain(mode),
                        '&:hover': {
                            backgroundColor: customTheme.mappedColors.action.info.hover(mode),
                            color: customTheme.mappedColors.action.info.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.info.pressed(mode),
                            color: customTheme.mappedColors.action.info.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.info.disabled(mode),
                            color: customTheme.mappedColors.action.info.textDisabled(mode),
                        },
                    },
                    containedWarning: {
                        backgroundColor: customTheme.mappedColors.action.warning.main(mode),
                        color: customTheme.mappedColors.action.warning.textMain(mode),
                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.warning.hover(mode),
                            color: customTheme.mappedColors.action.warning.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.warning.pressed(mode),
                            color: customTheme.mappedColors.action.warning.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.warning.disabled(mode),
                            color: customTheme.mappedColors.action.warning.textDisabled(mode),
                        },
                    },
                    containedError: {
                        backgroundColor: customTheme.mappedColors.action.error.main(mode),
                        color: customTheme.mappedColors.action.error.textMain(mode),
                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.error.hover(mode),
                            color: customTheme.mappedColors.action.error.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.error.pressed(mode),
                            color: customTheme.mappedColors.action.error.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.error.disabled(mode),
                            color: customTheme.mappedColors.action.error.textDisabled(mode),
                        },
                    },
                    containedSuccess: {
                        backgroundColor: customTheme.mappedColors.action.success.main(mode),
                        color: customTheme.mappedColors.action.success.textMain(mode),
                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.success.hover(mode),
                            color: customTheme.mappedColors.action.success.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.success.pressed(mode),
                            color: customTheme.mappedColors.action.success.textPressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor:
                                customTheme.mappedColors.action.success.disabled(mode),
                            color: customTheme.mappedColors.action.success.textDisabled(mode),
                        },
                    },

                    // for the outlined variants
                    outlinedPrimary: {
                        backgroundColor: 'transparent',
                        borderColor: customTheme.mappedColors.action.primary.main(mode),
                        color: customTheme.mappedColors.action.primary.main(mode),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.primary.hover(mode),
                            color: customTheme.mappedColors.action.primary.hover(mode),
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.primary.pressed(mode),
                            color: customTheme.mappedColors.action.primary.pressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.primary.disabled(mode),
                            color: customTheme.mappedColors.action.primary.disabled(mode),
                        },
                    },
                    outlinedSecondary: {
                        backgroundColor: 'transparent',
                        borderColor: customTheme.mappedColors.action.secondary.main(mode),
                        color: customTheme.mappedColors.action.secondary.main(mode),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.secondary.hover(mode),
                            color: customTheme.mappedColors.action.secondary.hover(mode),
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.secondary.pressed(mode),
                            color: customTheme.mappedColors.action.secondary.pressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.secondary.disabled(mode),
                            color: customTheme.mappedColors.action.secondary.disabled(mode),
                        },
                    },
                    outlinedInfo: {
                        backgroundColor: 'transparent',
                        borderColor: customTheme.mappedColors.action.info.main(mode),
                        color: customTheme.mappedColors.action.info.main(mode),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.info.hover(mode),
                            color: customTheme.mappedColors.action.info.hover(mode),
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.info.pressed(mode),
                            color: customTheme.mappedColors.action.info.pressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.info.disabled(mode),
                            color: customTheme.mappedColors.action.info.disabled(mode),
                        },
                    },
                    outlinedWarning: {
                        backgroundColor: 'transparent',
                        borderColor: customTheme.mappedColors.action.warning.main(mode),
                        color: customTheme.mappedColors.action.warning.main(mode),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.warning.hover(mode),
                            color: customTheme.mappedColors.action.warning.hover(mode),
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.warning.pressed(mode),
                            color: customTheme.mappedColors.action.warning.pressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.warning.disabled(mode),
                            color: customTheme.mappedColors.action.warning.disabled(mode),
                        },
                    },
                    outlinedError: {
                        backgroundColor: 'transparent',
                        borderColor: customTheme.mappedColors.action.error.main(mode),
                        color: customTheme.mappedColors.action.error.main(mode),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.error.hover(mode),
                            color: customTheme.mappedColors.action.error.hover(mode),
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.error.pressed(mode),
                            color: customTheme.mappedColors.action.error.pressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.error.disabled(mode),
                            color: customTheme.mappedColors.action.error.disabled(mode),
                        },
                    },
                    outlinedSuccess: {
                        backgroundColor: 'transparent',
                        borderColor: customTheme.mappedColors.action.success.main(mode),
                        color: customTheme.mappedColors.action.success.main(mode),
                        '&:hover': {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.success.hover(mode),
                            color: customTheme.mappedColors.action.success.hover(mode),
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.success.pressed(mode),
                            color: customTheme.mappedColors.action.success.pressed(mode),
                        },
                        '&:disabled': {
                            backgroundColor: 'transparent',
                            borderColor:
                                customTheme.mappedColors.action.success.disabled(mode),
                            color: customTheme.mappedColors.action.success.disabled(mode),
                        },
                    },
                },
            },
            MuiChip: {
                defaultProps: {
                    variant: 'outlined',
                    color: 'primary',
                    size: 'medium',
                },
                styleOverrides: {
                    root: {
                        backgroundColor: customTheme.mappedColors.action.primary.main(mode),
                        color: customTheme.textIconography.dark.active,
                        fontSize: '14px',
                        lineHeight: '20px',
                        textTransform: 'none',
                        fontFamily: font.style.fontFamily,
                        fontWeight: 500,
                        borderRadius: '6px',

                        '&:hover': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.hover(mode),
                            color: customTheme.mappedColors.action.primary.textHover(mode),
                        },
                        '&:active': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.pressed(mode),
                            color: customTheme.mappedColors.action.primary.textPressed(mode),
                        },
                        '&.Mui-disabled': {
                            opacity: '100',
                            backgroundColor:
                                customTheme.mappedColors.action.primary.disabled(mode),
                            color: customTheme.mappedColors.action.primary.textDisabled(mode),
                        },
                        '& .MuiChip-icon': {
                            width: '18px',
                            height: '20px',
                            color: customTheme.mappedColors.action.primary.textMain(mode),
                        },

                        '& .MuiChip-deleteIcon': {
                            width: '18px',
                            height: '20px',
                            color: customTheme.mappedColors.action.primary.textMain(mode),
                            '&:hover': {
                                color: customTheme.mappedColors.action.primary.textHover(mode),
                            },
                        },

                        '& .MuiBadge-badge': {
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '20px',
                            height: '20px',
                            padding: '2px 6px',
                            borderRadius: '4px !important',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                        },

                        '& .MuiChip-endIcon': {
                            width: '48px',
                            height: '20px',
                            color: customTheme.mappedColors.action.primary.textMain(mode),
                            '&:hover': {
                                color: customTheme.mappedColors.action.primary.textHover(mode),
                            },
                        },
                    },
                },
                variants: [
                    // for the chip size variants
                    {
                        props: { size: 'small' },
                        style: {
                            fontSize: '0.75rem',
                            lineHeight: '1rem',
                            padding: '8px 12px',
                        },
                    },
                    {
                        props: { size: 'medium' },
                        style: {
                            fontSize: '0.875rem',
                            lineHeight: '1.25rem',
                            padding: '10px 16px',
                        },
                    },
                    {
                        props: { size: 'large' },
                        style: {
                            fontSize: '1rem',
                            lineHeight: '1.5rem',
                            padding: '12px 20px',
                        },
                    },

                    // for the shape variants
                    {
                        props: { shape: 'pill' },
                        style: {
                            borderRadius: '16px',
                        },
                    },
                    {
                        props: { shape: 'rounded' },
                        style: {
                            borderRadius: '4px',
                        },
                    },

                    // for the variant = filled and all colors

                    {
                        props: { variant: 'filled' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.textMain(mode),
                            borderColor: customTheme.mappedColors.border.primary(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor: 'white ! important',
                                color:
                                    customTheme.mappedColors.action.primary.main(mode) +
                                    '! important',
                                '&:hover': {
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                                '&:active': {
                                    color: customTheme.mappedColors.action.primary.pressed(mode),
                                },
                                '&:disabled': {
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.primary.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'filled', color: 'primary' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.textMain(mode),
                            // borderColor: customTheme.mappedColors.border.primary(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor: 'white ! important',
                                color:
                                    customTheme.mappedColors.action.primary.main(mode) +
                                    '! important',
                                '&:hover': {
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                                '&:active': {
                                    color: customTheme.mappedColors.action.primary.pressed(mode),
                                },
                                '&:disabled': {
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.primary.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'secondary' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.secondary.main(mode),
                            color: customTheme.mappedColors.action.secondary.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.hover(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.secondary.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.secondary.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.secondary.textHover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor: 'white',
                                color:
                                    customTheme.mappedColors.action.secondary.main(mode) +
                                    '! important',
                                '&:hover': {
                                    color: customTheme.mappedColors.action.secondary.hover(mode),
                                },
                                '&:active': {
                                    color:
                                        customTheme.mappedColors.action.secondary.pressed(mode),
                                },
                                '&:disabled': {
                                    color:
                                        customTheme.mappedColors.action.secondary.disabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color:
                                        customTheme.mappedColors.action.secondary.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.secondary.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.secondary.textHover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'info' },
                        style: {
                            backgroundColor: customTheme.mappedColors.action.info.main(mode),
                            color: customTheme.mappedColors.action.info.textMain(mode),
                            borderColor: customTheme.mappedColors.border.info(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.hover(mode),
                                color: customTheme.mappedColors.action.info.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.pressed(mode),
                                color: customTheme.mappedColors.action.info.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.info.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.info.textMain(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.info.textHover(mode),
                                },
                            },

                            // "& .MuiBadge-badge": {
                            //     backgroundColor: "white ! important",
                            //     color: customTheme.mappedColors.action.info.main(mode) + "! important",
                            //     '&:hover': {
                            //         color: customTheme.mappedColors.action.info.hover(mode)
                            //     },
                            //     '&:active': {
                            //         color: customTheme.mappedColors.action.info.pressed(mode)
                            //     },
                            //     '&:disabled': {
                            //         color: customTheme.mappedColors.action.info.disabled(mode)
                            //     },
                            // },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.info.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.info.textMain(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.info.textHover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'success' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.success.main(mode),
                            color: customTheme.mappedColors.action.success.textMain(mode),
                            borderColor: customTheme.mappedColors.border.success(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.hover(mode),
                                color: customTheme.mappedColors.action.success.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.success.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.success.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.success.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.success.textHover(mode),
                                },
                            },

                            // "& .MuiBadge-badge": {
                            //     backgroundColor: "white ! important",
                            //     color: customTheme.mappedColors.action.success.main(mode) + "! important",
                            //     '&:hover': {
                            //         color: customTheme.mappedColors.action.success.hover(mode)
                            //     },
                            //     '&:active': {
                            //         color: customTheme.mappedColors.action.success.pressed(mode)
                            //     },
                            //     '&:disabled': {
                            //         color: customTheme.mappedColors.action.success.disabled(mode)
                            //     },
                            // },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.success.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.success.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.success.textHover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'error' },
                        style: {
                            backgroundColor: customTheme.mappedColors.action.error.main(mode),
                            color: customTheme.mappedColors.action.error.textMain(mode),
                            borderColor: customTheme.mappedColors.border.error(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.hover(mode),
                                color: customTheme.mappedColors.action.error.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.pressed(mode),
                                color: customTheme.mappedColors.action.error.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.error.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.error.textMain(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.error.textHover(mode),
                                },
                            },

                            // "& .MuiBadge-badge": {
                            //     backgroundColor: "white ! important",
                            //     color: customTheme.mappedColors.action.error.main(mode) + "! important",
                            //     '&:hover': {
                            //         color: customTheme.mappedColors.action.error.hover(mode)
                            //     },
                            //     '&:active': {
                            //         color: customTheme.mappedColors.action.error.pressed(mode)
                            //     },
                            //     '&:disabled': {
                            //         color: customTheme.mappedColors.action.error.disabled(mode)
                            //     },
                            // },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.error.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.error.textMain(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.error.textHover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'warning' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.warning.main(mode),
                            color: customTheme.mappedColors.action.warning.textMain(mode),
                            borderColor: customTheme.mappedColors.border.warning(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.hover(mode),
                                color: customTheme.mappedColors.action.warning.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.warning.textPressed(mode),
                            },
                            '&.Mui-disabled': {
                                opacity: '100',
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.warning.textMain(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.warning.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.warning.textHover(mode),
                                },
                            },

                            // "& .MuiBadge-badge": {
                            //     backgroundColor: "white ! important",
                            //     color: customTheme.mappedColors.action.warning.main(mode) + "! important",
                            //     '&:hover': {
                            //         color: customTheme.mappedColors.action.warning.hover(mode)
                            //     },
                            //     '&:active': {
                            //         color: customTheme.mappedColors.action.warning.pressed(mode)
                            //     },
                            //     '&:disabled': {
                            //         color: customTheme.mappedColors.action.warning.disabled(mode)
                            //     },
                            // },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.warning.textMain(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.warning.textMain(mode),
                                '&:hover': {
                                    color:
                                        customTheme.mappedColors.action.warning.textHover(mode),
                                },
                            },
                        },
                    },

                    // for the variant = outlined and all colors

                    {
                        props: { variant: 'outlined' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color: customTheme.mappedColors.action.primary.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.primary.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textDisabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.primary.main(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'primary' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color: customTheme.mappedColors.action.primary.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.primary.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textDisabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.primary.main(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.primary.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'secondary' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.secondary.main(mode),
                            color: customTheme.mappedColors.action.secondary.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.secondary.hover(mode),
                                color: customTheme.mappedColors.action.secondary.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.secondary.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.secondary.pressed(mode),
                                color: customTheme.mappedColors.action.secondary.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color:
                                        customTheme.mappedColors.action.secondary.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.secondary.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.secondary.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.secondary.hover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.secondary.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.secondary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.secondary.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.secondary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.secondary.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.secondary.main(mode),
                                    color:
                                        customTheme.mappedColors.action.secondary.textDisabled(
                                            mode
                                        ),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.secondary.main(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.secondary.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.secondary.hover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'info' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.info.main(mode),
                            color: customTheme.mappedColors.action.info.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor: customTheme.mappedColors.action.info.hover(mode),
                                color: customTheme.mappedColors.action.info.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.info.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor: customTheme.mappedColors.action.info.pressed(mode),
                                color: customTheme.mappedColors.action.info.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.info.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.info.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.info.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.info.hover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.info.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.info.main(mode),
                                    color: customTheme.mappedColors.action.info.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.info.main(mode),
                                    color: customTheme.mappedColors.action.info.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.info.main(mode),
                                    color:
                                        customTheme.mappedColors.action.info.textDisabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.info.main(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.info.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.info.hover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'success' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.success.main(mode),
                            color: customTheme.mappedColors.action.success.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.success.hover(mode),
                                color: customTheme.mappedColors.action.success.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.success.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.success.pressed(mode),
                                color: customTheme.mappedColors.action.success.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.success.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.success.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.success.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.success.hover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.success.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.success.main(mode),
                                    color:
                                        customTheme.mappedColors.action.success.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.success.main(mode),
                                    color:
                                        customTheme.mappedColors.action.success.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.success.main(mode),
                                    color:
                                        customTheme.mappedColors.action.success.textDisabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.success.main(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.success.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.success.hover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'error' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.error.main(mode),
                            color: customTheme.mappedColors.action.error.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor: customTheme.mappedColors.action.error.hover(mode),
                                color: customTheme.mappedColors.action.error.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.error.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.error.pressed(mode),
                                color: customTheme.mappedColors.action.error.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.error.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.error.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.error.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.error.hover(mode),
                                },
                            },

                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.error.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.error.main(mode),
                                    color: customTheme.mappedColors.action.error.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.error.main(mode),
                                    color:
                                        customTheme.mappedColors.action.error.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.error.main(mode),
                                    color:
                                        customTheme.mappedColors.action.error.textDisabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.error.main(mode),
                                },
                            },

                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.error.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.error.hover(mode),
                                },
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'warning' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.warning.main(mode),
                            color: customTheme.mappedColors.action.warning.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.warning.hover(mode),
                                color: customTheme.mappedColors.action.warning.hover(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.warning.hover(mode),
                                },
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.warning.pressed(mode),
                                color: customTheme.mappedColors.action.warning.pressed(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.warning.pressed(mode),
                                },
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                                '& .MuiChip-icon': {
                                    width: '18px',
                                    height: '20px',
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },

                            '& .MuiChip-icon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.warning.main(mode),
                            },

                            '& .MuiChip-deleteIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.warning.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.warning.hover(mode),
                                },
                            },
                            '& .MuiBadge-badge': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.main(mode) +
                                    '! important',
                                color:
                                    customTheme.mappedColors.action.warning.textMain(mode) +
                                    '! important',
                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.warning.main(mode),
                                    color:
                                        customTheme.mappedColors.action.warning.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.warning.main(mode),
                                    color:
                                        customTheme.mappedColors.action.warning.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.warning.main(mode),
                                    color:
                                        customTheme.mappedColors.action.warning.textDisabled(mode),
                                },
                            },

                            '&.MuiChip-deletable': {
                                '& .MuiChip-label': {
                                    color: customTheme.mappedColors.action.warning.main(mode),
                                },
                            },
                            '& .MuiChip-endIcon': {
                                width: '18px',
                                height: '20px',
                                color: customTheme.mappedColors.action.warning.main(mode),
                                '&:hover': {
                                    color: customTheme.mappedColors.action.warning.hover(mode),
                                },
                            },
                        },
                    },
                ],
            },
            MuiBadge: {
                defaultProps: {
                    variant: 'filled',
                    color: 'primary',
                    size: 'medium',

                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                },
                styleOverrides: {
                    root: {
                        color: customTheme.mappedColors.action.primary.main(mode),

                        '& .MuiBadge-badge': {
                            borderRadius: '999px',
                        },
                    },

                    // for the badge color
                    colorPrimary: {
                        '&.MuiBadge-badge': {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.textMain(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },
                        },
                    },
                    colorSecondary: {
                        '&.MuiBadge-badge': {
                            backgroundColor:
                                customTheme.mappedColors.action.secondary.main(mode),
                            color: customTheme.mappedColors.action.secondary.textMain(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.hover(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textDisabled(mode),
                            },
                        },
                    },
                    colorInfo: {
                        '&.MuiBadge-badge': {
                            backgroundColor: customTheme.mappedColors.action.info.main(mode),
                            color: customTheme.mappedColors.action.info.textMain(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.hover(mode),
                                color: customTheme.mappedColors.action.info.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.pressed(mode),
                                color: customTheme.mappedColors.action.info.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.disabled(mode),
                                color: customTheme.mappedColors.action.info.textDisabled(mode),
                            },
                        },
                    },
                    colorWarning: {
                        '&.MuiBadge-badge': {
                            backgroundColor:
                                customTheme.mappedColors.action.warning.main(mode),
                            color: customTheme.mappedColors.action.warning.textMain(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.hover(mode),
                                color: customTheme.mappedColors.action.warning.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.warning.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.warning.textDisabled(mode),
                            },
                        },
                    },
                    colorError: {
                        '&.MuiBadge-badge': {
                            backgroundColor: customTheme.mappedColors.action.error.main(mode),
                            color: customTheme.mappedColors.action.error.textMain(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.hover(mode),
                                color: customTheme.mappedColors.action.error.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.pressed(mode),
                                color: customTheme.mappedColors.action.error.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.disabled(mode),
                                color: customTheme.mappedColors.action.error.textDisabled(mode),
                            },
                        },
                    },
                    colorSuccess: {
                        '&.MuiBadge-badge': {
                            backgroundColor:
                                customTheme.mappedColors.action.success.main(mode),
                            color: customTheme.mappedColors.action.success.textMain(mode),

                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.hover(mode),
                                color: customTheme.mappedColors.action.success.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.success.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.success.textDisabled(mode),
                            },
                        },
                    },
                },
                variants: [
                    //  for the filled variant
                    {
                        props: { variant: 'filled' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: customTheme.mappedColors.action.primary.textMain(mode),
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 400,
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.main(mode),

                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.hover(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.pressed(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.primary.disabled(mode),
                                    color:
                                        customTheme.mappedColors.action.primary.textDisabled(mode),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'filled', color: 'error' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: customTheme.mappedColors.action.error.textMain(mode),
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 400,
                                backgroundColor:
                                    customTheme.mappedColors.action.error.main(mode),

                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.error.hover(mode),
                                    color: customTheme.mappedColors.action.error.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.error.pressed(mode),
                                    color:
                                        customTheme.mappedColors.action.error.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.error.disabled(mode),
                                    color:
                                        customTheme.mappedColors.action.error.textDisabled(mode),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'filled', color: 'success' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: customTheme.mappedColors.action.success.textMain(mode),
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 400,
                                backgroundColor:
                                    customTheme.mappedColors.action.success.main(mode),

                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.success.hover(mode),
                                    color:
                                        customTheme.mappedColors.action.success.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.success.pressed(mode),
                                    color:
                                        customTheme.mappedColors.action.success.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.success.disabled(mode),
                                    color:
                                        customTheme.mappedColors.action.success.textDisabled(mode),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'filled', color: 'secondary' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: customTheme.mappedColors.action.secondary.textMain(mode),
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 400,
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.main(mode),

                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.secondary.hover(mode),
                                    color:
                                        customTheme.mappedColors.action.secondary.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.secondary.pressed(mode),
                                    color:
                                        customTheme.mappedColors.action.secondary.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.secondary.disabled(mode),
                                    color:
                                        customTheme.mappedColors.action.secondary.textDisabled(
                                            mode
                                        ),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'filled', color: 'warning' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: customTheme.mappedColors.action.warning.textMain(mode),
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 400,
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.main(mode),

                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.warning.hover(mode),
                                    color:
                                        customTheme.mappedColors.action.warning.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.warning.pressed(mode),
                                    color:
                                        customTheme.mappedColors.action.warning.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.warning.disabled(mode),
                                    color:
                                        customTheme.mappedColors.action.warning.textDisabled(mode),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'filled', color: 'info' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: customTheme.mappedColors.action.info.textMain(mode),
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: 400,
                                backgroundColor:
                                    customTheme.mappedColors.action.info.main(mode),

                                '&:hover': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.info.hover(mode),
                                    color: customTheme.mappedColors.action.info.textHover(mode),
                                },
                                '&:active': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.info.pressed(mode),
                                    color: customTheme.mappedColors.action.info.textPressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor:
                                        customTheme.mappedColors.action.info.disabled(mode),
                                    color:
                                        customTheme.mappedColors.action.info.textDisabled(mode),
                                },
                            },
                        },
                    },

                    // for the outlined variant
                    {
                        props: { variant: 'outline' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.primary.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent !important',
                                border: `1px solid ${customTheme.mappedColors.action.primary.main(
                                    mode
                                )}`,
                                fontSize: '14px',
                                lineHeight: '20px',
                                fontWeight: 600,

                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    borderColor:
                                        customTheme.mappedColors.action.primary.hover(mode),
                                    color: customTheme.mappedColors.action.primary.hover(mode),
                                },
                                '&:active': {
                                    backgroundColor: 'transparent',
                                    borderColor:
                                        customTheme.mappedColors.action.primary.pressed(mode),
                                    color: customTheme.mappedColors.action.primary.pressed(mode),
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent',
                                    borderColor:
                                        customTheme.mappedColors.action.primary.disabled(mode),
                                    color: customTheme.mappedColors.action.primary.disabled(mode),
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'outline', color: 'primary' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.primary.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.primary.main(
                                    mode
                                )} ! important`,

                                '&:hover': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.primary.hover(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.primary.hover(
                                        mode
                                    )} ! important`,
                                },
                                '&:active': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.primary.pressed(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.primary.pressed(
                                        mode
                                    )} ! important`,
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.primary.disabled(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.primary.disabled(
                                        mode
                                    )} ! important`,
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'outline', color: 'error' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.error.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.error.main(
                                    mode
                                )} ! important`,

                                '&:hover': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.error.hover(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.error.hover(
                                        mode
                                    )} ! important`,
                                },
                                '&:active': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.error.pressed(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.error.pressed(
                                        mode
                                    )} ! important`,
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.error.disabled(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.error.disabled(
                                        mode
                                    )} ! important`,
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'outline', color: 'warning' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.warning.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.warning.main(
                                    mode
                                )} ! important`,

                                '&:hover': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.warning.hover(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.warning.hover(
                                        mode
                                    )} ! important`,
                                },
                                '&:active': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.warning.pressed(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.warning.pressed(
                                        mode
                                    )} ! important`,
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.warning.disabled(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.warning.disabled(
                                        mode
                                    )} ! important`,
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'outline', color: 'success' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.success.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.success.main(
                                    mode
                                )} ! important`,

                                '&:hover': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.success.hover(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.success.hover(
                                        mode
                                    )} ! important`,
                                },
                                '&:active': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.success.pressed(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.success.pressed(
                                        mode
                                    )} ! important`,
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.success.disabled(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.success.disabled(
                                        mode
                                    )} ! important`,
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'outline', color: 'info' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.info.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.info.main(
                                    mode
                                )} ! important`,

                                '&:hover': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.info.hover(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.info.hover(
                                        mode
                                    )} ! important`,
                                },
                                '&:active': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.info.pressed(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.info.pressed(
                                        mode
                                    )} ! important`,
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.info.disabled(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.info.disabled(
                                        mode
                                    )} ! important`,
                                },
                            },
                        },
                    },
                    {
                        props: { variant: 'outline', color: 'secondary' },
                        style: {
                            '& .MuiBadge-badge': {
                                color: `${customTheme.mappedColors.action.secondary.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.secondary.main(
                                    mode
                                )} ! important`,

                                '&:hover': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.secondary.hover(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.secondary.hover(
                                        mode
                                    )} ! important`,
                                },
                                '&:active': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.secondary.pressed(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.secondary.pressed(
                                        mode
                                    )} ! important`,
                                },
                                '&:disabled': {
                                    backgroundColor: 'transparent ! important',
                                    borderColor: `${customTheme.mappedColors.action.secondary.disabled(
                                        mode
                                    )} ! important`,
                                    color: `${customTheme.mappedColors.action.secondary.disabled(
                                        mode
                                    )} ! important`,
                                },
                            },
                        },
                    },

                    // size small
                    {
                        props: { size: 'small' },
                        style: {
                            '& .MuiBadge-badge': {
                                height: '20px',
                                minWidth: '20px',
                                padding: '2px 6px',
                                fontSize: '10px',
                            },
                        },
                    },

                    // size medium
                    {
                        props: { size: 'medium' },
                        style: {
                            '& .MuiBadge-badge': {
                                fontSize: '12px',
                                height: '24px',
                                minWidth: '10px',
                                padding: '5px 8px',
                            },
                        },
                    },

                    // size large
                    {
                        props: { size: 'large' },
                        style: {
                            '& .MuiBadge-badge': {
                                fontSize: '15px',
                                height: '32px',
                                minWidth: '32px',
                                padding: '2px 6px',
                                top: '-8px',
                            },
                        },
                    },

                    {
                        props: { variant: 'dot' },
                        style: {
                            '& .MuiBadge-dot': {
                                height: '2px',
                                width: '2px',
                                minWidth: '2px ! important',
                                padding: '2px',
                                left: '12px',
                            },
                        },
                    },
                ],
            },
            MuiBottomNavigationAction: {
                styleOverrides: {
                    root: {
                        padding: '8px',
                        color: customTheme.mappedColors.text.inactive(mode),
                        borderRadius: '9px',
                        transform: 'none',

                        '&:hover': {
                            color: customTheme.mappedColors.action.primary.main(mode),
                            '& .MuiBottomNavigationAction-label': {
                                color: `${customTheme.mappedColors.action.primary.main(
                                    mode
                                )} ! important`,
                            },
                        },

                        '&:disabled': {
                            color: customTheme.mappedColors.action.primary.disabled(mode),
                            '& .MuiBottomNavigationAction-label': {
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                            },
                        },

                        // "& .MuiBottomNavigationAction-label": {
                        //     fontSize: "12px",
                        //     color: customTheme.mappedColors.text.inactive(mode),
                        //     fontWeight: 600
                        // },

                        // "&.Mui-selected": {
                        //     fontSize: "12px",
                        //     color: `${customTheme.mappedColors.action.primary.textMain(mode)} ! important`,
                        //     backgroundColor: `${customTheme.mappedColors.action.primary.main(mode)} ! important`,
                        //     "& .MuiBottomNavigationAction-label": {
                        //         color: customTheme.mappedColors.action.primary.textMain(mode),
                        //     },

                        //     '&:hover': {
                        //         "& .MuiBottomNavigationAction-label": {
                        //             color: `${customTheme.mappedColors.action.primary.textMain(mode)} ! important`,
                        //         },
                        //     },
                        // }

                        '& .MuiBottomNavigationAction-label': {
                            fontSize: '12px',
                            color: customTheme.mappedColors.text.inactive(mode),
                            fontWeight: 600,
                        },

                        '&.Mui-selected': {
                            fontSize: '12px',
                            color: `${customTheme.aliasColors.primary[900]} ! important`,
                            backgroundColor: 'transparent ! important',
                            border: `1px solid ${customTheme.aliasColors.primary[900]} ! important`,
                            '& .MuiBottomNavigationAction-label': {
                                color: customTheme.aliasColors.primary[900],
                            },
                            '&:hover': {
                                '& .MuiBottomNavigationAction-label': {
                                    color: `${customTheme.aliasColors.primary[900]} ! important`,
                                },
                            },
                        },
                    },
                },

                variants: [
                    // {
                    //     props: { variant: "filled" },
                    //     style: {

                    //         "& .MuiBottomNavigationAction-label": {
                    //             fontSize: "12px",
                    //             color: customTheme.mappedColors.text.inactive(mode),
                    //             fontWeight: 600
                    //         },

                    //         "&.Mui-selected": {
                    //             fontSize: "12px",
                    //             color: `${customTheme.mappedColors.action.primary.textMain(mode)} ! important`,
                    //             backgroundColor: `${customTheme.mappedColors.action.primary.main(mode)} ! important`,
                    //             "& .MuiBottomNavigationAction-label": {
                    //                 color: customTheme.mappedColors.action.primary.textMain(mode),
                    //             },

                    //             '&:hover': {
                    //                 "& .MuiBottomNavigationAction-label": {
                    //                     color: `${customTheme.mappedColors.action.primary.textMain(mode)} ! important`,
                    //                 },
                    //             },
                    //         }
                    //     }
                    // },
                    {
                        props: { variant: 'outline' },
                        style: {
                            '& .MuiBottomNavigationAction-label': {
                                fontSize: '12px',
                                color: customTheme.mappedColors.text.inactive(mode),
                                fontWeight: 600,
                            },

                            '&.Mui-selected': {
                                fontSize: '12px',
                                color: `${customTheme.mappedColors.action.primary.main(
                                    mode
                                )} ! important`,
                                backgroundColor: 'transparent ! important',
                                border: `1px solid ${customTheme.mappedColors.action.primary.main(
                                    mode
                                )} ! important`,
                                '& .MuiBottomNavigationAction-label': {
                                    color: customTheme.mappedColors.action.primary.main(mode),
                                },
                                '&:hover': {
                                    '& .MuiBottomNavigationAction-label': {
                                        color: `${customTheme.mappedColors.action.primary.main(
                                            mode
                                        )} ! important`,
                                    },
                                },
                            },
                        },
                    },
                ],
            },
            MuiIconButton: {
                defaultProps: {
                    variant: 'filled',
                    color: 'primary',
                    size: 'medium',
                    shape: 'circle',
                },
                styleOverrides: {
                    root: {
                        border: '1px solid ',
                    },
                },
                variants: [
                    // for the shape circle and rounded
                    {
                        props: { shape: 'circle' },
                        style: {
                            borderRadius: '999px',
                        },
                    },
                    {
                        props: { shape: 'rounded' },
                        style: {
                            borderRadius: '4px',
                        },
                    },

                    /* size xsmall */
                    {
                        props: { size: 'xsmall' },
                        style: {
                            padding: '4px',
                            width: '24px',
                            height: '24px',
                        },
                    },
                    /* size small */
                    {
                        props: { size: 'small' },
                        style: {
                            padding: '6px',
                            width: '32px',
                            height: '32px',
                        },
                    },
                    /* size medium */
                    {
                        props: { size: 'medium' },
                        style: {
                            padding: '8px',
                            width: '40px',
                            height: '40px',
                        },
                    },
                    /* size large */
                    {
                        props: { size: 'large' },
                        style: {
                            padding: '8px',
                            width: '48px',
                            height: '48px',
                        },
                    },

                    /* variant standard color transparent */
                    {
                        props: { variant: 'standard', color: 'transparent' },
                        style: {
                            color: customTheme.textIconography[mode].inactive,
                            backgroundColor: customTheme.mappedColors.surface.error(mode),
                            '&:hover': {
                                color: customTheme.textIconography[mode].active,
                                backgroundColor: 'transparent',
                            },
                            '&:active': {
                                color: customTheme.mappedColors.action.primary.main(mode),
                                backgroundColor: 'transparent',
                            },
                            '&:disabled': {
                                color: customTheme.textIconography[mode].disabled,
                                backgroundColor: 'transparent',
                            },
                        },
                    },

                    /* for the  variant filled and all colors  */
                    {
                        props: { variant: 'filled', color: 'primary' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.primary.textDisabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'secondary' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.secondary.main(mode),
                            color: customTheme.mappedColors.action.secondary.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.hover(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.secondary.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.secondary.textDisabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'info' },
                        style: {
                            backgroundColor: customTheme.mappedColors.action.info.main(mode),
                            color: customTheme.mappedColors.action.info.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.hover(mode),
                                color: customTheme.mappedColors.action.info.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.pressed(mode),
                                color: customTheme.mappedColors.action.info.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.info.disabled(mode),
                                color: customTheme.mappedColors.action.info.textDisabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'warning' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.warning.main(mode),
                            color: customTheme.mappedColors.action.warning.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.hover(mode),
                                color: customTheme.mappedColors.action.warning.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.warning.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.warning.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.warning.textDisabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'error' },
                        style: {
                            backgroundColor: customTheme.mappedColors.action.error.main(mode),
                            color: customTheme.mappedColors.action.error.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.hover(mode),
                                color: customTheme.mappedColors.action.error.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.pressed(mode),
                                color: customTheme.mappedColors.action.error.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.error.disabled(mode),
                                color: customTheme.mappedColors.action.error.textDisabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'filled', color: 'success' },
                        style: {
                            backgroundColor:
                                customTheme.mappedColors.action.success.main(mode),
                            color: customTheme.mappedColors.action.success.textMain(mode),
                            '&:hover': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.hover(mode),
                                color: customTheme.mappedColors.action.success.textHover(mode),
                            },
                            '&:active': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.pressed(mode),
                                color:
                                    customTheme.mappedColors.action.success.textPressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor:
                                    customTheme.mappedColors.action.success.disabled(mode),
                                color:
                                    customTheme.mappedColors.action.success.textDisabled(mode),
                            },
                        },
                    },

                    // for the outlined and all colors
                    {
                        props: { variant: 'outlined', color: 'primary' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.primary.main(mode),
                            color: customTheme.mappedColors.action.primary.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.hover(mode),
                                color: customTheme.mappedColors.action.primary.hover(mode),
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.pressed(mode),
                                color: customTheme.mappedColors.action.primary.pressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.primary.disabled(mode),
                                color: customTheme.mappedColors.action.primary.disabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'secondary' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.secondary.main(mode),
                            color: customTheme.mappedColors.action.secondary.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.secondary.hover(mode),
                                color: customTheme.mappedColors.action.secondary.hover(mode),
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.secondary.pressed(mode),
                                color: customTheme.mappedColors.action.secondary.pressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.secondary.disabled(mode),
                                color: customTheme.mappedColors.action.secondary.disabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'info' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.info.main(mode),
                            color: customTheme.mappedColors.action.info.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor: customTheme.mappedColors.action.info.hover(mode),
                                color: customTheme.mappedColors.action.info.hover(mode),
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor: customTheme.mappedColors.action.info.pressed(mode),
                                color: customTheme.mappedColors.action.info.pressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.info.disabled(mode),
                                color: customTheme.mappedColors.action.info.disabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'warning' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.warning.main(mode),
                            color: customTheme.mappedColors.action.warning.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.warning.hover(mode),
                                color: customTheme.mappedColors.action.warning.hover(mode),
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.warning.pressed(mode),
                                color: customTheme.mappedColors.action.warning.pressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.warning.disabled(mode),
                                color: customTheme.mappedColors.action.warning.disabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'error' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.error.main(mode),
                            color: customTheme.mappedColors.action.error.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor: customTheme.mappedColors.action.error.hover(mode),
                                color: customTheme.mappedColors.action.error.hover(mode),
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.error.pressed(mode),
                                color: customTheme.mappedColors.action.error.pressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.error.disabled(mode),
                                color: customTheme.mappedColors.action.error.disabled(mode),
                            },
                        },
                    },

                    {
                        props: { variant: 'outlined', color: 'success' },
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: customTheme.mappedColors.action.success.main(mode),
                            color: customTheme.mappedColors.action.success.main(mode),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.success.hover(mode),
                                color: customTheme.mappedColors.action.success.hover(mode),
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.success.pressed(mode),
                                color: customTheme.mappedColors.action.success.pressed(mode),
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent',
                                borderColor:
                                    customTheme.mappedColors.action.success.disabled(mode),
                                color: customTheme.mappedColors.action.success.disabled(mode),
                            },
                        },
                    },
                ],
            },
        },
    });
};

export const ThemeRegistry = ({ children }: { children: ReactNode }) => {
    const mode = useSelector((state: RootState) => state.theme.mode || 'light');

    const theme = useMemo(() => Theme({ mode }), [mode]);

    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
};
