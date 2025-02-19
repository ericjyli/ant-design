import type { CSSObject } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import { clearFix, resetComponent, resetIcon } from '../../style';
import { genCollapseMotion, initSlideMotion, initZoomMotion } from '../../style/motion';
import type { FullToken, GenerateStyle, UseComponentStyleResult } from '../../theme/internal';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import getHorizontalStyle from './horizontal';
import getRTLStyle from './rtl';
import getThemeStyle from './theme';
import getVerticalStyle from './vertical';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  /**
   * @desc 弹出菜单的宽度
   * @descEN Width of popup menu
   */
  dropdownWidth: number;
  /**
   * @desc 弹出菜单的 z-index
   * @descEN z-index of popup menu
   */
  zIndexPopup: number;

  // Group
  /** @deprecated Use `groupTitleColor` instead */
  colorGroupTitle: string;
  /**
   * @desc 分组标题文字颜色
   * @descEN Color of group title text
   */
  groupTitleColor: string;

  // radius
  /** @deprecated Use `itemBorderRadius` instead */
  radiusItem: number;
  /**
   * @desc 菜单项的圆角
   * @descEN Radius of menu item
   */
  itemBorderRadius: number;

  /** @deprecated Use `subMenuItemBorderRadius` instead */
  radiusSubMenuItem: number;
  /**
   * @desc 子菜单项的圆角
   * @descEN Radius of sub-menu item
   */
  subMenuItemBorderRadius: number;

  // Item Text
  // > Default
  /** @deprecated Use `itemColor` instead */
  colorItemText: string;
  /**
   * @desc 菜单项文字颜色
   * @descEN Color of menu item text
   */
  itemColor: string;

  /** @deprecated Use `itemHoverColor` instead */
  colorItemTextHover: string;
  /**
   * @desc 菜单项文字悬浮颜色
   * @descEN Hover color of menu item text
   */
  itemHoverColor: string;

  /** @deprecated Use `horizontalItemHoverColor` instead */
  colorItemTextHoverHorizontal: string;
  /**
   * @desc 水平菜单项文字悬浮颜色
   * @descEN Hover color of horizontal menu item text
   */
  horizontalItemHoverColor: string;

  /** @deprecated Use `itemSelectedColor` instead */
  colorItemTextSelected: string;
  /**
   * @desc 菜单项文字选中颜色
   * @descEN Color of selected menu item text
   */
  itemSelectedColor: string;

  /** @deprecated Use `horizontalItemSelectedColor` instead */
  colorItemTextSelectedHorizontal: string;
  /**
   * @desc 水平菜单项文字选中颜色
   * @descEN Color of selected horizontal menu item text
   */
  horizontalItemSelectedColor: string;

  // > Disabled
  /** @deprecated Use `itemDisabledColor` instead */
  colorItemTextDisabled: string;
  /**
   * @desc 菜单项文字禁用颜色
   * @descEN Color of disabled menu item text
   */
  itemDisabledColor: string;

  // > Danger
  /** @deprecated Use `dangerItemColor` instead */
  colorDangerItemText: string;
  /**
   * @desc 危险菜单项文字颜色
   * @descEN Color of danger menu item text
   */
  dangerItemColor: string;

  /** @deprecated Use `dangerItemHoverColor` instead */
  colorDangerItemTextHover: string;
  /**
   * @desc 危险菜单项文字悬浮颜色
   * @descEN Hover color of danger menu item text
   */
  dangerItemHoverColor: string;

  /** @deprecated Use `dangerItemSelectedColor` instead */
  colorDangerItemTextSelected: string;
  /**
   * @desc 危险菜单项文字选中颜色
   * @descEN Color of selected danger menu item text
   */
  dangerItemSelectedColor: string;

  /** @deprecated Use `dangerItemActiveBg` instead */
  colorDangerItemBgActive: string;
  /**
   * @desc 危险菜单项文字激活颜色
   * @descEN Color of active danger menu item text
   */
  dangerItemActiveBg: string;

  /** @deprecated Use `dangerItemSelectedBg` instead */
  colorDangerItemBgSelected: string;
  /**
   * @desc 危险菜单项文字选中颜色
   * @descEN Color of selected danger menu item text
   */
  dangerItemSelectedBg: string;

  // Item Bg
  /** @deprecated Use `itemBg` instead */
  colorItemBg: string;
  /**
   * @desc 菜单项背景色
   */
  itemBg: string;

  /** @deprecated Use `itemHoverBg` instead */
  colorItemBgHover: string;
  /**
   * @desc 菜单项悬浮态背景色
   * @descEN Background color of menu item when hover
   */
  itemHoverBg: string;

  /** @deprecated Use `subMenuItemBg` instead */
  colorSubItemBg: string;
  /**
   * @desc 子菜单项背景色
   * @descEN Background color of sub-menu item
   */
  subMenuItemBg: string;

  // > Default
  /** @deprecated Use `itemActiveBg` instead */
  colorItemBgActive: string;
  /**
   * @desc 菜单项激活态背景色
   * @descEN Background color of menu item when active
   */
  itemActiveBg: string;

  /** @deprecated Use `itemSelectedBg` instead */
  colorItemBgSelected: string;
  /**
   * @desc 菜单项选中态背景色
   * @descEN Background color of menu item when selected
   */
  itemSelectedBg: string;

  /** @deprecated Use `horizontalItemSelectedBg` instead */
  colorItemBgSelectedHorizontal: string;
  /**
   * @desc 水平菜单项选中态背景色
   * @descEN Background color of horizontal menu item when selected
   */
  horizontalItemSelectedBg: string;

  // Ink Bar
  /** @deprecated Use `activeBarWidth` instead */
  colorActiveBarWidth: number;
  /**
   * @desc 菜单项指示条宽度
   * @descEN Width of menu item active bar
   */
  activeBarWidth: number;

  /** @deprecated Use `activeBarHeight` instead */
  colorActiveBarHeight: number;
  /**
   * @desc 菜单项指示条高度
   * @descEN Height of menu item active bar
   */
  activeBarHeight: number;

  /** @deprecated Use `activeBarBorderWidth` instead */
  colorActiveBarBorderSize: number;
  /**
   * @desc 菜单项指示条边框宽度
   * @descEN Border width of menu item active bar
   */
  activeBarBorderWidth: number;

  /**
   * @desc 菜单项横向外间距
   * @descEN Horizontal margin of menu item
   */
  itemMarginInline: number;
  /**
   * @desc 横向菜单项横悬浮态背景色
   * @descEN Background color of horizontal menu item when hover
   */
  horizontalItemHoverBg: string;
  /**
   * @desc 横向菜单项圆角
   * @descEN Border radius of horizontal menu item
   */
  horizontalItemBorderRadius: number;
}

