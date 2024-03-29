import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header1: string;
      header2: string;
      body: string;
    };

    fontFamily: {
      code: string;
      codeLigature: string;
      text: string;
    };

    colors: {
      // Font Colors
      bold: string;
      inlineCodeColor: string;
      main: string;
      placeholder: string;
      quotedColor: string;
      sub: string;

      // Background Colors
      background: string;
      basicBg: string;
      codeBg: string;
      disabledBg: string;
      inlineBg: string;
      shadow: string;
      tableBg: string;
      transparent: string;

      // Border Colors
      bgDivider: string;
      disabledBorder: string;
      quotedBorder: string;
      tableBorder: string;

      // Primary Colors
      primary100: string;
      primary80: string;
      primary60: string;
      primary40: string;
      primary20: string;

      // Secondary Colors
      secondary100: string;
      secondary80: string;

      // Danger Colors
      danger1: string;
      danger2: string;

      // Warning Colors
      warning: string;
    };
  }
}
