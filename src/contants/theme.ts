import { MantineThemeOverride } from '@mantine/core';

export default {
	fontFamily: 'Inter, sans-serif',
	primaryColor: 'indigo',
	globalStyles: (theme) => ({
		'*': {
			WebkitTapHighlightColor: 'transparent',
		},
		body: {
			...theme.fn.fontStyles(),
			backgroundColor: theme.colors.gray[0],
		},
		'.primeShadow': {
			boxShadow: `
				0 0.0625rem 0.1875rem ${theme.colors.indigo[0]},
				${theme.colors.indigo[0]} 0 2.25rem 1.75rem -0.4375rem, 
				${theme.colors.indigo[0]} 0 1.0625rem 1.0625rem -0.4375rem
			`,
		},
	}),
} as MantineThemeOverride;