export interface MenuToken extends FullToken<'Menu'> {
  menuItemHeight: number;
  menuHorizontalHeight: number;
  menuItemPaddingInline: number;
  menuArrowSize: number;
  menuArrowOffset: string;
  menuPanelMaskInset: number;
  menuSubMenuBg: string;
}

const genMenuItemStyle = (token: MenuToken): CSSObject => {
  const {
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    controlHeightSM,
  } = token;

  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: 'relative',
      display: 'block',
      margin: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: [
        `border-color ${motionDurationSlow}`,
        `background ${motionDurationSlow}`,
        `padding ${motionDurationSlow} ${motionEaseInOut}`,
      ].join(','),

      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: fontSize,
        fontSize,
        transition: [
          `font-size ${motionDurationMid} ${motionEaseOut}`,
          `margin ${motionDurationSlow} ${motionEaseInOut}`,
          `color ${motionDurationSlow}`,
        ].join(','),

        '+ span': {
          marginInlineStart: controlHeightSM - fontSize,
          opacity: 1,
          transition: [
            `opacity ${motionDurationSlow} ${motionEaseInOut}`,
            `margin ${motionDurationSlow}`,
            `color ${motionDurationSlow}`,
          ].join(','),
        },
      },

      [`${componentCls}-item-icon`]: {
        ...resetIcon(),
      },

      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0,
        },
      },
    },

    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: 'none !important',
      cursor: 'not-allowed',

      '&::after': {
        borderColor: 'transparent !important',
      },

      a: {
        color: 'inherit !important',
      },

      [`> ${componentCls}-submenu-title`]: {
        color: 'inherit !important',
        cursor: 'not-allowed',
      },
    },
  };
};

