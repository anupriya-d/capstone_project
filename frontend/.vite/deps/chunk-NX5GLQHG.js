import {
  init_unsupportedProp,
  init_utils as init_utils2,
  unsupportedProp_default
} from "./chunk-BSBTQA2M.js";
import {
  getUnit,
  toUnitless
} from "./chunk-FZ5MLTNA.js";
import {
  Typography_default
} from "./chunk-AM4IHHOA.js";
import {
  ButtonBase_default
} from "./chunk-4D4FENKF.js";
import {
  init_useEventCallback,
  useEventCallback_default
} from "./chunk-BRTASHKR.js";
import {
  Popper
} from "./chunk-U6YXO5WN.js";
import {
  FormControlContext_default,
  useFormControl
} from "./chunk-NEKCA5A6.js";
import {
  init_isMuiElement,
  isMuiElement_default
} from "./chunk-J7RJBHVI.js";
import {
  createSvgIcon,
  init_createSvgIcon
} from "./chunk-MF6RUNN4.js";
import {
  Backdrop_default,
  Fade_default,
  Modal_default,
  require_react_is
} from "./chunk-RBIARKQH.js";
import {
  ListContext_default
} from "./chunk-ZG3B4N3V.js";
import {
  isHostComponent,
  useSlotProps
} from "./chunk-IEEQMG5A.js";
import {
  debounce_default,
  init_debounce,
  init_ownerDocument,
  init_ownerWindow,
  ownerDocument_default,
  ownerWindow_default
} from "./chunk-FENIWXKA.js";
import {
  init_useEnhancedEffect,
  useEnhancedEffect_default
} from "./chunk-2KQHIAJ3.js";
import {
  Paper_default
} from "./chunk-6JNA5JJT.js";
import {
  useTheme
} from "./chunk-IRTHEGP3.js";
import {
  capitalize_default,
  init_capitalize
} from "./chunk-L3BY6JXB.js";
import {
  init_useForkRef,
  useForkRef_default
} from "./chunk-I2CNTU4K.js";
import {
  init_styled,
  rootShouldForwardProp_default,
  styled_default
} from "./chunk-S4GGNAYQ.js";
import {
  alpha,
  useRtl
} from "./chunk-HALJ2GSW.js";
import {
  HTMLElementType,
  chainPropTypes,
  detectScrollType,
  elementTypeAcceptingRef_default,
  getNormalizedScrollLeft,
  init_HTMLElementType,
  init_chainPropTypes,
  init_elementTypeAcceptingRef,
  init_refType,
  init_useId,
  init_utils,
  refType_default,
  useId
} from "./chunk-HFE4C4YO.js";
import {
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  css,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_styled_engine,
  init_useThemeProps2 as init_useThemeProps,
  keyframes,
  require_colorManipulator,
  require_jsx_runtime,
  require_prop_types,
  styled_engine_exports,
  useThemeProps2 as useThemeProps
} from "./chunk-YT7GON2M.js";
import {
  _extends,
  init_extends
} from "./chunk-64I7CHGY.js";
import {
  require_react
} from "./chunk-7IKHB6XJ.js";
import {
  __commonJS,
  __toCommonJS,
  __toESM
} from "./chunk-GFT2G5UO.js";

// node_modules/@mui/system/useThemeWithoutDefault.js
var require_useThemeWithoutDefault = __commonJS({
  "node_modules/@mui/system/useThemeWithoutDefault.js"(exports) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React19 = _interopRequireWildcard(require_react());
    var _styledEngine = (init_styled_engine(), __toCommonJS(styled_engine_exports));
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap)
        return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule)
        return e;
      if (null === e || "object" != typeof e && "function" != typeof e)
        return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e))
        return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
      return n.default = e, t && t.set(e, n), n;
    }
    function isObjectEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    function useTheme3(defaultTheme = null) {
      const contextTheme = React19.useContext(_styledEngine.ThemeContext);
      return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
    }
    var _default = exports.default = useTheme3;
  }
});