const genSubMenuArrowStyle = (token: MenuToken): CSSObject => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset,
  } = token;

  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: 'absolute',
        top: '50%',
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: 'currentcolor',
        transform: 'translateY(-50%)',
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`,
      },

      '&-arrow': {
        // →
        '&::before, &::after': {
          position: 'absolute',
          width: menuArrowSize * 0.6,
          height: menuArrowSize * 0.15,
          backgroundColor: 'currentcolor',
          borderRadius,
          transition: [
            `background ${motionDurationSlow} ${motionEaseInOut}`,
            `transform ${motionDurationSlow} ${motionEaseInOut}`,
            `top ${motionDurationSlow} ${motionEaseInOut}`,
            `color ${motionDurationSlow} ${motionEaseInOut}`,
          ].join(','),
          content: '""',
        },

        '&::before': {
          transform: `rotate(45deg) translateY(-${menuArrowOffset})`,
        },

        '&::after': {
          transform: `rotate(-45deg) translateY(${menuArrowOffset})`,
        },
      },
    },
  };
};

// =============================== Base ===============================
const getBaseStyle: GenerateStyle<MenuToken> = (token) => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    lineHeight,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    subMenuItemBorderRadius,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset,
  } = token;

  return [
    // Misc
    {
      '': {
        [`${componentCls}`]: {
          ...clearFix(),

          // Hidden
          [`&-hidden`]: {
            display: 'none',
          },
        },
      },
      [`${componentCls}-submenu-hidden`]: {
        display: 'none',
      },
    },
    {
      [componentCls]: {
        ...resetComponent(token),
        ...clearFix(),

        marginBottom: 0,
        paddingInlineStart: 0, // Override default ul/ol
        fontSize,
        lineHeight: 0, // Fix display inline-block gap
        listStyle: 'none',
        outline: 'none',
        // Magic cubic here but smooth transition
        transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,

        [`ul, ol`]: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },

        // Overflow ellipsis
        [`&-overflow`]: {
          display: 'flex',

          [`${componentCls}-item`]: {
            flex: 'none',
          },
        },
        [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
          borderRadius: token.itemBorderRadius,
        },

        [`${componentCls}-item-group-title`]: {
          padding: `${paddingXS}px ${padding}px`,
          fontSize,
          lineHeight,
          transition: `all ${motionDurationSlow}`,
        },

        [`&-horizontal ${componentCls}-submenu`]: {
          transition: [
            `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            `background ${motionDurationSlow} ${motionEaseInOut}`,
          ].join(','),
        },

        [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
          transition: [
            `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            `background ${motionDurationSlow} ${motionEaseInOut}`,
            `padding ${motionDurationMid} ${motionEaseInOut}`,
          ].join(','),
        },

        [`${componentCls}-submenu ${componentCls}-sub`]: {
          cursor: 'initial',
          transition: [
            `background ${motionDurationSlow} ${motionEaseInOut}`,
            `padding ${motionDurationSlow} ${motionEaseInOut}`,
          ].join(','),
        },

        [`${componentCls}-title-content`]: {
          transition: `color ${motionDurationSlow}`,
        },

        [`${componentCls}-item a`]: {
          '&::before': {
            position: 'absolute',
            inset: 0,
            backgroundColor: 'transparent',
            content: '""',
          },
        },

        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809

        // >>>>> Divider
        [`${componentCls}-item-divider`]: {
          overflow: 'hidden',
          lineHeight: 0,
          borderColor: colorSplit,
          borderStyle: lineType,
          borderWidth: 0,
          borderTopWidth: lineWidth,
          marginBlock: lineWidth,
          padding: 0,

          '&-dashed': {
            borderStyle: 'dashed',
          },
        },

        // Item
        ...genMenuItemStyle(token),

        [`${componentCls}-item-group`]: {
          [`${componentCls}-item-group-list`]: {
            margin: 0,
            padding: 0,

            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
              paddingInline: `${fontSize * 2}px ${padding}px`,
            },
          },
        },

        // ======================= Sub Menu =======================
        '&-submenu': {
          '&-popup': {
            position: 'absolute',
            zIndex: zIndexPopup,
            borderRadius: borderRadiusLG,
            boxShadow: 'none',
            transformOrigin: '0 0',

            [`&${componentCls}-submenu`]: {
              background: 'transparent',
            },

            // https://github.com/ant-design/ant-design/issues/13955
            '&::before': {
              position: 'absolute',
              inset: `${menuPanelMaskInset}px 0 0`,
              zIndex: -1,
              width: '100%',
              height: '100%',
              opacity: 0,
              content: '""',
            },
          },

          // https://github.com/ant-design/ant-design/issues/13955
          '&-placement-rightTop::before': {
            top: 0,
            insetInlineStart: menuPanelMaskInset,
          },

          [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
            transformOrigin: '100% 0',
          },

          [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
            transformOrigin: '100% 100%',
          },

          [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
            transformOrigin: '0 100%',
          },

          [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
            transformOrigin: '0 0',
          },

          [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
            paddingInlineEnd: token.paddingXS,
          },

          [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
            paddingInlineStart: token.paddingXS,
          },

          [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
            paddingBottom: token.paddingXS,
          },

          [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
            paddingTop: token.paddingXS,
          },

          [`> ${componentCls}`]: {
            borderRadius: borderRadiusLG,

            ...genMenuItemStyle(token),
            ...genSubMenuArrowStyle(token),

            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: subMenuItemBorderRadius,
            },

            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`,
            },
          },
        },

        ...genSubMenuArrowStyle(token),

        [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
          // ↓
          '&::before': {
            transform: `rotate(-45deg) translateX(${menuArrowOffset})`,
          },

          '&::after': {
            transform: `rotate(45deg) translateX(-${menuArrowOffset})`,
          },
        },

        [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]:
          {
            // ↑
            transform: `translateY(-${menuArrowSize * 0.2}px)`,

            '&::after': {
              transform: `rotate(-45deg) translateX(-${menuArrowOffset})`,
            },

            '&::before': {
              transform: `rotate(45deg) translateX(${menuArrowOffset})`,
            },
          },
      },
    },

    // Integration with header element so menu items have the same height
    {
      [`${antCls}-layout-header`]: {
        [componentCls]: {
          lineHeight: 'inherit',
        },
      },
    },
  ];
};

// ============================== Export ==============================
export default (prefixCls: string, injectStyle: boolean): UseComponentStyleResult => {
  const useOriginHook = genComponentStyleHook(
    'Menu',
    (token, { overrideComponentToken }) => {
      // Dropdown will handle menu style self. We do not need to handle this.
      if (injectStyle === false) {
        return [];
      }

      const {
        colorBgElevated,
        colorPrimary,
        colorError,
        colorErrorHover,
        colorTextLightSolid,
        controlHeightLG,
        fontSize,
      } = token;

      const menuArrowSize = (fontSize / 7) * 5;

      // Menu Token
      const menuToken = mergeToken<MenuToken>(token, {
        menuItemHeight: controlHeightLG,
        menuItemPaddingInline: token.margin,
        menuArrowSize,
        menuHorizontalHeight: controlHeightLG * 1.15,
        menuArrowOffset: `${menuArrowSize * 0.25}px`,
        menuPanelMaskInset: -7, // Still a hardcode here since it's offset by rc-align
        menuSubMenuBg: colorBgElevated,
      });

      const colorTextDark = new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();

      const menuDarkToken = mergeToken<MenuToken>(
        menuToken,
        {
          itemColor: colorTextDark,
          itemHoverColor: colorTextLightSolid,
          groupTitleColor: colorTextDark,
          itemSelectedColor: colorTextLightSolid,
          itemBg: '#001529',
          subMenuItemBg: '#000c17',
          itemActiveBg: 'transparent',
          itemSelectedBg: colorPrimary,
          activeBarWidth: 0,
          activeBarHeight: 0,
          activeBarBorderWidth: 0,

          // Disabled
          itemDisabledColor: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),

          // Danger
          dangerItemColor: colorError,
          dangerItemHoverColor: colorErrorHover,
          dangerItemSelectedColor: colorTextLightSolid,
          dangerItemActiveBg: colorError,
          dangerItemSelectedBg: colorError,

          menuSubMenuBg: '#001529',

          // Horizontal
          horizontalItemSelectedColor: colorTextLightSolid,
          horizontalItemSelectedBg: colorPrimary,
        },
        {
          ...overrideComponentToken,
        },
      );

      return [
        // Basic
        getBaseStyle(menuToken),

        // Horizontal
        getHorizontalStyle(menuToken), // Hard code for some light style

        // Vertical
        getVerticalStyle(menuToken), // Hard code for some light style

        // Theme
        getThemeStyle(menuToken, 'light'),
        getThemeStyle(menuDarkToken, 'dark'),

        // RTL
        getRTLStyle(menuToken),

        // Motion
        genCollapseMotion(menuToken),

        initSlideMotion(menuToken, 'slide-up'),
        initSlideMotion(menuToken, 'slide-down'),
        initZoomMotion(menuToken, 'zoom-big'),
      ];
    },
    (token) => {
      const {
        colorPrimary,
        colorError,
        colorTextDisabled,
        colorErrorBg,
        colorText,
        colorTextDescription,
        colorBgContainer,
        colorFillAlter,
        colorFillContent,
        lineWidth,
        lineWidthBold,
        controlItemBgActive,
        colorBgTextHover,
      } = token;

      return {
        dropdownWidth: 160,
        zIndexPopup: token.zIndexPopupBase + 50,
        radiusItem: token.borderRadiusLG,
        itemBorderRadius: token.borderRadiusLG,
        radiusSubMenuItem: token.borderRadiusSM,
        subMenuItemBorderRadius: token.borderRadiusSM,
        colorItemText: colorText,
        itemColor: colorText,
        colorItemTextHover: colorText,
        itemHoverColor: colorText,
        colorItemTextHoverHorizontal: colorPrimary,
        horizontalItemHoverColor: colorPrimary,
        colorGroupTitle: colorTextDescription,
        groupTitleColor: colorTextDescription,
        colorItemTextSelected: colorPrimary,
        itemSelectedColor: colorPrimary,
        colorItemTextSelectedHorizontal: colorPrimary,
        horizontalItemSelectedColor: colorPrimary,
        colorItemBg: colorBgContainer,
        itemBg: colorBgContainer,
        colorItemBgHover: colorBgTextHover,
        itemHoverBg: colorBgTextHover,
        colorItemBgActive: colorFillContent,
        itemActiveBg: colorFillContent,
        colorSubItemBg: colorFillAlter,
        subMenuItemBg: colorFillAlter,
        colorItemBgSelected: controlItemBgActive,
        itemSelectedBg: controlItemBgActive,
        colorItemBgSelectedHorizontal: 'transparent',
        horizontalItemSelectedBg: 'transparent',
        colorActiveBarWidth: 0,
        activeBarWidth: 0,
        colorActiveBarHeight: lineWidthBold,
        activeBarHeight: lineWidthBold,
        colorActiveBarBorderSize: lineWidth,
        activeBarBorderWidth: lineWidth,

        // Disabled
        colorItemTextDisabled: colorTextDisabled,
        itemDisabledColor: colorTextDisabled,

        // Danger
        colorDangerItemText: colorError,
        dangerItemColor: colorError,
        colorDangerItemTextHover: colorError,
        dangerItemHoverColor: colorError,
        colorDangerItemTextSelected: colorError,
        dangerItemSelectedColor: colorError,
        colorDangerItemBgActive: colorErrorBg,
        dangerItemActiveBg: colorErrorBg,
        colorDangerItemBgSelected: colorErrorBg,
        dangerItemSelectedBg: colorErrorBg,

        itemMarginInline: token.marginXXS,

        horizontalItemBorderRadius: 0,
        horizontalItemHoverBg: 'transparent',
      };
    },
    {
      deprecatedTokens: [
        ['colorGroupTitle', 'groupTitleColor'],
        ['radiusItem', 'itemBorderRadius'],
        ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
        ['colorItemText', 'itemColor'],
        ['colorItemTextHover', 'itemHoverColor'],
        ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
        ['colorItemTextSelected', 'itemSelectedColor'],
        ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'],
        ['colorItemTextDisabled', 'itemDisabledColor'],
        ['colorDangerItemText', 'dangerItemColor'],
        ['colorDangerItemTextHover', 'dangerItemHoverColor'],
        ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
        ['colorDangerItemBgActive', 'dangerItemActiveBg'],
        ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
        ['colorItemBg', 'itemBg'],
        ['colorItemBgHover', 'itemHoverBg'],
        ['colorSubItemBg', 'subMenuItemBg'],
        ['colorItemBgActive', 'itemActiveBg'],
        ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
        ['colorActiveBarWidth', 'activeBarWidth'],
        ['colorActiveBarHeight', 'activeBarHeight'],
        ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
        ['colorItemBgSelected', 'itemSelectedBg'],
      ],
    },
  );

  return useOriginHook(prefixCls);
};