// node_modules/@mui/material/Popper/Popper.js
init_extends();
init_objectWithoutPropertiesLoose();
var import_useThemeWithoutDefault = __toESM(require_useThemeWithoutDefault());
init_refType();
init_HTMLElementType();
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"];
var PopperRoot = styled_default(Popper, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
var Popper2 = React.forwardRef(function Popper3(inProps, ref) {
  var _slots$root;
  const theme = (0, import_useThemeWithoutDefault.default)();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopper"
  });
  const {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const RootComponent = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components == null ? void 0 : components.Root;
  const otherProps = _extends({
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition
  }, other);
  return (0, import_jsx_runtime.jsx)(PopperRoot, _extends({
    as: component,
    direction: theme == null ? void 0 : theme.direction,
    slots: {
      root: RootComponent
    },
    slotProps: slotProps != null ? slotProps : componentsProps
  }, otherProps, {
    ref
  }));
});
true ? Popper2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: import_prop_types.default.oneOfType([HTMLElementType, import_prop_types.default.object, import_prop_types.default.func]),
  /**
   * Popper render function or node.
   */
  children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: import_prop_types.default.shape({
    Root: import_prop_types.default.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types.default.oneOfType([HTMLElementType, import_prop_types.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    data: import_prop_types.default.object,
    effect: import_prop_types.default.func,
    enabled: import_prop_types.default.bool,
    fn: import_prop_types.default.func,
    name: import_prop_types.default.any,
    options: import_prop_types.default.object,
    phase: import_prop_types.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types.default.arrayOf(import_prop_types.default.string),
    requiresIfExists: import_prop_types.default.arrayOf(import_prop_types.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types.default.shape({
    modifiers: import_prop_types.default.array,
    onFirstUpdate: import_prop_types.default.func,
    placement: import_prop_types.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types.default.bool
} : void 0;
var Popper_default = Popper2;

// node_modules/@mui/material/Chip/chipClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
var chipClasses_default = chipClasses;

// node_modules/@mui/material/Chip/Chip.js
init_objectWithoutPropertiesLoose();
init_extends();
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
var import_colorManipulator = __toESM(require_colorManipulator());

// node_modules/@mui/material/internal/svg-icons/Cancel.js
var React2 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Cancel_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");

// node_modules/@mui/material/Chip/Chip.js
init_useForkRef();
init_unsupportedProp();
init_capitalize();
init_useThemeProps();
init_styled();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded2 = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize_default(size)}`, `color${capitalize_default(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize_default(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize_default(color)}`, `${variant}${capitalize_default(color)}`],
    label: ["label", `label${capitalize_default(size)}`],
    avatar: ["avatar", `avatar${capitalize_default(size)}`, `avatarColor${capitalize_default(color)}`],
    icon: ["icon", `icon${capitalize_default(size)}`, `iconColor${capitalize_default(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize_default(size)}`, `deleteIconColor${capitalize_default(color)}`, `deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
  };
  return composeClasses(slots, getChipUtilityClass, classes);
};
var ChipRoot = styled_default("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses_default.avatar}`]: styles2.avatar
    }, {
      [`& .${chipClasses_default.avatar}`]: styles2[`avatar${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.avatar}`]: styles2[`avatarColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles2.icon
    }, {
      [`& .${chipClasses_default.icon}`]: styles2[`icon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles2[`iconColor${capitalize_default(iconColor)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2.deleteIcon
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2[`deleteIcon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2[`deleteIconColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2[`deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
    }, styles2.root, styles2[`size${capitalize_default(size)}`], styles2[`color${capitalize_default(color)}`], clickable && styles2.clickable, clickable && color !== "default" && styles2[`clickableColor${capitalize_default(color)})`], onDelete && styles2.deletable, onDelete && color !== "default" && styles2[`deletableColor${capitalize_default(color)}`], styles2[variant], styles2[`${variant}${capitalize_default(color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return _extends({
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses_default.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses_default.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses_default.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses_default.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses_default.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses_default.icon}`]: _extends({
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.iconColor === ownerState.color && _extends({
      color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
    }, ownerState.color !== "default" && {
      color: "inherit"
    })),
    [`& .${chipClasses_default.deleteIcon}`]: _extends({
      WebkitTapHighlightColor: "transparent",
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : (0, import_colorManipulator.alpha)(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : (0, import_colorManipulator.alpha)(theme.palette.text.primary, 0.4)
      }
    }, ownerState.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== "default" && {
      color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)` : (0, import_colorManipulator.alpha)(theme.palette[ownerState.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === "small" && {
    height: 24
  }, ownerState.color !== "default" && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    [`&.${chipClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0, import_colorManipulator.alpha)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== "default" && {
    [`&.${chipClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, ({
  theme,
  ownerState
}) => _extends({}, ownerState.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0, import_colorManipulator.alpha)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0, import_colorManipulator.alpha)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (theme.vars || theme).shadows[1]
  }
}, ownerState.clickable && ownerState.color !== "default" && {
  [`&:hover, &.${chipClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.variant === "outlined" && {
  backgroundColor: "transparent",
  border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
  [`&.${chipClasses_default.clickable}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`& .${chipClasses_default.avatar}`]: {
    marginLeft: 4
  },
  [`& .${chipClasses_default.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${chipClasses_default.icon}`]: {
    marginLeft: 4
  },
  [`& .${chipClasses_default.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${chipClasses_default.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${chipClasses_default.deleteIconSmall}`]: {
    marginRight: 3
  }
}, ownerState.variant === "outlined" && ownerState.color !== "default" && {
  color: (theme.vars || theme).palette[ownerState.color].main,
  border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : (0, import_colorManipulator.alpha)(theme.palette[ownerState.color].main, 0.7)}`,
  [`&.${chipClasses_default.clickable}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, import_colorManipulator.alpha)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, import_colorManipulator.alpha)(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
  },
  [`& .${chipClasses_default.deleteIcon}`]: {
    color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : (0, import_colorManipulator.alpha)(theme.palette[ownerState.color].main, 0.7),
    "&:hover, &:active": {
      color: (theme.vars || theme).palette[ownerState.color].main
    }
  }
}));
var ChipLabel = styled_default("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles2.label, styles2[`label${capitalize_default(size)}`]];
  }
})(({
  ownerState
}) => _extends({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, ownerState.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, ownerState.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, ownerState.size === "small" && ownerState.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = React3.forwardRef(function Chip2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiChip"
  });
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = false
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const chipRef = React3.useRef(null);
  const handleRef = useForkRef_default(chipRef, ref);
  const handleDeleteIconClick = (event) => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = (event) => {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = (event) => {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === "Escape" && chipRef.current) {
        chipRef.current.blur();
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase_default : ComponentProp || "div";
  const ownerState = _extends({}, props, {
    component,
    disabled,
    size,
    color,
    iconColor: React3.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const moreProps = component === ButtonBase_default ? _extends({
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: true
  }) : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && React3.isValidElement(deleteIconProp) ? React3.cloneElement(deleteIconProp, {
      className: clsx_default(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : (0, import_jsx_runtime3.jsx)(Cancel_default, {
      className: clsx_default(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && React3.isValidElement(avatarProp)) {
    avatar = React3.cloneElement(avatarProp, {
      className: clsx_default(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && React3.isValidElement(iconProp)) {
    icon = React3.cloneElement(iconProp, {
      className: clsx_default(classes.icon, iconProp.props.className)
    });
  }
  if (true) {
    if (avatar && icon) {
      console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
    }
  }
  return (0, import_jsx_runtime4.jsxs)(ChipRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    disabled: clickable && disabled ? true : void 0,
    onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState
  }, moreProps, other, {
    children: [avatar || icon, (0, import_jsx_runtime3.jsx)(ChipLabel, {
      className: clsx_default(classes.label),
      ownerState,
      children: label
    }), deleteIcon]
  }));
});
true ? Chip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: import_prop_types2.default.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: import_prop_types2.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: import_prop_types2.default.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * Icon element.
   */
  icon: import_prop_types2.default.element,
  /**
   * The content of the component.
   */
  label: import_prop_types2.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types2.default.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types2.default.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["medium", "small"]), import_prop_types2.default.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: import_prop_types2.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * @ignore
   */
  tabIndex: import_prop_types2.default.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["filled", "outlined"]), import_prop_types2.default.string])
} : void 0;
var Chip_default = Chip;

// node_modules/@mui/material/Dialog/dialogClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
var dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
var dialogClasses_default = dialogClasses;

// node_modules/@mui/material/Dialog/Dialog.js
init_objectWithoutPropertiesLoose();
init_extends();
var React5 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_useId();
init_capitalize();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/Dialog/DialogContext.js
var React4 = __toESM(require_react());
var DialogContext = React4.createContext({});
if (true) {
  DialogContext.displayName = "DialogContext";
}
var DialogContext_default = DialogContext;

// node_modules/@mui/material/Dialog/Dialog.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded3 = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
var DialogBackdrop = styled_default(Backdrop_default, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles2) => styles2.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize_default(scroll)}`],
    paper: ["paper", `paperScroll${capitalize_default(scroll)}`, `paperWidth${capitalize_default(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
var DialogRoot = styled_default(Modal_default, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
var DialogContainer = styled_default("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.container, styles2[`scroll${capitalize_default(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => _extends({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, ownerState.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, ownerState.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
}));
var DialogPaper = styled_default(Paper_default, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.paper, styles2[`scrollPaper${capitalize_default(ownerState.scroll)}`], styles2[`paperWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles2.paperFullWidth, ownerState.fullScreen && styles2.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, ownerState.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, ownerState.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !ownerState.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, ownerState.maxWidth === "xs" && {
  maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
  [`&.${dialogClasses_default.paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${dialogClasses_default.paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.fullWidth && {
  width: "calc(100% - 64px)"
}, ownerState.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${dialogClasses_default.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
}));
var Dialog = React5.forwardRef(function Dialog2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onBackdropClick,
    onClose,
    open,
    PaperComponent = Paper_default,
    PaperProps = {},
    scroll = "paper",
    TransitionComponent = Fade_default,
    transitionDuration = defaultTransitionDuration,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const ownerState = _extends({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  });
  const classes = useUtilityClasses2(ownerState);
  const backdropClick = React5.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = React5.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return (0, import_jsx_runtime5.jsx)(DialogRoot, _extends({
    className: clsx_default(classes.root, className),
    closeAfterTransition: true,
    components: {
      Backdrop: DialogBackdrop
    },
    componentsProps: {
      backdrop: _extends({
        transitionDuration,
        as: BackdropComponent
      }, BackdropProps)
    },
    disableEscapeKeyDown,
    onClose,
    open,
    ref,
    onClick: handleBackdropClick,
    ownerState
  }, other, {
    children: (0, import_jsx_runtime5.jsx)(TransitionComponent, _extends({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: (0, import_jsx_runtime5.jsx)(DialogContainer, {
        className: clsx_default(classes.container),
        onMouseDown: handleMouseDown,
        ownerState,
        children: (0, import_jsx_runtime5.jsx)(DialogPaper, _extends({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: clsx_default(classes.paper, PaperProps.className),
          ownerState,
          children: (0, import_jsx_runtime5.jsx)(DialogContext_default.Provider, {
            value: dialogContextValue,
            children
          })
        }))
      })
    }))
  }));
});
true ? Dialog.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": import_prop_types3.default.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": import_prop_types3.default.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types3.default.elementType,
  /**
   * @ignore
   */
  BackdropProps: import_prop_types3.default.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types3.default.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: import_prop_types3.default.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: import_prop_types3.default.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types3.default.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types3.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types3.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types3.default.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: import_prop_types3.default.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: import_prop_types3.default.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: import_prop_types3.default.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: import_prop_types3.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.shape({
    appear: import_prop_types3.default.number,
    enter: import_prop_types3.default.number,
    exit: import_prop_types3.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: import_prop_types3.default.object
} : void 0;
var Dialog_default = Dialog;

// node_modules/@mui/material/DialogActions/dialogActionsClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass("MuiDialogActions", slot);
}
var dialogActionsClasses = generateUtilityClasses("MuiDialogActions", ["root", "spacing"]);
var dialogActionsClasses_default = dialogActionsClasses;

// node_modules/@mui/material/DialogActions/DialogActions.js
init_objectWithoutPropertiesLoose();
init_extends();
var React6 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded4 = ["className", "disableSpacing"];
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};
var DialogActionsRoot = styled_default("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disableSpacing && styles2.spacing];
  }
})(({
  ownerState
}) => _extends({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !ownerState.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
}));
var DialogActions = React6.forwardRef(function DialogActions2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogActions"
  });
  const {
    className,
    disableSpacing = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const ownerState = _extends({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime6.jsx)(DialogActionsRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? DialogActions.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types4.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types4.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object])
} : void 0;
var DialogActions_default = DialogActions;

// node_modules/@mui/material/DialogContent/dialogContentClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
var dialogContentClasses_default = dialogContentClasses;

// node_modules/@mui/material/DialogTitle/dialogTitleClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass("MuiDialogTitle", slot);
}
var dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", ["root"]);
var dialogTitleClasses_default = dialogTitleClasses;

// node_modules/@mui/material/DialogContent/DialogContent.js
init_objectWithoutPropertiesLoose();
init_extends();
var React7 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded5 = ["className", "dividers"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
var DialogContentRoot = styled_default("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.dividers && styles2.dividers];
  }
})(({
  theme,
  ownerState
}) => _extends({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, ownerState.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
} : {
  [`.${dialogTitleClasses_default.root} + &`]: {
    paddingTop: 0
  }
}));
var DialogContent = React7.forwardRef(function DialogContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = _extends({}, props, {
    dividers
  });
  const classes = useUtilityClasses4(ownerState);
  return (0, import_jsx_runtime7.jsx)(DialogContentRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? DialogContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types5.default.object,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: import_prop_types5.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object])
} : void 0;
var DialogContent_default = DialogContent;

// node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getInputAdornmentUtilityClass(slot) {
  return generateUtilityClass("MuiInputAdornment", slot);
}
var inputAdornmentClasses = generateUtilityClasses("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var inputAdornmentClasses_default = inputAdornmentClasses;

// node_modules/@mui/material/InputAdornment/InputAdornment.js
init_objectWithoutPropertiesLoose();
init_extends();
var React8 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_capitalize();
init_styled();
init_useThemeProps();
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _span;
var _excluded6 = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
var overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, styles2[`position${capitalize_default(ownerState.position)}`], ownerState.disablePointerEvents === true && styles2.disablePointerEvents, styles2[ownerState.variant]];
};
var useUtilityClasses5 = (ownerState) => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize_default(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
};
var InputAdornmentRoot = styled_default("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (theme.vars || theme).palette.action.active
}, ownerState.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${inputAdornmentClasses_default.positionStart}&:not(.${inputAdornmentClasses_default.hiddenLabel})`]: {
    marginTop: 16
  }
}, ownerState.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, ownerState.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, ownerState.disablePointerEvents === true && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
}));
var InputAdornment = React8.forwardRef(function InputAdornment2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputAdornment"
  });
  const {
    children,
    className,
    component = "div",
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const muiFormControl = useFormControl() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one.");
      }
    }
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = _extends({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });
  const classes = useUtilityClasses5(ownerState);
  return (0, import_jsx_runtime8.jsx)(FormControlContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime8.jsx)(InputAdornmentRoot, _extends({
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ref
    }, other, {
      children: typeof children === "string" && !disableTypography ? (0, import_jsx_runtime8.jsx)(Typography_default, {
        color: "text.secondary",
        children
      }) : (0, import_jsx_runtime9.jsxs)(React8.Fragment, {
        children: [position === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          _span || (_span = (0, import_jsx_runtime8.jsx)("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, children]
      })
    }))
  });
});
true ? InputAdornment.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: import_prop_types6.default.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: import_prop_types6.default.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: import_prop_types6.default.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: import_prop_types6.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputAdornment_default = InputAdornment;

// node_modules/@mui/material/ListItem/listItemClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getListItemUtilityClass(slot) {
  return generateUtilityClass("MuiListItem", slot);
}
var listItemClasses = generateUtilityClasses("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]);
var listItemClasses_default = listItemClasses;

// node_modules/@mui/material/ListItemButton/listItemButtonClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass("MuiListItemButton", slot);
}
var listItemButtonClasses = generateUtilityClasses("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
var listItemButtonClasses_default = listItemButtonClasses;

// node_modules/@mui/material/ListItemButton/ListItemButton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React9 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
var import_colorManipulator2 = __toESM(require_colorManipulator());
init_styled();
init_useThemeProps();
init_useEnhancedEffect();
init_useForkRef();
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded7 = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"];
var overridesResolver2 = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.dense && styles2.dense, ownerState.alignItems === "flex-start" && styles2.alignItemsFlexStart, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters];
};
var useUtilityClasses6 = (ownerState) => {
  const {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", divider && "divider", disabled && "disabled", alignItems === "flex-start" && "alignItemsFlexStart", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var ListItemButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: overridesResolver2
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemButtonClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0, import_colorManipulator2.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemButtonClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0, import_colorManipulator2.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemButtonClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0, import_colorManipulator2.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0, import_colorManipulator2.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${listItemButtonClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemButtonClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: "padding-box"
}, ownerState.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}));
var ListItemButton = React9.forwardRef(function ListItemButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiListItemButton"
  });
  const {
    alignItems = "center",
    autoFocus = false,
    component = "div",
    children,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const context = React9.useContext(ListContext_default);
  const childContext = React9.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React9.useRef(null);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered.");
      }
    }
  }, [autoFocus]);
  const ownerState = _extends({}, props, {
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  });
  const classes = useUtilityClasses6(ownerState);
  const handleRef = useForkRef_default(listItemRef, ref);
  return (0, import_jsx_runtime10.jsx)(ListContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime10.jsx)(ListItemButtonRoot, _extends({
      ref: handleRef,
      href: other.href || other.to,
      component: (other.href || other.to) && component === "div" ? "button" : component,
      focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
      ownerState,
      className: clsx_default(classes.root, className)
    }, other, {
      classes,
      children
    }))
  });
});
true ? ListItemButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: import_prop_types7.default.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: import_prop_types7.default.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: import_prop_types7.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * @ignore
   */
  className: import_prop_types7.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types7.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: import_prop_types7.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types7.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types7.default.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: import_prop_types7.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types7.default.string,
  /**
   * @ignore
   */
  href: import_prop_types7.default.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: import_prop_types7.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object])
} : void 0;
var ListItemButton_default = ListItemButton;

// node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass("MuiListItemSecondaryAction", slot);
}
var listItemSecondaryActionClasses = generateUtilityClasses("MuiListItemSecondaryAction", ["root", "disableGutters"]);
var listItemSecondaryActionClasses_default = listItemSecondaryActionClasses;

// node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
init_objectWithoutPropertiesLoose();
init_extends();
var React10 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded8 = ["className"];
var useUtilityClasses7 = (ownerState) => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
var ListItemSecondaryActionRoot = styled_default("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.disableGutters && styles2.disableGutters];
  }
})(({
  ownerState
}) => _extends({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, ownerState.disableGutters && {
  right: 0
}));
var ListItemSecondaryAction = React10.forwardRef(function ListItemSecondaryAction2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const context = React10.useContext(ListContext_default);
  const ownerState = _extends({}, props, {
    disableGutters: context.disableGutters
  });
  const classes = useUtilityClasses7(ownerState);
  return (0, import_jsx_runtime11.jsx)(ListItemSecondaryActionRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? ListItemSecondaryAction.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: import_prop_types8.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object])
} : void 0;
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
var ListItemSecondaryAction_default = ListItemSecondaryAction;

// node_modules/@mui/material/ListItem/ListItem.js
init_objectWithoutPropertiesLoose();
init_extends();
var React11 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_elementTypeAcceptingRef();
init_chainPropTypes();
var import_colorManipulator3 = __toESM(require_colorManipulator());
init_styled();
init_useThemeProps();
init_isMuiElement();
init_useEnhancedEffect();
init_useForkRef();
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded9 = ["className"];
var _excluded22 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"];
var overridesResolver3 = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.dense && styles2.dense, ownerState.alignItems === "flex-start" && styles2.alignItemsFlexStart, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters, !ownerState.disablePadding && styles2.padding, ownerState.button && styles2.button, ownerState.hasSecondaryAction && styles2.secondaryAction];
};
var useUtilityClasses8 = (ownerState) => {
  const {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", !disablePadding && "padding", divider && "divider", disabled && "disabled", button && "button", alignItems === "flex-start" && "alignItemsFlexStart", hasSecondaryAction && "secondaryAction", selected && "selected"],
    container: ["container"]
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};
var ListItemRoot = styled_default("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: overridesResolver3
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !ownerState.disablePadding && _extends({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${listItemButtonClasses_default.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${listItemClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0, import_colorManipulator3.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0, import_colorManipulator3.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: "padding-box"
}, ownerState.button && {
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0, import_colorManipulator3.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0, import_colorManipulator3.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}));
var ListItemContainer = styled_default("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (props, styles2) => styles2.container
})({
  position: "relative"
});
var ListItem = React11.forwardRef(function ListItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiListItem"
  });
  const {
    alignItems = "center",
    autoFocus = false,
    button = false,
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = "li",
    ContainerProps: {
      className: ContainerClassName
    } = {},
    dense = false,
    disabled = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    focusVisibleClassName,
    secondaryAction,
    selected = false,
    slotProps = {},
    slots = {}
  } = props, ContainerProps = _objectWithoutPropertiesLoose(props.ContainerProps, _excluded9), other = _objectWithoutPropertiesLoose(props, _excluded22);
  const context = React11.useContext(ListContext_default);
  const childContext = React11.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React11.useRef(null);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered.");
      }
    }
  }, [autoFocus]);
  const children = React11.Children.toArray(childrenProp);
  const hasSecondaryAction = children.length && isMuiElement_default(children[children.length - 1], ["ListItemSecondaryAction"]);
  const ownerState = _extends({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  });
  const classes = useUtilityClasses8(ownerState);
  const handleRef = useForkRef_default(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = _extends({
    className: clsx_default(classes.root, rootProps.className, className),
    disabled
  }, other);
  let Component = componentProp || "li";
  if (button) {
    componentProps.component = componentProp || "div";
    componentProps.focusVisibleClassName = clsx_default(listItemClasses_default.focusVisible, focusVisibleClassName);
    Component = ButtonBase_default;
  }
  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? "div" : Component;
    if (ContainerComponent === "li") {
      if (Component === "li") {
        Component = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return (0, import_jsx_runtime12.jsx)(ListContext_default.Provider, {
      value: childContext,
      children: (0, import_jsx_runtime13.jsxs)(ListItemContainer, _extends({
        as: ContainerComponent,
        className: clsx_default(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState
      }, ContainerProps, {
        children: [(0, import_jsx_runtime12.jsx)(Root, _extends({}, rootProps, !isHostComponent(Root) && {
          as: Component,
          ownerState: _extends({}, ownerState, rootProps.ownerState)
        }, componentProps, {
          children
        })), children.pop()]
      }))
    });
  }
  return (0, import_jsx_runtime12.jsx)(ListContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime13.jsxs)(Root, _extends({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && (0, import_jsx_runtime12.jsx)(ListItemSecondaryAction_default, {
        children: secondaryAction
      })]
    }))
  });
});
true ? ListItem.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: import_prop_types9.default.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: import_prop_types9.default.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: import_prop_types9.default.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: chainPropTypes(import_prop_types9.default.node, (props) => {
    const children = React11.Children.toArray(props.children);
    let secondaryActionIndex = -1;
    for (let i = children.length - 1; i >= 0; i -= 1) {
      const child = children[i];
      if (isMuiElement_default(child, ["ListItemSecondaryAction"])) {
        secondaryActionIndex = i;
        break;
      }
    }
    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types9.default.shape({
    Root: import_prop_types9.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: import_prop_types9.default.shape({
    root: import_prop_types9.default.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: elementTypeAcceptingRef_default,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: import_prop_types9.default.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: import_prop_types9.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types9.default.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: import_prop_types9.default.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: import_prop_types9.default.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types9.default.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: import_prop_types9.default.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: import_prop_types9.default.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    root: import_prop_types9.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    root: import_prop_types9.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
} : void 0;
var ListItem_default = ListItem;

// node_modules/@mui/material/Skeleton/skeletonClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getSkeletonUtilityClass(slot) {
  return generateUtilityClass("MuiSkeleton", slot);
}
var skeletonClasses = generateUtilityClasses("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
var skeletonClasses_default = skeletonClasses;

// node_modules/@mui/material/Skeleton/Skeleton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React12 = __toESM(require_react());
init_clsx();
var import_prop_types10 = __toESM(require_prop_types());
init_composeClasses();
init_styled();
init_useThemeProps();
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded10 = ["animation", "className", "component", "height", "style", "variant", "width"];
var _ = (t) => t;
var _t;
var _t2;
var _t3;
var _t4;
var useUtilityClasses9 = (ownerState) => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width && "fitContent", hasChildren && !height && "heightAuto"]
  };
  return composeClasses(slots, getSkeletonUtilityClass, classes);
};
var pulseKeyframe = keyframes(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
var waveKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
var SkeletonRoot = styled_default("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], ownerState.animation !== false && styles2[ownerState.animation], ownerState.hasChildren && styles2.withChildren, ownerState.hasChildren && !ownerState.width && styles2.fitContent, ownerState.hasChildren && !ownerState.height && styles2.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  const radiusUnit = getUnit(theme.shape.borderRadius) || "px";
  const radiusValue = toUnitless(theme.shape.borderRadius);
  return _extends({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : alpha(theme.palette.text.primary, theme.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, ownerState.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, ownerState.variant === "circular" && {
    borderRadius: "50%"
  }, ownerState.variant === "rounded" && {
    borderRadius: (theme.vars || theme).shape.borderRadius
  }, ownerState.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: "fit-content"
  }, ownerState.hasChildren && !ownerState.height && {
    height: "auto"
  });
}, ({
  ownerState
}) => ownerState.animation === "pulse" && css(_t3 || (_t3 = _`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme
}) => ownerState.animation === "wave" && css(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme.vars || theme).palette.action.hover));
var Skeleton = React12.forwardRef(function Skeleton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSkeleton"
  });
  const {
    animation = "pulse",
    className,
    component = "span",
    height,
    style,
    variant = "text",
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const ownerState = _extends({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });
  const classes = useUtilityClasses9(ownerState);
  return (0, import_jsx_runtime14.jsx)(SkeletonRoot, _extends({
    as: component,
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    style: _extends({
      width,
      height
    }, style)
  }));
});
true ? Skeleton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: import_prop_types10.default.oneOf(["pulse", "wave", false]),
  /**
   * Optional children to infer width and height from.
   */
  children: import_prop_types10.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types10.default.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
  /**
   * @ignore
   */
  style: import_prop_types10.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["circular", "rectangular", "rounded", "text"]), import_prop_types10.default.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string])
} : void 0;
var Skeleton_default = Skeleton;

// node_modules/@mui/material/Tab/tabClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
var tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
var tabClasses_default = tabClasses;

// node_modules/@mui/material/Tab/Tab.js
init_objectWithoutPropertiesLoose();
init_extends();
var React13 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_capitalize();
init_useThemeProps();
init_styled();
init_unsupportedProp();
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded11 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
var useUtilityClasses10 = (ownerState) => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", icon && label && "labelIcon", `textColor${capitalize_default(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return composeClasses(slots, getTabUtilityClass, classes);
};
var TabRoot = styled_default(ButtonBase_default, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize_default(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped];
  }
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, ownerState.label && {
  flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, ownerState.icon && ownerState.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${tabClasses_default.iconWrapper}`]: _extends({}, ownerState.iconPosition === "top" && {
    marginBottom: 6
  }, ownerState.iconPosition === "bottom" && {
    marginTop: 6
  }, ownerState.iconPosition === "start" && {
    marginRight: theme.spacing(1)
  }, ownerState.iconPosition === "end" && {
    marginLeft: theme.spacing(1)
  })
}, ownerState.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${tabClasses_default.selected}`]: {
    opacity: 1
  },
  [`&.${tabClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.textColor === "primary" && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${tabClasses_default.selected}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${tabClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.textColor === "secondary" && {
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${tabClasses_default.selected}`]: {
    color: (theme.vars || theme).palette.secondary.main
  },
  [`&.${tabClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, ownerState.wrapped && {
  fontSize: theme.typography.pxToRem(12)
}));
var Tab = React13.forwardRef(function Tab2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTab"
  });
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = "top",
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = "inherit",
    value,
    wrapped = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const ownerState = _extends({}, props, {
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  });
  const classes = useUtilityClasses10(ownerState);
  const icon = iconProp && label && React13.isValidElement(iconProp) ? React13.cloneElement(iconProp, {
    className: clsx_default(classes.iconWrapper, iconProp.props.className)
  }) : iconProp;
  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return (0, import_jsx_runtime15.jsxs)(TabRoot, _extends({
    focusRipple: !disableFocusRipple,
    className: clsx_default(classes.root, className),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState,
    tabIndex: selected ? 0 : -1
  }, other, {
    children: [iconPosition === "top" || iconPosition === "start" ? (0, import_jsx_runtime15.jsxs)(React13.Fragment, {
      children: [icon, label]
    }) : (0, import_jsx_runtime15.jsxs)(React13.Fragment, {
      children: [label, icon]
    }), indicator]
  }));
});
true ? Tab.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types11.default.object,
  /**
   * @ignore
   */
  className: import_prop_types11.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types11.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types11.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types11.default.bool,
  /**
   * The icon to display.
   */
  icon: import_prop_types11.default.oneOfType([import_prop_types11.default.element, import_prop_types11.default.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: import_prop_types11.default.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: import_prop_types11.default.node,
  /**
   * @ignore
   */
  onChange: import_prop_types11.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types11.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types11.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: import_prop_types11.default.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: import_prop_types11.default.bool
} : void 0;
var Tab_default = Tab;

// node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass("MuiTabScrollButton", slot);
}
var tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
var tabScrollButtonClasses_default = tabScrollButtonClasses;

// node_modules/@mui/material/TabScrollButton/TabScrollButton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React16 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();

// node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js
var React14 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var KeyboardArrowLeft_default = createSvgIcon((0, import_jsx_runtime16.jsx)("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft");

// node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js
var React15 = __toESM(require_react());
init_createSvgIcon();
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var KeyboardArrowRight_default = createSvgIcon((0, import_jsx_runtime17.jsx)("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");

// node_modules/@mui/material/TabScrollButton/TabScrollButton.js
init_useThemeProps();
init_styled();
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded12 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
var useUtilityClasses11 = (ownerState) => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled"]
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
var TabScrollButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
  }
})(({
  ownerState
}) => _extends({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses_default.disabled}`]: {
    opacity: 0
  }
}, ownerState.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
  }
}));
var TabScrollButton = React16.forwardRef(function TabScrollButton2(inProps, ref) {
  var _slots$StartScrollBut, _slots$EndScrollButto;
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabScrollButton"
  });
  const {
    className,
    slots = {},
    slotProps = {},
    direction
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const isRtl = useRtl();
  const ownerState = _extends({
    isRtl
  }, props);
  const classes = useUtilityClasses11(ownerState);
  const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft_default;
  const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight_default;
  const startButtonIconProps = useSlotProps({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  const endButtonIconProps = useSlotProps({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  return (0, import_jsx_runtime18.jsx)(TabScrollButtonRoot, _extends({
    component: "div",
    className: clsx_default(classes.root, className),
    ref,
    role: null,
    ownerState,
    tabIndex: null
  }, other, {
    children: direction === "left" ? (0, import_jsx_runtime18.jsx)(StartButtonIcon, _extends({}, startButtonIconProps)) : (0, import_jsx_runtime18.jsx)(EndButtonIcon, _extends({}, endButtonIconProps))
  }));
});
true ? TabScrollButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types12.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types12.default.object,
  /**
   * @ignore
   */
  className: import_prop_types12.default.string,
  /**
   * The direction the button should indicate.
   */
  direction: import_prop_types12.default.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types12.default.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: import_prop_types12.default.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: import_prop_types12.default.shape({
    endScrollButtonIcon: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object]),
    startScrollButtonIcon: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types12.default.shape({
    EndScrollButtonIcon: import_prop_types12.default.elementType,
    StartScrollButtonIcon: import_prop_types12.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
} : void 0;
var TabScrollButton_default = TabScrollButton;

// node_modules/@mui/material/Tabs/tabsClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
var tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
var tabsClasses_default = tabsClasses;

// node_modules/@mui/material/Tabs/Tabs.js
init_objectWithoutPropertiesLoose();
init_extends();
var React18 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types14 = __toESM(require_prop_types());
init_clsx();
init_refType();
init_composeClasses();
init_styled();
init_useThemeProps();
init_debounce();

// node_modules/@mui/material/utils/scrollLeft.js
init_utils();

// node_modules/@mui/material/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration = 300
    // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}

// node_modules/@mui/material/Tabs/ScrollbarSize.js
init_extends();
init_objectWithoutPropertiesLoose();
var React17 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
init_debounce();
init_utils2();
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded13 = ["onChange"];
var styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  const {
    onChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const scrollbarHeight = React17.useRef();
  const nodeRef = React17.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  useEnhancedEffect_default(() => {
    const handleResize = debounce_default(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow_default(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React17.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return (0, import_jsx_runtime19.jsx)("div", _extends({
    style: styles,
    ref: nodeRef
  }, other));
}
true ? ScrollbarSize.propTypes = {
  onChange: import_prop_types13.default.func.isRequired
} : void 0;

// node_modules/@mui/material/Tabs/Tabs.js
init_useEventCallback();
init_ownerDocument();
init_ownerWindow();
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded14 = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
var nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
var previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
var moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
var useUtilityClasses12 = (ownerState) => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ["root", vertical && "vertical"],
    scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
    flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
    scrollableX: [scrollableX && "scrollableX"],
    hideScrollbar: [hideScrollbar && "hideScrollbar"]
  };
  return composeClasses(slots, getTabsUtilityClass, classes);
};
var TabsRoot = styled_default("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${tabsClasses_default.scrollButtons}`]: styles2.scrollButtons
    }, {
      [`& .${tabsClasses_default.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
    }, styles2.root, ownerState.vertical && styles2.vertical];
  }
})(({
  ownerState,
  theme
}) => _extends({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, ownerState.vertical && {
  flexDirection: "column"
}, ownerState.scrollButtonsHideMobile && {
  [`& .${tabsClasses_default.scrollButtons}`]: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
var TabsScroller = styled_default("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
  }
})(({
  ownerState
}) => _extends({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, ownerState.fixed && {
  overflowX: "hidden",
  width: "100%"
}, ownerState.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, ownerState.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, ownerState.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
}));
var FlexContainer = styled_default("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
  }
})(({
  ownerState
}) => _extends({
  display: "flex"
}, ownerState.vertical && {
  flexDirection: "column"
}, ownerState.centered && {
  justifyContent: "center"
}));
var TabsIndicator = styled_default("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (props, styles2) => styles2.indicator
})(({
  ownerState,
  theme
}) => _extends({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: theme.transitions.create()
}, ownerState.indicatorColor === "primary" && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}, ownerState.indicatorColor === "secondary" && {
  backgroundColor: (theme.vars || theme).palette.secondary.main
}, ownerState.vertical && {
  height: "100%",
  width: 2,
  right: 0
}));
var TabsScrollbarSize = styled_default(ScrollbarSize)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
});
var defaultIndicatorStyle = {};
var warnedOnceTabPresent = false;
var Tabs = React18.forwardRef(function Tabs2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabs"
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = "div",
    allowScrollButtonsMobile = false,
    indicatorColor = "primary",
    onChange,
    orientation = "horizontal",
    ScrollButtonComponent = TabScrollButton_default,
    scrollButtons = "auto",
    selectionFollowsFocus,
    slots = {},
    slotProps = {},
    TabIndicatorProps = {},
    TabScrollButtonProps = {},
    textColor = "primary",
    value,
    variant = "standard",
    visibleScrollbar = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const scrollable = variant === "scrollable";
  const vertical = orientation === "vertical";
  const scrollStart = vertical ? "scrollTop" : "scrollLeft";
  const start = vertical ? "top" : "left";
  const end = vertical ? "bottom" : "right";
  const clientSize = vertical ? "clientHeight" : "clientWidth";
  const size = vertical ? "height" : "width";
  const ownerState = _extends({}, props, {
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  });
  const classes = useUtilityClasses12(ownerState);
  const startScrollButtonIconProps = useSlotProps({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = useSlotProps({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  if (true) {
    if (centered && scrollable) {
      console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
    }
  }
  const [mounted, setMounted] = React18.useState(false);
  const [indicatorStyle, setIndicatorStyle] = React18.useState(defaultIndicatorStyle);
  const [displayStartScroll, setDisplayStartScroll] = React18.useState(false);
  const [displayEndScroll, setDisplayEndScroll] = React18.useState(false);
  const [updateScrollObserver, setUpdateScrollObserver] = React18.useState(false);
  const [scrollerStyle, setScrollerStyle] = React18.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  });
  const valueToIndex = /* @__PURE__ */ new Map();
  const tabsRef = React18.useRef(null);
  const tabListRef = React18.useRef(null);
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, isRtl ? "rtl" : "ltr"),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children2 = tabListRef.current.children;
      if (children2.length > 0) {
        const tab = children2[valueToIndex.get(value)];
        if (true) {
          if (!tab) {
            console.error([`MUI: The \`value\` provided to the Tabs component is invalid.`, `None of the Tabs' children match with "${value}".`, valueToIndex.keys ? `You can provide one of the following values: ${Array.from(valueToIndex.keys()).join(", ")}.` : null].join("\n"));
          }
        }
        tabMeta = tab ? tab.getBoundingClientRect() : null;
        if (true) {
          if (!warnedOnceTabPresent && tabMeta && tabMeta.width === 0 && tabMeta.height === 0 && // if the whole Tabs component is hidden, don't warn
          tabsMeta.clientWidth !== 0) {
            tabsMeta = null;
            console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${value}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join("\n"));
            warnedOnceTabPresent = true;
          }
        }
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = useEventCallback_default(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = "top";
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? "right" : "left";
      if (tabMeta && tabsMeta) {
        const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };
    if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children2 = Array.from(tabListRef.current.children);
    for (let i = 0; i < children2.length; i += 1) {
      const tab = children2[i];
      if (totalSize + tab[clientSize] > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };
  const handleScrollbarSizeChange = React18.useCallback((scrollbarWidth) => {
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, []);
  const getConditionalElements = () => {
    const conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? (0, import_jsx_runtime20.jsx)(TabsScrollbarSize, {
      onChange: handleScrollbarSizeChange,
      className: clsx_default(classes.scrollableX, classes.hideScrollbar)
    }) : null;
    const scrollButtonsActive = displayStartScroll || displayEndScroll;
    const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
    conditionalElements2.scrollButtonStart = showScrollButtons ? (0, import_jsx_runtime20.jsx)(ScrollButtonComponent, _extends({
      slots: {
        StartScrollButtonIcon: slots.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps
      },
      orientation,
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayStartScroll
    }, TabScrollButtonProps, {
      className: clsx_default(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? (0, import_jsx_runtime20.jsx)(ScrollButtonComponent, _extends({
      slots: {
        EndScrollButtonIcon: slots.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: endScrollButtonIconProps
      },
      orientation,
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayEndScroll
    }, TabScrollButtonProps, {
      className: clsx_default(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    return conditionalElements2;
  };
  const scrollSelectedIntoView = useEventCallback_default((animation) => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = useEventCallback_default(() => {
    if (scrollable && scrollButtons !== false) {
      setUpdateScrollObserver(!updateScrollObserver);
    }
  });
  React18.useEffect(() => {
    const handleResize = debounce_default(() => {
      if (tabsRef.current) {
        updateIndicatorState();
      }
    });
    let resizeObserver;
    const handleMutation = (records) => {
      records.forEach((record) => {
        record.removedNodes.forEach((item) => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.unobserve(item);
        });
        record.addedNodes.forEach((item) => {
          var _resizeObserver2;
          (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.observe(item);
        });
      });
      handleResize();
      updateScrollButtonState();
    };
    const win = ownerWindow_default(tabsRef.current);
    win.addEventListener("resize", handleResize);
    let mutationObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }
    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabListRef.current, {
        childList: true
      });
    }
    return () => {
      var _mutationObserver, _resizeObserver3;
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
      (_mutationObserver = mutationObserver) == null || _mutationObserver.disconnect();
      (_resizeObserver3 = resizeObserver) == null || _resizeObserver3.disconnect();
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  React18.useEffect(() => {
    const tabListChildren = Array.from(tabListRef.current.children);
    const length = tabListChildren.length;
    if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
      const firstTab = tabListChildren[0];
      const lastTab = tabListChildren[length - 1];
      const observerOptions = {
        root: tabsRef.current,
        threshold: 0.99
      };
      const handleScrollButtonStart = (entries) => {
        setDisplayStartScroll(!entries[0].isIntersecting);
      };
      const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
      firstObserver.observe(firstTab);
      const handleScrollButtonEnd = (entries) => {
        setDisplayEndScroll(!entries[0].isIntersecting);
      };
      const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
      lastObserver.observe(lastTab);
      return () => {
        firstObserver.disconnect();
        lastObserver.disconnect();
      };
    }
    return void 0;
  }, [scrollable, scrollButtons, updateScrollObserver, childrenProp == null ? void 0 : childrenProp.length]);
  React18.useEffect(() => {
    setMounted(true);
  }, []);
  React18.useEffect(() => {
    updateIndicatorState();
  });
  React18.useEffect(() => {
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  React18.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const indicator = (0, import_jsx_runtime20.jsx)(TabsIndicator, _extends({}, TabIndicatorProps, {
    className: clsx_default(classes.indicator, TabIndicatorProps.className),
    ownerState,
    style: _extends({}, indicatorStyle, TabIndicatorProps.style)
  }));
  let childIndex = 0;
  const children = React18.Children.map(childrenProp, (child) => {
    if (!React18.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    const childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return React18.cloneElement(child, _extends({
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });
  const handleKeyDown = (event) => {
    const list = tabListRef.current;
    const currentFocus = ownerDocument_default(list).activeElement;
    const role = currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
      default:
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  return (0, import_jsx_runtime21.jsxs)(TabsRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    as: component
  }, other, {
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, (0, import_jsx_runtime21.jsxs)(TabsScroller, {
      className: classes.scroller,
      ownerState,
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
      },
      ref: tabsRef,
      children: [(0, import_jsx_runtime20.jsx)(FlexContainer, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === "vertical" ? "vertical" : null,
        className: classes.flexContainer,
        ownerState,
        onKeyDown: handleKeyDown,
        ref: tabListRef,
        role: "tablist",
        children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  }));
});
true ? Tabs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: refType_default,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: import_prop_types14.default.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": import_prop_types14.default.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": import_prop_types14.default.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: import_prop_types14.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types14.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types14.default.object,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types14.default.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["primary", "secondary"]), import_prop_types14.default.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: import_prop_types14.default.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types14.default.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @default TabScrollButton
   */
  ScrollButtonComponent: import_prop_types14.default.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: import_prop_types14.default.oneOf(["auto", false, true]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types14.default.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    endScrollButtonIcon: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
    startScrollButtonIcon: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    EndScrollButtonIcon: import_prop_types14.default.elementType,
    StartScrollButtonIcon: import_prop_types14.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * Props applied to the tab indicator element.
   * @default  {}
   */
  TabIndicatorProps: import_prop_types14.default.object,
  /**
   * Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.
   * @default {}
   */
  TabScrollButtonProps: import_prop_types14.default.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: import_prop_types14.default.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: import_prop_types14.default.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: import_prop_types14.default.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: import_prop_types14.default.bool
} : void 0;
var Tabs_default = Tabs;

export {
  Popper_default,
  getChipUtilityClass,
  chipClasses_default,
  Chip_default,
  getDialogUtilityClass,
  dialogClasses_default,
  DialogContext_default,
  Dialog_default,
  getDialogActionsUtilityClass,
  dialogActionsClasses_default,
  DialogActions_default,
  getDialogContentUtilityClass,
  dialogContentClasses_default,
  getDialogTitleUtilityClass,
  dialogTitleClasses_default,
  DialogContent_default,
  getInputAdornmentUtilityClass,
  inputAdornmentClasses_default,
  InputAdornment_default,
  getListItemUtilityClass,
  listItemClasses_default,
  getListItemButtonUtilityClass,
  listItemButtonClasses_default,
  ListItemButton_default,
  getListItemSecondaryActionClassesUtilityClass,
  listItemSecondaryActionClasses_default,
  ListItemSecondaryAction_default,
  ListItem_default,
  getSkeletonUtilityClass,
  skeletonClasses_default,
  Skeleton_default,
  getTabUtilityClass,
  tabClasses_default,
  Tab_default,
  KeyboardArrowLeft_default,
  KeyboardArrowRight_default,
  getTabScrollButtonUtilityClass,
  tabScrollButtonClasses_default,
  TabScrollButton_default,
  getTabsUtilityClass,
  tabsClasses_default,
  Tabs_default
};
//# sourceMappingURL=chunk-NX5GLQHG.js.map
