import {
  buildWarning
} from "./chunk-BRAU7EQW.js";
import {
  Chip_default,
  DialogActions_default,
  DialogContent_default,
  Dialog_default,
  InputAdornment_default,
  ListItem_default,
  Popper_default,
  Skeleton_default,
  Tab_default,
  Tabs_default,
  dialogClasses_default,
  tabsClasses_default
} from "./chunk-NX5GLQHG.js";
import {
  Divider_default,
  MenuItem_default
} from "./chunk-ABRGYZO5.js";
import {
  init_utils as init_utils2
} from "./chunk-BSBTQA2M.js";
import "./chunk-7K6XRDIJ.js";
import "./chunk-FZ5MLTNA.js";
import {
  IconButton_default
} from "./chunk-T6MPKMYX.js";
import {
  Typography_default
} from "./chunk-AM4IHHOA.js";
import {
  Button_default
} from "./chunk-YZKB25UR.js";
import {
  ButtonBase_default
} from "./chunk-4D4FENKF.js";
import "./chunk-BRTASHKR.js";
import {
  FormHelperText_default,
  InputLabel_default,
  TextField_default
} from "./chunk-U6YXO5WN.js";
import {
  FormControl_default
} from "./chunk-T5MMYPRO.js";
import {
  useFormControl
} from "./chunk-NEKCA5A6.js";
import "./chunk-J7RJBHVI.js";
import "./chunk-5257YTUV.js";
import {
  createSvgIcon
} from "./chunk-MF6RUNN4.js";
import {
  Fade_default,
  FocusTrap,
  Grow_default,
  List_default,
  MenuList_default
} from "./chunk-RBIARKQH.js";
import "./chunk-ZG3B4N3V.js";
import {
  resolveComponentProps,
  useSlotProps
} from "./chunk-IEEQMG5A.js";
import "./chunk-FENIWXKA.js";
import "./chunk-2KQHIAJ3.js";
import {
  Paper_default
} from "./chunk-6JNA5JJT.js";
import "./chunk-W3VT5O72.js";
import {
  useTheme
} from "./chunk-IRTHEGP3.js";
import "./chunk-L3BY6JXB.js";
import {
  CSSTransition_default,
  TransitionGroup_default
} from "./chunk-6KVWQNYG.js";
import "./chunk-I2CNTU4K.js";
import {
  styled_default
} from "./chunk-S4GGNAYQ.js";
import "./chunk-NC4WGRV6.js";
import "./chunk-QYP5SUGL.js";
import {
  alpha,
  shouldForwardProp,
  useMediaQuery
} from "./chunk-HALJ2GSW.js";
import {
  init_useControlled,
  init_useEnhancedEffect,
  init_useEventCallback,
  init_useForkRef,
  init_useId,
  init_utils,
  init_visuallyHidden,
  ownerDocument,
  refType_default,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId,
  visuallyHidden_default
} from "./chunk-HFE4C4YO.js";
import {
  _objectWithoutPropertiesLoose,
  capitalize,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_capitalize,
  init_clsx,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  require_jsx_runtime,
  require_prop_types,
  useThemeProps2 as useThemeProps,
  useTheme_default
} from "./chunk-YT7GON2M.js";
import {
  _extends,
  init_extends
} from "./chunk-64I7CHGY.js";
import {
  require_react
} from "./chunk-7IKHB6XJ.js";
import {
  __toESM
} from "./chunk-GFT2G5UO.js";

// node_modules/@mui/x-date-pickers/TimeClock/TimeClock.js
init_extends();
init_objectWithoutPropertiesLoose();
var React13 = __toESM(require_react());
init_clsx();
var import_prop_types2 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js
init_extends();
var React2 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["localeText"];
var MuiPickersAdapterContext = React.createContext(null);
if (true) {
  MuiPickersAdapterContext.displayName = "MuiPickersAdapterContext";
}
var LocalizationProvider = function LocalizationProvider2(inProps) {
  const {
    localeText: inLocaleText
  } = inProps, otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded);
  const {
    utils: parentUtils,
    localeText: parentLocaleText
  } = React.useContext(MuiPickersAdapterContext) ?? {
    utils: void 0,
    localeText: void 0
  };
  const props = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: "MuiLocalizationProvider"
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = React.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const utils = React.useMemo(() => {
    if (!DateAdapter) {
      if (parentUtils) {
        return parentUtils;
      }
      return null;
    }
    const adapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!adapter.isMUIAdapter) {
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    }
    return adapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
  const defaultDates = React.useMemo(() => {
    if (!utils) {
      return null;
    }
    return {
      minDate: utils.date("1900-01-01T00:00:00.000"),
      maxDate: utils.date("2099-12-31T00:00:00.000")
    };
  }, [utils]);
  const contextValue = React.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText
    };
  }, [defaultDates, utils, localeText]);
  return (0, import_jsx_runtime.jsx)(MuiPickersAdapterContext.Provider, {
    value: contextValue,
    children
  });
};
true ? LocalizationProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: import_prop_types.default.any,
  children: import_prop_types.default.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: import_prop_types.default.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: import_prop_types.default.shape({
    dayOfMonth: import_prop_types.default.string,
    dayOfMonthFull: import_prop_types.default.string,
    fullDate: import_prop_types.default.string,
    fullTime: import_prop_types.default.string,
    fullTime12h: import_prop_types.default.string,
    fullTime24h: import_prop_types.default.string,
    hours12h: import_prop_types.default.string,
    hours24h: import_prop_types.default.string,
    keyboardDate: import_prop_types.default.string,
    keyboardDateTime: import_prop_types.default.string,
    keyboardDateTime12h: import_prop_types.default.string,
    keyboardDateTime24h: import_prop_types.default.string,
    meridiem: import_prop_types.default.string,
    minutes: import_prop_types.default.string,
    month: import_prop_types.default.string,
    monthShort: import_prop_types.default.string,
    normalDate: import_prop_types.default.string,
    normalDateWithWeekday: import_prop_types.default.string,
    seconds: import_prop_types.default.string,
    shortDate: import_prop_types.default.string,
    weekday: import_prop_types.default.string,
    weekdayShort: import_prop_types.default.string,
    year: import_prop_types.default.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: import_prop_types.default.any,
  /**
   * Locale for components texts
   */
  localeText: import_prop_types.default.object
} : void 0;

// node_modules/@mui/x-date-pickers/locales/utils/getPickersLocalization.js
init_extends();
var getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};

// node_modules/@mui/x-date-pickers/locales/enUS.js
var enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? "No time selected" : `Selected time is ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: (view) => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose date, selected date is ${utils.format(value, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose time, selected time is ${utils.format(value, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear value",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
};
var DEFAULT_LOCALE = enUSPickers;
var enUS = getPickersLocalization(enUSPickers);

// node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js
var useLocalizationContext = () => {
  const localization = React2.useContext(MuiPickersAdapterContext);
  if (localization === null) {
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.utils === null) {
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = React2.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return React2.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
var useUtils = () => useLocalizationContext().utils;
var useDefaultDates = () => useLocalizationContext().defaultDates;
var useLocaleText = () => useLocalizationContext().localeText;
var useNow = (timezone) => {
  const utils = useUtils();
  const now = React2.useRef();
  if (now.current === void 0) {
    now.current = utils.date(void 0, timezone);
  }
  return now.current;
};

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
init_extends();
init_objectWithoutPropertiesLoose();
var React4 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/icons/index.js
init_utils2();
var React3 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var ArrowDropDownIcon = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
var ArrowLeftIcon = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft");
var ArrowRightIcon = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight");
var CalendarIcon = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
var ClockIcon = createSvgIcon((0, import_jsx_runtime2.jsxs)(React3.Fragment, {
  children: [(0, import_jsx_runtime2.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime2.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
var DateRangeIcon = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
var TimeIcon = createSvgIcon((0, import_jsx_runtime2.jsxs)(React3.Fragment, {
  children: [(0, import_jsx_runtime2.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime2.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
var ClearIcon = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js
init_utils();
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
var pickersArrowSwitcherClasses = generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"];
var _excluded22 = ["ownerState"];
var _excluded3 = ["ownerState"];
var PickersArrowSwitcherRoot = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex"
});
var PickersArrowSwitcherSpacer = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
var PickersArrowSwitcherButton = styled_default(IconButton_default, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})({
  variants: [{
    props: {
      hidden: true
    },
    style: {
      visibility: "hidden"
    }
  }]
});
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
var PickersArrowSwitcher = React4.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = (slots == null ? void 0 : slots.previousIconButton) ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: previousProps.isHidden
    }),
    className: classes.button
  });
  const NextIconButton = (slots == null ? void 0 : slots.nextIconButton) ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: nextProps.isHidden
    }),
    className: classes.button
  });
  const LeftArrowIcon = (slots == null ? void 0 : slots.leftArrowIcon) ?? ArrowLeftIcon;
  const _useSlotProps = useSlotProps({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded22);
  const RightArrowIcon = (slots == null ? void 0 : slots.rightArrowIcon) ?? ArrowRightIcon;
  const _useSlotProps2 = useSlotProps({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3);
  return (0, import_jsx_runtime3.jsxs)(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime3.jsx)(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRTL ? (0, import_jsx_runtime3.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) : (0, import_jsx_runtime3.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? (0, import_jsx_runtime3.jsx)(Typography_default, {
      variant: "subtitle1",
      component: "span",
      children
    }) : (0, import_jsx_runtime3.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), (0, import_jsx_runtime3.jsx)(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRTL ? (0, import_jsx_runtime3.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) : (0, import_jsx_runtime3.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});

// node_modules/@mui/x-date-pickers/internals/utils/views.js
var areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every((expectedView) => views.includes(expectedView));
};
var applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI X: The `views` prop must contain at least one view.");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};

// node_modules/@mui/x-date-pickers/internals/utils/time-utils.js
var timeViews = ["hours", "minutes", "seconds"];
var isTimeView = (view) => timeViews.includes(view);
var isInternalTimeView = (view) => timeViews.includes(view) || view === "meridiem";
var getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? "pm" : "am";
};
var convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }
  return value;
};
var convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
var getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
var createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
var resolveTimeFormat = (utils, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ["hours"])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ["minutes"])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ["seconds"])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ["minutes", "seconds"])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ["hours", "minutes", "seconds"])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};

// node_modules/@mui/x-date-pickers/internals/hooks/useViews.js
var React5 = __toESM(require_react());
init_useEventCallback();
init_utils();
var warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange
}) {
  if (true) {
    if (!warnedOnceNotValidView) {
      if (inView != null && !views.includes(inView)) {
        console.warn(`MUI X: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
      if (inView == null && openTo != null && !views.includes(openTo)) {
        console.warn(`MUI X: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
    }
  }
  const previousOpenTo = React5.useRef(openTo);
  const previousViews = React5.useRef(views);
  const defaultView = React5.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = React5.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  React5.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = useEventCallback_default((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange == null ? void 0 : onFocusedViewChange(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback_default((newView) => {
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback_default(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback_default((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const hasMoreViews = selectedView ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      views.indexOf(selectedView) < views.length - 1
    ) : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);
    if (selectedView && selectedView !== view) {
      const nextViewAfterSelected = views[views.indexOf(selectedView) + 1];
      if (nextViewAfterSelected) {
        handleChangeView(nextViewAfterSelected);
      }
    } else if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  return {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  };
}

// node_modules/@mui/x-date-pickers/internals/hooks/date-helpers-hooks.js
var React6 = __toESM(require_react());
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const utils = useUtils();
  return React6.useMemo(() => {
    const now = utils.date(void 0, timezone);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const utils = useUtils();
  return React6.useMemo(() => {
    const now = utils.date(void 0, timezone);
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const utils = useUtils();
  const meridiemMode = getMeridiem(date, utils);
  const handleMeridiemChange = React6.useCallback((mode) => {
    const timeWithMeridiem = date == null ? null : convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, selectionState ?? "partial");
  }, [ampm, date, onChange, selectionState, utils]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}

// node_modules/@mui/x-date-pickers/internals/constants/dimensions.js
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var DIALOG_WIDTH = 320;
var MAX_CALENDAR_HEIGHT = 280;
var VIEW_HEIGHT = 336;
var DIGITAL_CLOCK_VIEW_HEIGHT = 232;
var MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;

// node_modules/@mui/x-date-pickers/internals/components/PickerViewRoot/PickerViewRoot.js
var PickerViewRoot = styled_default("div")({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});

// node_modules/@mui/x-date-pickers/TimeClock/timeClockClasses.js
init_utils();
function getTimeClockUtilityClass(slot) {
  return generateUtilityClass("MuiTimeClock", slot);
}
var timeClockClasses = generateUtilityClasses("MuiTimeClock", ["root", "arrowSwitcher"]);

// node_modules/@mui/x-date-pickers/TimeClock/Clock.js
var React8 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/TimeClock/ClockPointer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React7 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/TimeClock/shared.js
var CLOCK_WIDTH = 220;
var CLOCK_HOUR_WIDTH = 36;
var clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;
var rad2deg = (rad) => rad * (180 / Math.PI);
var getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
var getMinutes = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
var getHours = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};

// node_modules/@mui/x-date-pickers/TimeClock/clockPointerClasses.js
init_utils();
function getClockPointerUtilityClass(slot) {
  return generateUtilityClass("MuiClockPointer", slot);
}
var clockPointerClasses = generateUtilityClasses("MuiClockPointer", ["root", "thumb"]);

// node_modules/@mui/x-date-pickers/TimeClock/ClockPointer.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded4 = ["className", "hasSelected", "isInner", "type", "viewValue"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    thumb: ["thumb"]
  };
  return composeClasses(slots, getClockPointerUtilityClass, classes);
};
var ClockPointerRoot = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  left: "calc(50% - 1px)",
  bottom: "50%",
  transformOrigin: "center bottom 0px",
  variants: [{
    props: {
      shouldAnimate: true
    },
    style: {
      transition: theme.transitions.create(["transform", "height"])
    }
  }]
}));
var ClockPointerThumb = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Thumb",
  overridesResolver: (_, styles) => styles.thumb
})(({
  theme
}) => ({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: "50%",
  position: "absolute",
  top: -21,
  left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: "content-box",
  variants: [{
    props: {
      hasSelected: true
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }]
}));
function ClockPointer(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockPointer"
  });
  const {
    className,
    isInner,
    type,
    viewValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const previousType = React7.useRef(type);
  React7.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const ownerState = _extends({}, props, {
    shouldAnimate: previousType.current !== type
  });
  const classes = useUtilityClasses2(ownerState);
  const getAngleStyle = () => {
    const max = type === "hours" ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === "hours" && viewValue > 12) {
      angle -= 360;
    }
    return {
      height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return (0, import_jsx_runtime4.jsx)(ClockPointerRoot, _extends({
    style: getAngleStyle(),
    className: clsx_default(className, classes.root),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime4.jsx)(ClockPointerThumb, {
      ownerState,
      className: classes.thumb
    })
  }));
}

// node_modules/@mui/x-date-pickers/TimeClock/clockClasses.js
init_utils();
function getClockUtilityClass(slot) {
  return generateUtilityClass("MuiClock", slot);
}
var clockClasses = generateUtilityClasses("MuiClock", ["root", "clock", "wrapper", "squareMask", "pin", "amButton", "pmButton", "meridiemText"]);

// node_modules/@mui/x-date-pickers/internals/utils/date-utils.js
var mergeDateAndTime = (utils, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  return mergedDate;
};
var findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  utils,
  timezone
}) => {
  const today = mergeDateAndTime(utils, utils.date(void 0, timezone), date);
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
var replaceInvalidDateByNull = (utils, value) => value == null || !utils.isValid(value) ? null : value;
var applyDefaultDate = (utils, value, defaultValue) => {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
var areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
var getMonthsInYear = (utils, year) => {
  const firstMonth = utils.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
var getTodayDate = (utils, timezone, valueType) => valueType === "date" ? utils.startOfDay(utils.date(void 0, timezone)) : utils.date(void 0, timezone);
var formatMeridiem = (utils, meridiem) => {
  const date = utils.setHours(utils.date(), meridiem === "am" ? 2 : 14);
  return utils.format(date, "meridiem");
};
var dateViews = ["year", "month", "day"];
var isDatePickerView = (view) => dateViews.includes(view);
var resolveDateFormat = (utils, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ["year"])) {
    return formats.year;
  }
  if (areViewsEqual(views, ["month"])) {
    return formats.month;
  }
  if (areViewsEqual(views, ["day"])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ["month", "year"])) {
    return `${formats.month} ${formats.year}`;
  }
  if (areViewsEqual(views, ["day", "month"])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    return /en/.test(utils.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
var getWeekdays = (utils, date) => {
  const start = utils.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map((diff) => utils.addDays(start, diff));
};

// node_modules/@mui/x-date-pickers/TimeClock/Clock.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var useUtilityClasses3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    clock: ["clock"],
    wrapper: ["wrapper"],
    squareMask: ["squareMask"],
    pin: ["pin"],
    amButton: ["amButton"],
    pmButton: ["pmButton"],
    meridiemText: ["meridiemText"]
  };
  return composeClasses(slots, getClockUtilityClass, classes);
};
var ClockRoot = styled_default("div", {
  name: "MuiClock",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2)
}));
var ClockClock = styled_default("div", {
  name: "MuiClock",
  slot: "Clock",
  overridesResolver: (_, styles) => styles.clock
})({
  backgroundColor: "rgba(0,0,0,.07)",
  borderRadius: "50%",
  height: 220,
  width: 220,
  flexShrink: 0,
  position: "relative",
  pointerEvents: "none"
});
var ClockWrapper = styled_default("div", {
  name: "MuiClock",
  slot: "Wrapper",
  overridesResolver: (_, styles) => styles.wrapper
})({
  "&:focus": {
    outline: "none"
  }
});
var ClockSquareMask = styled_default("div", {
  name: "MuiClock",
  slot: "SquareMask",
  overridesResolver: (_, styles) => styles.squareMask
})({
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  outline: 0,
  // Disable scroll capabilities.
  touchAction: "none",
  userSelect: "none",
  variants: [{
    props: {
      disabled: false
    },
    style: {
      "@media (pointer: fine)": {
        cursor: "pointer",
        borderRadius: "50%"
      },
      "&:active": {
        cursor: "move"
      }
    }
  }]
});
var ClockPin = styled_default("div", {
  name: "MuiClock",
  slot: "Pin",
  overridesResolver: (_, styles) => styles.pin
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));
var ClockAmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "AmButton",
  overridesResolver: (_, styles) => styles.amButton
})(({
  theme
}) => ({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  left: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: CLOCK_HOUR_WIDTH,
  variants: [{
    props: {
      meridiemMode: "am"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main,
      color: (theme.vars || theme).palette.primary.contrastText,
      "&:hover": {
        backgroundColor: (theme.vars || theme).palette.primary.light
      }
    }
  }]
}));
var ClockPmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "PmButton",
  overridesResolver: (_, styles) => styles.pmButton
})(({
  theme
}) => ({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  right: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: CLOCK_HOUR_WIDTH,
  variants: [{
    props: {
      meridiemMode: "pm"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main,
      color: (theme.vars || theme).palette.primary.contrastText,
      "&:hover": {
        backgroundColor: (theme.vars || theme).palette.primary.light
      }
    }
  }]
}));
var ClockMeridiemText = styled_default(Typography_default, {
  name: "MuiClock",
  slot: "meridiemText",
  overridesResolver: (_, styles) => styles.meridiemText
})({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
function Clock(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClock"
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    disabled = false,
    readOnly,
    className
  } = props;
  const ownerState = props;
  const utils = useUtils();
  const localeText = useLocaleText();
  const isMoving = React8.useRef(false);
  const classes = useUtilityClasses3(ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === "hours" && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === void 0) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === "seconds" || type === "minutes" ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchMove = (event) => {
    isMoving.current = true;
    setTime(event, "shallow");
  };
  const handleTouchEnd = (event) => {
    if (isMoving.current) {
      setTime(event, "finish");
      isMoving.current = false;
    }
  };
  const handleMouseMove = (event) => {
    if (event.buttons > 0) {
      setTime(event.nativeEvent, "shallow");
    }
  };
  const handleMouseUp = (event) => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, "finish");
  };
  const hasSelected = React8.useMemo(() => {
    if (type === "hours") {
      return true;
    }
    return viewValue % 5 === 0;
  }, [type, viewValue]);
  const keyboardControlStep = type === "minutes" ? minutesStep : 1;
  const listboxRef = React8.useRef(null);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const handleKeyDown = (event) => {
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case "Home":
        handleValueChange(0, "partial");
        event.preventDefault();
        break;
      case "End":
        handleValueChange(type === "minutes" ? 59 : 23, "partial");
        event.preventDefault();
        break;
      case "ArrowUp":
        handleValueChange(viewValue + keyboardControlStep, "partial");
        event.preventDefault();
        break;
      case "ArrowDown":
        handleValueChange(viewValue - keyboardControlStep, "partial");
        event.preventDefault();
        break;
      default:
    }
  };
  return (0, import_jsx_runtime5.jsxs)(ClockRoot, {
    className: clsx_default(className, classes.root),
    children: [(0, import_jsx_runtime5.jsxs)(ClockClock, {
      className: classes.clock,
      children: [(0, import_jsx_runtime5.jsx)(ClockSquareMask, {
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState: {
          disabled
        },
        className: classes.squareMask
      }), !isSelectedTimeDisabled && (0, import_jsx_runtime5.jsxs)(React8.Fragment, {
        children: [(0, import_jsx_runtime5.jsx)(ClockPin, {
          className: classes.pin
        }), value != null && (0, import_jsx_runtime5.jsx)(ClockPointer, {
          type,
          viewValue,
          isInner: isPointerInner,
          hasSelected
        })]
      }), (0, import_jsx_runtime5.jsx)(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": localeText.clockLabelText(type, value, utils),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children
      })]
    }), ampm && ampmInClock && (0, import_jsx_runtime5.jsxs)(React8.Fragment, {
      children: [(0, import_jsx_runtime5.jsx)(ClockAmButton, {
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled: disabled || meridiemMode === null,
        ownerState,
        className: classes.amButton,
        title: formatMeridiem(utils, "am"),
        children: (0, import_jsx_runtime5.jsx)(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(utils, "am")
        })
      }), (0, import_jsx_runtime5.jsx)(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        ownerState,
        className: classes.pmButton,
        title: formatMeridiem(utils, "pm"),
        children: (0, import_jsx_runtime5.jsx)(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(utils, "pm")
        })
      })]
    })]
  });
}

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumbers.js
var React10 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumber.js
init_objectWithoutPropertiesLoose();
init_extends();
var React9 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/TimeClock/clockNumberClasses.js
init_utils();
function getClockNumberUtilityClass(slot) {
  return generateUtilityClass("MuiClockNumber", slot);
}
var clockNumberClasses = generateUtilityClasses("MuiClockNumber", ["root", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumber.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded5 = ["className", "disabled", "index", "inner", "label", "selected"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, getClockNumberUtilityClass, classes);
};
var ClockNumberRoot = styled_default("span", {
  name: "MuiClockNumber",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${clockNumberClasses.disabled}`]: styles.disabled
  }, {
    [`&.${clockNumberClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: "absolute",
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  "&:focused": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${clockNumberClasses.disabled}`]: {
    pointerEvents: "none",
    color: (theme.vars || theme).palette.text.disabled
  },
  variants: [{
    props: {
      inner: true
    },
    style: _extends({}, theme.typography.body2, {
      color: (theme.vars || theme).palette.text.secondary
    })
  }]
}));
function ClockNumber(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockNumber"
  });
  const {
    className,
    disabled,
    index,
    inner,
    label,
    selected
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = props;
  const classes = useUtilityClasses4(ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return (0, import_jsx_runtime6.jsx)(ClockNumberRoot, _extends({
    className: clsx_default(className, classes.root),
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": selected ? true : void 0,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState
  }, other, {
    children: label
  }));
}

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumbers.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  utils
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = (hour) => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = "00";
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = utils.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push((0, import_jsx_runtime7.jsx)(ClockNumber, {
      id: selected ? selectedId : void 0,
      index: hour,
      inner,
      selected,
      disabled: isDisabled(hour),
      label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
var getMinutesNumbers = ({
  utils,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = utils.formatNumber;
  return [[5, f("05")], [10, f("10")], [15, f("15")], [20, f("20")], [25, f("25")], [30, f("30")], [35, f("35")], [40, f("40")], [45, f("45")], [50, f("50")], [55, f("55")], [0, f("00")]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return (0, import_jsx_runtime7.jsx)(ClockNumber, {
      label,
      id: selected ? selectedId : void 0,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};

// node_modules/@mui/x-date-pickers/internals/hooks/useValueWithTimezone.js
var React11 = __toESM(require_react());
init_useEventCallback();
init_useControlled();
var useValueWithTimezone = ({
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange,
  valueManager
}) => {
  const utils = useUtils();
  const firstDefaultValue = React11.useRef(defaultValue);
  const inputValue = valueProp ?? firstDefaultValue.current ?? valueManager.emptyValue;
  const inputTimezone = React11.useMemo(() => valueManager.getTimezone(utils, inputValue), [utils, valueManager, inputValue]);
  const setInputTimezone = useEventCallback_default((newValue) => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  const timezoneToRender = timezoneProp ?? inputTimezone ?? "default";
  const valueWithTimezoneToRender = React11.useMemo(() => valueManager.setTimezone(utils, timezoneToRender, inputValue), [valueManager, utils, timezoneToRender, inputValue]);
  const handleValueChange = useEventCallback_default((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    onChange == null ? void 0 : onChange(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};
var useControlledValueWithTimezone = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  valueManager
}) => {
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: "value",
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const onChange = useEventCallback_default((newValue, ...otherParams) => {
    setValue(newValue);
    onChangeProp == null ? void 0 : onChangeProp(newValue, ...otherParams);
  });
  return useValueWithTimezone({
    timezone: timezoneProp,
    value: valueWithInputTimezone,
    defaultValue: void 0,
    onChange,
    valueManager
  });
};

// node_modules/@mui/x-date-pickers/internals/utils/valueManagers.js
init_objectWithoutPropertiesLoose();

// node_modules/@mui/x-date-pickers/internals/utils/getDefaultReferenceDate.js
var SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
var getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
var roundDate = (utils, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
var getDefaultReferenceDate = ({
  props,
  utils,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, getTodayDate(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.utils.js
var getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
var getDeltaFromKeyCode = (keyCode) => {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
};
var getDaysInWeekStr = (utils, timezone, format) => {
  const elements = [];
  const now = utils.date(void 0, timezone);
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map((weekDay) => utils.formatByString(weekDay, format));
};
var getLetterEditingOptions = (utils, timezone, sectionType, format) => {
  switch (sectionType) {
    case "month": {
      return getMonthsInYear(utils, utils.date(void 0, timezone)).map((month) => utils.formatByString(month, format));
    }
    case "weekDay": {
      return getDaysInWeekStr(utils, timezone, format);
    }
    case "meridiem": {
      const now = utils.date(void 0, timezone);
      return [utils.startOfDay(now), utils.endOfDay(now)].map((date) => utils.formatByString(date, format));
    }
    default: {
      return [];
    }
  }
};
var FORMAT_SECONDS_NO_LEADING_ZEROS = "s";
var NON_LOCALIZED_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var getLocalizedDigits = (utils) => {
  const today = utils.date(void 0);
  const formattedZero = utils.formatByString(utils.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
  if (formattedZero === "0") {
    return NON_LOCALIZED_DIGITS;
  }
  return Array.from({
    length: 10
  }).map((_, index) => utils.formatByString(utils.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
var removeLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  const digits = [];
  let currentFormattedDigit = "";
  for (let i = 0; i < valueStr.length; i += 1) {
    currentFormattedDigit += valueStr[i];
    const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
    if (matchingDigitIndex > -1) {
      digits.push(matchingDigitIndex.toString());
      currentFormattedDigit = "";
    }
  }
  return digits.join("");
};
var applyLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  return valueStr.split("").map((char) => localizedDigits[Number(char)]).join("");
};
var isStringNumber = (valueStr, localizedDigits) => {
  const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
  return !Number.isNaN(Number(nonLocalizedValueStr));
};
var cleanLeadingZeros = (valueStr, size) => {
  let cleanValueStr = valueStr;
  cleanValueStr = Number(cleanValueStr).toString();
  while (cleanValueStr.length < size) {
    cleanValueStr = `0${cleanValueStr}`;
  }
  return cleanValueStr;
};
var cleanDigitSectionValue = (utils, value, sectionBoundaries, localizedDigits, section) => {
  if (true) {
    if (section.type !== "day" && section.contentType === "digit-with-letter") {
      throw new Error([`MUI X: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join("\n"));
    }
  }
  if (section.type === "day" && section.contentType === "digit-with-letter") {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, section.format);
  }
  let valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    valueStr = cleanLeadingZeros(valueStr, section.maxLength);
  }
  return applyLocalizedDigits(valueStr, localizedDigits);
};
var adjustSectionValue = (utils, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) => {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(utils, value, sectionBoundaries, localizedDigits, section);
    const step = section.type === "minutes" && (stepsAttributes == null ? void 0 : stepsAttributes.minutesStep) ? stepsAttributes.minutesStep : 1;
    const currentSectionValue = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10);
    let newSectionValueNumber = currentSectionValue + delta * step;
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return utils.formatByString(utils.date(void 0, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step;
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + options.length + delta) % options.length;
    return options[newOptionIndex];
  };
  if (section.contentType === "digit" || section.contentType === "digit-with-letter") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
};
var getSectionVisibleValue = (section, target, localizedDigits) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
  }
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
var changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  if (true) {
    if (getDateSectionConfigFromFormatToken(utils, currentFormat).type === "weekDay") {
      throw new Error("changeSectionValueFormat doesn't support week day formats");
    }
  }
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
var isFourDigitYearFormat = (utils, timezone, format) => utils.formatByString(utils.date(void 0, timezone), format).length === 4;
var doesSectionFormatHaveLeadingZeros = (utils, timezone, contentType, sectionType, format) => {
  if (contentType !== "digit") {
    return false;
  }
  const now = utils.date(void 0, timezone);
  switch (sectionType) {
    case "year": {
      if (isFourDigitYearFormat(utils, timezone, format)) {
        const formatted0001 = utils.formatByString(utils.setYear(now, 1), format);
        return formatted0001 === "0001";
      }
      const formatted2001 = utils.formatByString(utils.setYear(now, 2001), format);
      return formatted2001 === "01";
    }
    case "month": {
      return utils.formatByString(utils.startOfYear(now), format).length > 1;
    }
    case "day": {
      return utils.formatByString(utils.startOfMonth(now), format).length > 1;
    }
    case "weekDay": {
      return utils.formatByString(utils.startOfWeek(now), format).length > 1;
    }
    case "hours": {
      return utils.formatByString(utils.setHours(now, 1), format).length > 1;
    }
    case "minutes": {
      return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
    }
    case "seconds": {
      return utils.formatByString(utils.setSeconds(now, 1), format).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
var getDateFromDateSections = (utils, sections, localizedDigits) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input", localizedDigits));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
var createDateStrForV7HiddenInputFromSections = (sections) => sections.map((section) => {
  return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join("");
var createDateStrForV6InputFromSections = (sections, localizedDigits, isRTL) => {
  const formattedSections = sections.map((section) => {
    const dateValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr", localizedDigits);
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join("");
  if (!isRTL) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
var getSectionsBoundaries = (utils, localizedDigits, timezone) => {
  const today = utils.date(void 0, timezone);
  const endOfYear = utils.endOfYear(today);
  const endOfDay = utils.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(utils, today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, timezone, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: currentDate != null && utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(utils, timezone, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = utils.getHours(endOfDay);
      const hasMeridiem = removeLocalizedDigits(utils.formatByString(utils.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(removeLocalizedDigits(utils.formatByString(utils.startOfDay(today), format), localizedDigits))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
var warnedOnceInvalidSection = false;
var validateSections = (sections, valueType) => {
  if (true) {
    if (!warnedOnceInvalidSection) {
      const supportedSections = ["empty"];
      if (["date", "date-time"].includes(valueType)) {
        supportedSections.push("weekDay", "day", "month", "year");
      }
      if (["time", "date-time"].includes(valueType)) {
        supportedSections.push("hours", "minutes", "seconds", "meridiem");
      }
      const invalidSection = sections.find((section) => !supportedSections.includes(section.type));
      if (invalidSection) {
        console.warn(`MUI X: The field component you are using is not compatible with the "${invalidSection.type}" date section.`, `The supported date sections are ["${supportedSections.join('", "')}"]\`.`);
        warnedOnceInvalidSection = true;
      }
    }
  }
};
var transferDateSectionValue = (utils, timezone, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
    }
    case "month": {
      return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      const formattedDaysInWeek = getDaysInWeekStr(utils, timezone, section.format);
      const dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return utils.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const isAM = utils.getHours(dateToTransferFrom) < 12;
      const mergedDateHours = utils.getHours(dateToTransferTo);
      if (isAM && mergedDateHours >= 12) {
        return utils.addHours(dateToTransferTo, -12);
      }
      if (!isAM && mergedDateHours < 12) {
        return utils.addHours(dateToTransferTo, 12);
      }
      return dateToTransferTo;
    }
    case "hours": {
      return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
var reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
};
var mergeDateIntoReferenceDate = (utils, timezone, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(utils, timezone, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
var isAndroid = () => navigator.userAgent.toLowerCase().indexOf("android") > -1;
var getSectionOrder = (sections, shouldApplyRTL) => {
  const neighbors = {};
  if (!shouldApplyRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => {
        var _a;
        return index >= groupedSectionsStart && ((_a = section.endSeparator) == null ? void 0 : _a.includes(" ")) && // Special case where the spaces were not there in the initial input
        section.endSeparator !== " / ";
      }
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
var parseSelectedSections = (selectedSections, sections) => {
  if (selectedSections == null) {
    return null;
  }
  if (selectedSections === "all") {
    return "all";
  }
  if (typeof selectedSections === "string") {
    return sections.findIndex((section) => section.type === selectedSections);
  }
  return selectedSections;
};
var getSectionValueText = (section, utils) => {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "month": {
      if (section.contentType === "digit") {
        return utils.format(utils.setMonth(utils.date(), Number(section.value) - 1), "month");
      }
      const parsedDate = utils.parse(section.value, section.format);
      return parsedDate ? utils.format(parsedDate, "month") : void 0;
    }
    case "day":
      return section.contentType === "digit" ? utils.format(utils.setDate(utils.startOfYear(utils.date()), Number(section.value)), "dayOfMonthFull") : section.value;
    case "weekDay":
      return void 0;
    default:
      return void 0;
  }
};
var getSectionValueNow = (section, utils) => {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "weekDay": {
      if (section.contentType === "letter") {
        return void 0;
      }
      return Number(section.value);
    }
    case "meridiem": {
      const parsedDate = utils.parse(`01:00 ${section.value}`, `${utils.formats.hours12h}:${utils.formats.minutes} ${section.format}`);
      if (parsedDate) {
        return utils.getHours(parsedDate) >= 12 ? 1 : 0;
      }
      return void 0;
    }
    case "day":
      return section.contentType === "digit-with-letter" ? parseInt(section.value, 10) : Number(section.value);
    case "month": {
      if (section.contentType === "digit") {
        return Number(section.value);
      }
      const parsedDate = utils.parse(section.value, section.format);
      return parsedDate ? utils.getMonth(parsedDate) + 1 : void 0;
    }
    default:
      return section.contentType !== "letter" ? Number(section.value) : void 0;
  }
};

// node_modules/@mui/x-date-pickers/internals/utils/valueManagers.js
var _excluded6 = ["value", "referenceDate"];
var singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded6);
    if (value != null && params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null,
  getTimezone: (utils, value) => value == null || !utils.isValid(value) ? null : utils.getTimezone(value),
  setTimezone: (utils, timezone, value) => value == null ? null : utils.setTimezone(value, timezone)
};
var singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => value == null || !utils.isValid(value) ? prevReferenceValue : value,
  getSectionsFromValue: (utils, date, prevSections, getSectionsFromDate) => {
    const shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return getSectionsFromDate(date);
  },
  getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
  getV6InputValueFromSections: createDateStrForV6InputFromSections,
  getActiveDateManager: (utils, state) => ({
    date: state.value,
    referenceDate: state.referenceValue,
    getSections: (sections) => sections,
    getNewValuesFromNewActiveDate: (newActiveDate) => ({
      value: newActiveDate,
      referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
    })
  }),
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue)
};

// node_modules/@mui/x-date-pickers/internals/hooks/useClockReferenceDate.js
var React12 = __toESM(require_react());
var useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  utils,
  props,
  timezone
}) => {
  const referenceDate = React12.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day,
      timezone,
      getTodayDate: () => getTodayDate(utils, timezone, "date")
    }),
    // We only want to compute the reference date on mount.
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value ?? referenceDate;
};

// node_modules/@mui/x-date-pickers/TimeClock/TimeClock.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded7 = ["ampm", "ampmInClock", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "timezone"];
var useUtilityClasses5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    arrowSwitcher: ["arrowSwitcher"]
  };
  return composeClasses(slots, getTimeClockUtilityClass, classes);
};
var TimeClockRoot = styled_default(PickerViewRoot, {
  name: "MuiTimeClock",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});
var TimeClockArrowSwitcher = styled_default(PickersArrowSwitcher, {
  name: "MuiTimeClock",
  slot: "ArrowSwitcher",
  overridesResolver: (props, styles) => styles.arrowSwitcher
})({
  position: "absolute",
  right: 12,
  top: 15
});
var TIME_CLOCK_DEFAULT_VIEWS = ["hours", "minutes"];
var TimeClock = React13.forwardRef(function TimeClock2(inProps, ref) {
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    ampmInClock = false,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    showViewSwitcher,
    onChange,
    view: inView,
    views = TIME_CLOCK_DEFAULT_VIEWS,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    disabled,
    readOnly,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "TimeClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, setValueAndGoToNextView);
  const isTimeDisabled = React13.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const selectedId = useId();
  const viewProps = React13.useMemo(() => {
    switch (view) {
      case "hours": {
        const handleHoursChange = (hourValue, isFinish) => {
          const valueWithMeridiem = convertValueToMeridiem(hourValue, meridiemMode, ampm);
          setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), isFinish, "hours");
        };
        return {
          onChange: handleHoursChange,
          viewValue: utils.getHours(valueOrReferenceDate),
          children: getHourNumbers({
            value,
            utils,
            ampm,
            onChange: handleHoursChange,
            getClockNumberText: localeText.hoursClockNumberText,
            isDisabled: (hourValue) => disabled || isTimeDisabled(hourValue, "hours"),
            selectedId
          })
        };
      }
      case "minutes": {
        const minutesValue = utils.getMinutes(valueOrReferenceDate);
        const handleMinutesChange = (minuteValue, isFinish) => {
          setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minuteValue), isFinish, "minutes");
        };
        return {
          viewValue: minutesValue,
          onChange: handleMinutesChange,
          children: getMinutesNumbers({
            utils,
            value: minutesValue,
            onChange: handleMinutesChange,
            getClockNumberText: localeText.minutesClockNumberText,
            isDisabled: (minuteValue) => disabled || isTimeDisabled(minuteValue, "minutes"),
            selectedId
          })
        };
      }
      case "seconds": {
        const secondsValue = utils.getSeconds(valueOrReferenceDate);
        const handleSecondsChange = (secondValue, isFinish) => {
          setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, secondValue), isFinish, "seconds");
        };
        return {
          viewValue: secondsValue,
          onChange: handleSecondsChange,
          children: getMinutesNumbers({
            utils,
            value: secondsValue,
            onChange: handleSecondsChange,
            getClockNumberText: localeText.secondsClockNumberText,
            isDisabled: (secondValue) => disabled || isTimeDisabled(secondValue, "seconds"),
            selectedId
          })
        };
      }
      default:
        throw new Error("You must provide the type for ClockView");
    }
  }, [view, utils, value, ampm, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, selectedId, disabled]);
  const ownerState = props;
  const classes = useUtilityClasses5(ownerState);
  return (0, import_jsx_runtime8.jsxs)(TimeClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime8.jsx)(Clock, _extends({
      autoFocus: autoFocus ?? !!focusedView,
      ampmInClock: ampmInClock && views.includes("hours"),
      value,
      type: view,
      ampm,
      minutesStep,
      isTimeDisabled,
      meridiemMode,
      handleMeridiemChange,
      selectedId,
      disabled,
      readOnly
    }, viewProps)), showViewSwitcher && (0, import_jsx_runtime8.jsx)(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots,
      slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: localeText.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: localeText.openNextView,
      ownerState
    })]
  }));
});
true ? TimeClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types2.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types2.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types2.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  className: import_prop_types2.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types2.default.object,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types2.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types2.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types2.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types2.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types2.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types2.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types2.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types2.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types2.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types2.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types2.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: import_prop_types2.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types2.default.object,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types2.default.func,
  showViewSwitcher: import_prop_types2.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types2.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types2.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types2.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types2.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types2.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/DigitalClock/DigitalClock.js
init_extends();
init_objectWithoutPropertiesLoose();
var React14 = __toESM(require_react());
init_clsx();
var import_prop_types3 = __toESM(require_prop_types());
init_useEventCallback();
init_composeClasses();
init_useForkRef();

// node_modules/@mui/x-date-pickers/DigitalClock/digitalClockClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiDigitalClock", slot);
}
var digitalClockClasses = generateUtilityClasses("MuiDigitalClock", ["root", "list", "item"]);

// node_modules/@mui/x-date-pickers/DigitalClock/DigitalClock.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded8 = ["ampm", "timeStep", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
var useUtilityClasses6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    list: ["list"],
    item: ["item"]
  };
  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};
var DigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiDigitalClock",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  overflowY: "auto",
  width: "100%",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  variants: [{
    props: {
      alreadyRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
});
var DigitalClockList = styled_default(MenuList_default, {
  name: "MuiDigitalClock",
  slot: "List",
  overridesResolver: (props, styles) => styles.list
})({
  padding: 0
});
var DigitalClockItem = styled_default(MenuItem_default, {
  name: "MuiDigitalClock",
  slot: "Item",
  overridesResolver: (props, styles) => styles.item
})(({
  theme
}) => ({
  padding: "8px 16px",
  margin: "2px 4px",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var DigitalClock = React14.forwardRef(function DigitalClock2(inProps, ref) {
  const utils = useUtils();
  const containerRef = React14.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const props = useThemeProps({
    props: inProps,
    name: "MuiDigitalClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    timeStep = 30,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    disabled,
    readOnly,
    views = ["hours"],
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "DigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const ownerState = React14.useMemo(() => _extends({}, props, {
    alreadyRendered: !!containerRef.current
  }), [props]);
  const classes = useUtilityClasses6(ownerState);
  const ClockItem = (slots == null ? void 0 : slots.digitalClockItem) ?? DigitalClockItem;
  const clockItemProps = useSlotProps({
    elementType: ClockItem,
    externalSlotProps: slotProps == null ? void 0 : slotProps.digitalClockItem,
    ownerState: {},
    className: classes.item
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue) => handleRawValueChange(newValue, "finish", "hours"));
  const {
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish");
  });
  React14.useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
    if (!activeItem) {
      return;
    }
    const offsetTop = activeItem.offsetTop;
    if (autoFocus || !!focusedView) {
      activeItem.focus();
    }
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = React14.useCallback((valueToCheck) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (utils.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, "hours");
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, utils, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableTime]);
  const timeOptions = React14.useMemo(() => {
    const startOfDay = utils.startOfDay(valueOrReferenceDate);
    return [startOfDay, ...Array.from({
      length: Math.ceil(24 * 60 / timeStep) - 1
    }, (_, index) => utils.addMinutes(startOfDay, timeStep * (index + 1)))];
  }, [valueOrReferenceDate, timeStep, utils]);
  const focusedOptionIndex = timeOptions.findIndex((option) => utils.isEqual(option, valueOrReferenceDate));
  return (0, import_jsx_runtime9.jsx)(DigitalClockRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime9.jsx)(DigitalClockList, {
      role: "listbox",
      "aria-label": localeText.timePickerToolbarTitle,
      className: classes.list,
      children: timeOptions.map((option, index) => {
        if (skipDisabled && isTimeDisabled(option)) {
          return null;
        }
        const isSelected = utils.isEqual(option, value);
        const formattedValue = utils.format(option, ampm ? "fullTime12h" : "fullTime24h");
        const tabIndex = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0 ? 0 : -1;
        return (0, import_jsx_runtime9.jsx)(ClockItem, _extends({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || isTimeDisabled(option),
          disableRipple: readOnly,
          role: "option",
          "aria-disabled": readOnly,
          "aria-selected": isSelected,
          tabIndex
        }, clockItemProps, {
          children: formattedValue
        }), formattedValue);
      })
    })
  }));
});
true ? DigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types3.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types3.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  className: import_prop_types3.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types3.default.object,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: import_prop_types3.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types3.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types3.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types3.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types3.default.oneOf(["hours"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types3.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types3.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types3.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types3.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types3.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types3.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types3.default.oneOf(["hours"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: import_prop_types3.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types3.default.object,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types3.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: import_prop_types3.default.number,
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types3.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types3.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types3.default.oneOf(["hours"]),
  /**
   * Available views.
   * @default ['hours']
   */
  views: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOf(["hours"]))
} : void 0;

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClock.js
init_extends();
init_objectWithoutPropertiesLoose();
var React16 = __toESM(require_react());
init_clsx();
var import_prop_types4 = __toESM(require_prop_types());
init_useEventCallback();
init_composeClasses();

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/multiSectionDigitalClockClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getMultiSectionDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClock", slot);
}
var multiSectionDigitalClockClasses = generateUtilityClasses("MuiMultiSectionDigitalClock", ["root"]);

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
init_extends();
init_objectWithoutPropertiesLoose();
var React15 = __toESM(require_react());
init_clsx();
init_composeClasses();
init_useForkRef();

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/multiSectionDigitalClockSectionClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClockSection", slot);
}
var multiSectionDigitalClockSectionClasses = generateUtilityClasses("MuiMultiSectionDigitalClockSection", ["root", "item"]);

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded9 = ["autoFocus", "onChange", "className", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
var useUtilityClasses7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    item: ["item"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};
var MultiSectionDigitalClockSectionRoot = styled_default(MenuList_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: "hidden",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  "@media (pointer: fine)": {
    "&:hover": {
      overflowY: "auto"
    }
  },
  "@media (pointer: none), (pointer: coarse)": {
    overflowY: "auto"
  },
  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  "&::after": {
    display: "block",
    content: '""',
    // subtracting the height of one item, extra margin and borders to make sure the max height is correct
    height: "calc(100% - 40px - 6px)"
  },
  variants: [{
    props: {
      alreadyRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
}));
var MultiSectionDigitalClockSectionItem = styled_default(MenuItem_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Item",
  overridesResolver: (_, styles) => styles.item
})(({
  theme
}) => ({
  padding: 8,
  margin: "2px 4px",
  width: MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: "center",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var MultiSectionDigitalClockSection = React15.forwardRef(function MultiSectionDigitalClockSection2(inProps, ref) {
  const containerRef = React15.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const previousActive = React15.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClockSection"
  });
  const {
    autoFocus,
    onChange,
    className,
    disabled,
    readOnly,
    items,
    active,
    slots,
    slotProps,
    skipDisabled
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const ownerState = React15.useMemo(() => _extends({}, props, {
    alreadyRendered: !!containerRef.current
  }), [props]);
  const classes = useUtilityClasses7(ownerState);
  const DigitalClockSectionItem = (slots == null ? void 0 : slots.digitalClockSectionItem) ?? MultiSectionDigitalClockSectionItem;
  React15.useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
    if (active && autoFocus && activeItem) {
      activeItem.focus();
    }
    if (!activeItem || previousActive.current === activeItem) {
      return;
    }
    previousActive.current = activeItem;
    const offsetTop = activeItem.offsetTop;
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const focusedOptionIndex = items.findIndex((item) => item.isFocused(item.value));
  return (0, import_jsx_runtime10.jsx)(MultiSectionDigitalClockSectionRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox"
  }, other, {
    children: items.map((option, index) => {
      var _a;
      const isItemDisabled = (_a = option.isDisabled) == null ? void 0 : _a.call(option, option.value);
      const isDisabled = disabled || isItemDisabled;
      if (skipDisabled && isDisabled) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      const tabIndex = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0 ? 0 : -1;
      return (0, import_jsx_runtime10.jsx)(DigitalClockSectionItem, _extends({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: isDisabled,
        disableRipple: readOnly,
        role: "option",
        "aria-disabled": readOnly || isDisabled || void 0,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected,
        tabIndex,
        className: classes.item
      }, slotProps == null ? void 0 : slotProps.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClock.utils.js
var getHourSectionOptions = ({
  now,
  value,
  utils,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep,
  valueOrReferenceDate
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const result = [];
  const isSelected = (hour, overriddenCurrentHours) => {
    const resolvedCurrentHours = overriddenCurrentHours ?? currentHours;
    if (resolvedCurrentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return resolvedCurrentHours === 12 || resolvedCurrentHours === 0;
      }
      return resolvedCurrentHours === hour || resolvedCurrentHours - 12 === hour;
    }
    return resolvedCurrentHours === hour;
  };
  const isFocused = (hour) => {
    return isSelected(hour, utils.getHours(valueOrReferenceDate));
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = utils.format(utils.setHours(now, hour), ampm ? "hours12h" : "hours24h");
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = utils.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      isFocused,
      ariaLabel
    });
  }
  return result;
};
var getTimeSectionOptions = ({
  value,
  utils,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue = true
}) => {
  const isSelected = (timeValue) => {
    if (value === null) {
      return false;
    }
    return hasValue && value === timeValue;
  };
  const isFocused = (timeValue) => {
    return value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: utils.formatNumber(resolveLabel(timeValue)),
      isDisabled,
      isSelected,
      isFocused,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClock.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded10 = ["ampm", "timeSteps", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "skipDisabled", "timezone"];
var useUtilityClasses8 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
var MultiSectionDigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiMultiSectionDigitalClock",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
var MultiSectionDigitalClock = React16.forwardRef(function MultiSectionDigitalClock2(inProps, ref) {
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    timeSteps: inTimeSteps,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    views: inViews = ["hours", "minutes"],
    openTo,
    onViewChange,
    focusedView: inFocusedView,
    onFocusedViewChange,
    className,
    disabled,
    readOnly,
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "MultiSectionDigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const timeSteps = React16.useMemo(() => _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views = React16.useMemo(() => {
    if (!ampm || !inViews.includes("hours")) {
      return inViews;
    }
    return inViews.includes("meridiem") ? inViews : [...inViews, "meridiem"];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToNextView,
    focusedView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish", "meridiem");
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, "finish");
  const isTimeDisabled = React16.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const buildViewProps = React16.useCallback((viewToBuild) => {
    switch (viewToBuild) {
      case "hours": {
        return {
          onChange: (hours) => {
            const valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
            setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), "finish", "hours");
          },
          items: getHourSectionOptions({
            now,
            value,
            ampm,
            utils,
            isDisabled: (hours) => isTimeDisabled(hours, "hours"),
            timeStep: timeSteps.hours,
            resolveAriaLabel: localeText.hoursClockNumberText,
            valueOrReferenceDate
          })
        };
      }
      case "minutes": {
        return {
          onChange: (minutes) => {
            setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minutes), "finish", "minutes");
          },
          items: getTimeSectionOptions({
            value: utils.getMinutes(valueOrReferenceDate),
            utils,
            isDisabled: (minutes) => isTimeDisabled(minutes, "minutes"),
            resolveLabel: (minutes) => utils.format(utils.setMinutes(now, minutes), "minutes"),
            timeStep: timeSteps.minutes,
            hasValue: !!value,
            resolveAriaLabel: localeText.minutesClockNumberText
          })
        };
      }
      case "seconds": {
        return {
          onChange: (seconds) => {
            setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, seconds), "finish", "seconds");
          },
          items: getTimeSectionOptions({
            value: utils.getSeconds(valueOrReferenceDate),
            utils,
            isDisabled: (seconds) => isTimeDisabled(seconds, "seconds"),
            resolveLabel: (seconds) => utils.format(utils.setSeconds(now, seconds), "seconds"),
            timeStep: timeSteps.seconds,
            hasValue: !!value,
            resolveAriaLabel: localeText.secondsClockNumberText
          })
        };
      }
      case "meridiem": {
        const amLabel = formatMeridiem(utils, "am");
        const pmLabel = formatMeridiem(utils, "pm");
        return {
          onChange: handleMeridiemChange,
          items: [{
            value: "am",
            label: amLabel,
            isSelected: () => !!value && meridiemMode === "am",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "am",
            ariaLabel: amLabel
          }, {
            value: "pm",
            label: pmLabel,
            isSelected: () => !!value && meridiemMode === "pm",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "pm",
            ariaLabel: pmLabel
          }]
        };
      }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, utils, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, handleMeridiemChange]);
  const viewTimeOptions = React16.useMemo(() => {
    return views.reduce((result, currentView) => {
      return _extends({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views, buildViewProps]);
  const ownerState = props;
  const classes = useUtilityClasses8(ownerState);
  return (0, import_jsx_runtime11.jsx)(MultiSectionDigitalClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "group"
  }, other, {
    children: Object.entries(viewTimeOptions).map(([timeView, viewOptions]) => (0, import_jsx_runtime11.jsx)(MultiSectionDigitalClockSection, {
      items: viewOptions.items,
      onChange: viewOptions.onChange,
      active: view === timeView,
      autoFocus: autoFocus ?? focusedView === timeView,
      disabled,
      readOnly,
      slots,
      slotProps,
      skipDisabled,
      "aria-label": localeText.selectViewText(timeView)
    }, timeView))
  }));
});
true ? MultiSectionDigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types4.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types4.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  className: import_prop_types4.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types4.default.object,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types4.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types4.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types4.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types4.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types4.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types4.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types4.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types4.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types4.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types4.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types4.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: import_prop_types4.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types4.default.object,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types4.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types4.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types4.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types4.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types4.default.shape({
    hours: import_prop_types4.default.number,
    minutes: import_prop_types4.default.number,
    seconds: import_prop_types4.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types4.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types4.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types4.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types4.default.arrayOf(import_prop_types4.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
init_objectWithoutPropertiesLoose();
init_extends();
var React17 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/PickersDay/pickersDayClasses.js
init_utils();
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
var pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded11 = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
var useUtilityClasses9 = (ownerState) => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const isHiddenDaySpacingFiller = outsideCurrentMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ["root", selected && !isHiddenDaySpacingFiller && "selected", disabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
var styleArg = ({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: false
    },
    style: {
      margin: `0 ${DAY_MARGIN}px`
    }
  }, {
    props: {
      outsideCurrentMonth: true,
      showDaysOutsideCurrentMonth: true
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: false,
      today: true
    },
    style: {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    }
  }]
});
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
var PickersDayRoot = styled_default(ButtonBase_default, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(styleArg);
var PickersDayFiller = styled_default("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(({
  theme
}) => _extends({}, styleArg({
  theme
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
var noop = () => {
};
var PickersDayRaw = React17.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop,
    onBlur = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onMouseEnter = noop,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    children,
    today: isToday = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const ownerState = _extends({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses9(ownerState);
  const utils = useUtils();
  const ref = React17.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  useEnhancedEffect_default(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return (0, import_jsx_runtime12.jsx)(PickersDayFiller, {
      className: clsx_default(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return (0, import_jsx_runtime12.jsx)(PickersDayRoot, _extends({
    className: clsx_default(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: !children ? utils.format(day, "dayOfMonth") : children
  }));
});
true ? PickersDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      focusVisible: import_prop_types5.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types5.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types5.default.object,
  className: import_prop_types5.default.string,
  component: import_prop_types5.default.elementType,
  /**
   * The date to show.
   */
  day: import_prop_types5.default.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types5.default.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: import_prop_types5.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types5.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types5.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types5.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types5.default.string,
  isAnimating: import_prop_types5.default.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: import_prop_types5.default.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: import_prop_types5.default.bool.isRequired,
  onBlur: import_prop_types5.default.func,
  onDaySelect: import_prop_types5.default.func.isRequired,
  onFocus: import_prop_types5.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types5.default.func,
  onKeyDown: import_prop_types5.default.func,
  onMouseEnter: import_prop_types5.default.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: import_prop_types5.default.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: import_prop_types5.default.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types5.default.bool,
  style: import_prop_types5.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types5.default.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: import_prop_types5.default.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types5.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      pulsate: import_prop_types5.default.func.isRequired,
      start: import_prop_types5.default.func.isRequired,
      stop: import_prop_types5.default.func.isRequired
    })
  })])
} : void 0;
var PickersDay2 = React17.memo(PickersDayRaw);

// node_modules/@mui/x-date-pickers/DateField/DateField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React32 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.js
init_extends();
var React23 = __toESM(require_react());
init_useEnhancedEffect();
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/hooks/useValidation.js
var React18 = __toESM(require_react());
function useValidation(props, validate, isSameError, defaultErrorState) {
  const {
    value,
    onError
  } = props;
  const adapter = useLocalizationContext();
  const previousValidationErrorRef = React18.useRef(defaultErrorState);
  const validationError = validate({
    adapter,
    value,
    props
  });
  React18.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldState.js
init_extends();
var React19 = __toESM(require_react());
init_useControlled();

// node_modules/@mui/x-date-pickers/internals/hooks/useField/buildSectionsFromFormat.js
init_extends();
var expandFormat = ({
  utils,
  format
}) => {
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = utils.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the picker component.");
    }
  }
  return nextFormat;
};
var getEscapedPartsFromFormat = ({
  utils,
  expandedFormat
}) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match = null;
  while (match = regExp.exec(expandedFormat)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
var getSectionPlaceholder = (utils, timezone, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: utils.formatByString(utils.date(void 0, timezone), sectionFormat).length,
        format: sectionFormat
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder({
        format: sectionFormat
      });
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder({
        format: sectionFormat
      });
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder({
        format: sectionFormat
      });
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder({
        format: sectionFormat
      });
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder({
        format: sectionFormat
      });
    }
    default: {
      return sectionFormat;
    }
  }
};
var createSection = ({
  utils,
  timezone,
  date,
  shouldRespectLeadingZeros,
  localeText,
  localizedDigits,
  now,
  token,
  startSeparator
}) => {
  if (token === "") {
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  }
  const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
  const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, timezone, sectionConfig.contentType, sectionConfig.type, token);
  const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
  const isValidDate = date != null && utils.isValid(date);
  let sectionValue = isValidDate ? utils.formatByString(date, token) : "";
  let maxLength = null;
  if (hasLeadingZerosInInput) {
    if (hasLeadingZerosInFormat) {
      maxLength = sectionValue === "" ? utils.formatByString(now, token).length : sectionValue.length;
    } else {
      if (sectionConfig.maxLength == null) {
        throw new Error(`MUI X: The token ${token} should have a 'maxDigitNumber' property on it's adapter`);
      }
      maxLength = sectionConfig.maxLength;
      if (isValidDate) {
        sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
      }
    }
  }
  return _extends({}, sectionConfig, {
    format: token,
    maxLength,
    value: sectionValue,
    placeholder: getSectionPlaceholder(utils, timezone, localeText, sectionConfig, token),
    hasLeadingZerosInFormat,
    hasLeadingZerosInInput,
    startSeparator,
    endSeparator: "",
    modified: false
  });
};
var buildSections = (params) => {
  var _a;
  const {
    utils,
    expandedFormat,
    escapedParts
  } = params;
  const now = utils.date(void 0);
  const sections = [];
  let startSeparator = "";
  const validTokens = Object.keys(utils.formatTokenMap).sort((a, b) => b.length - a.length);
  const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
  const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join("|")})*$`);
  const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join("|")})`);
  const getEscapedPartOfCurrentChar = (i2) => escapedParts.find((escapeIndex) => escapeIndex.start <= i2 && escapeIndex.end >= i2);
  let i = 0;
  while (i < expandedFormat.length) {
    const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const firstWordInFormat = (_a = regExpFirstWordInFormat.exec(expandedFormat.slice(i))) == null ? void 0 : _a[1];
    if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
      let word = firstWordInFormat;
      while (word.length > 0) {
        const firstWord = regExpFirstTokenInWord.exec(word)[1];
        word = word.slice(firstWord.length);
        sections.push(createSection(_extends({}, params, {
          now,
          token: firstWord,
          startSeparator
        })));
        startSeparator = "";
      }
      i += firstWordInFormat.length;
    } else {
      const char = expandedFormat[i];
      const isEscapeBoundary = isEscapedChar && (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.start) === i || (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.end) === i;
      if (!isEscapeBoundary) {
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
        }
      }
      i += 1;
    }
  }
  if (sections.length === 0 && startSeparator.length > 0) {
    sections.push({
      type: "empty",
      contentType: "letter",
      maxLength: null,
      format: "",
      value: "",
      placeholder: "",
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator,
      endSeparator: "",
      modified: false
    });
  }
  return sections;
};
var postProcessSections = ({
  isRTL,
  formatDensity,
  sections
}) => {
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (isRTL && cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
var buildSectionsFromFormat = (params) => {
  let expandedFormat = expandFormat(params);
  if (params.isRTL && params.enableAccessibleFieldDOMStructure) {
    expandedFormat = expandedFormat.split(" ").reverse().join(" ");
  }
  const escapedParts = getEscapedPartsFromFormat(_extends({}, params, {
    expandedFormat
  }));
  const sections = buildSections(_extends({}, params, {
    expandedFormat,
    escapedParts
  }));
  return postProcessSections(_extends({}, params, {
    sections
  }));
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldState.js
var useFieldState = (params) => {
  const utils = useUtils();
  const localeText = useLocaleText();
  const adapter = useLocalizationContext();
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const {
    valueManager,
    fieldValueManager,
    valueType,
    validator,
    internalProps,
    internalProps: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp,
      enableAccessibleFieldDOMStructure = false
    }
  } = params;
  const {
    timezone,
    value: valueFromTheOutside,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager
  });
  const localizedDigits = React19.useMemo(() => getLocalizedDigits(utils), [utils]);
  const sectionsValueBoundaries = React19.useMemo(() => getSectionsBoundaries(utils, localizedDigits, timezone), [utils, localizedDigits, timezone]);
  const getSectionsFromValue = React19.useCallback((value, fallbackSections = null) => fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, (date) => buildSectionsFromFormat({
    utils,
    timezone,
    localeText,
    localizedDigits,
    format,
    date,
    formatDensity,
    shouldRespectLeadingZeros,
    enableAccessibleFieldDOMStructure,
    isRTL
  })), [fieldValueManager, format, localeText, localizedDigits, isRTL, shouldRespectLeadingZeros, utils, formatDensity, timezone, enableAccessibleFieldDOMStructure]);
  const [state, setState] = React19.useState(() => {
    const sections = getSectionsFromValue(valueFromTheOutside);
    validateSections(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      value: valueFromTheOutside,
      referenceValue: valueManager.emptyValue,
      tempValueStrAndroid: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value: valueFromTheOutside,
      utils,
      props: internalProps,
      granularity,
      timezone
    });
    return _extends({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSections"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null ? void 0 : onSelectedSectionsChange(newSelectedSections);
  };
  const parsedSelectedSections = React19.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
  const activeSectionIndex = parsedSelectedSections === "all" ? 0 : parsedSelectedSections;
  const publishValue = ({
    value,
    referenceValue,
    sections
  }) => {
    setState((prevState) => _extends({}, prevState, {
      sections,
      value,
      referenceValue,
      tempValueStrAndroid: null
    }));
    if (valueManager.areValuesEqual(utils, state.value, value)) {
      return;
    }
    const context = {
      validationError: validator({
        adapter,
        value,
        props: _extends({}, internalProps, {
          value,
          timezone
        })
      })
    };
    handleValueChange(value, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return newSections;
  };
  const clearValue = () => {
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  const clearActiveSection = () => {
    if (activeSectionIndex == null) {
      return;
    }
    const activeSection = state.sections[activeSectionIndex];
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter((section) => section.value !== "").length;
    const hasNoOtherNonEmptySections = nonEmptySectionCountBefore === (activeSection.value === "" ? 0 : 1);
    const newSections = setSectionValue(activeSectionIndex, "");
    const newActiveDate = hasNoOtherNonEmptySections ? null : utils.getInvalidDate();
    const newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    publishValue(_extends({}, newValues, {
      sections: newSections
    }));
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      const sections = buildSectionsFromFormat({
        utils,
        timezone,
        localeText,
        localizedDigits,
        format,
        date,
        formatDensity,
        shouldRespectLeadingZeros,
        enableAccessibleFieldDOMStructure,
        isRTL
      });
      return mergeDateIntoReferenceDate(utils, timezone, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    const newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  const updateSectionValue = ({
    activeSection,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) {
      setSelectedSections(activeSectionIndex + 1);
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const newSections = setSectionValue(activeSectionIndex, newSectionValue);
    const newActiveDateSections = activeDateManager.getSections(newSections);
    const newActiveDate = getDateFromDateSections(utils, newActiveDateSections, localizedDigits);
    let values;
    let shouldPublish;
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(utils, timezone, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }
    if (shouldPublish) {
      return publishValue(_extends({}, values, {
        sections: newSections
      }));
    }
    return setState((prevState) => _extends({}, prevState, values, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prev) => _extends({}, prev, {
    tempValueStrAndroid
  }));
  React19.useEffect(() => {
    const sections = getSectionsFromValue(state.value);
    validateSections(sections, valueType);
    setState((prevState) => _extends({}, prevState, {
      sections
    }));
  }, [format, utils.locale, isRTL]);
  React19.useEffect(() => {
    let shouldUpdate;
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      shouldUpdate = true;
    } else {
      shouldUpdate = valueManager.getTimezone(utils, state.value) !== valueManager.getTimezone(utils, valueFromTheOutside);
    }
    if (shouldUpdate) {
      setState((prevState) => _extends({}, prevState, {
        value: valueFromTheOutside,
        referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
        sections: getSectionsFromValue(valueFromTheOutside)
      }));
    }
  }, [valueFromTheOutside]);
  return {
    state,
    activeSectionIndex,
    parsedSelectedSections,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    getSectionsFromValue,
    sectionsValueBoundaries,
    localizedDigits,
    timezone
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldCharacterEditing.js
init_extends();
var React20 = __toESM(require_react());
init_useEventCallback();
var QUERY_LIFE_DURATION_MS = 5e3;
var isQueryResponseWithoutValue = (response) => response.saveQuery != null;
var useFieldCharacterEditing = ({
  sections,
  updateSectionValue,
  sectionsValueBoundaries,
  localizedDigits,
  setTempAndroidValueStr,
  timezone
}) => {
  const utils = useUtils();
  const [query, setQuery] = React20.useState(null);
  const resetQuery = useEventCallback_default(() => setQuery(null));
  React20.useEffect(() => {
    var _a;
    if (query != null && ((_a = sections[query.sectionIndex]) == null ? void 0 : _a.type) !== query.sectionType) {
      resetQuery();
    }
  }, [sections, query, resetQuery]);
  React20.useEffect(() => {
    if (query != null) {
      const timeout = setTimeout(() => resetQuery(), QUERY_LIFE_DURATION_MS);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {
    };
  }, [query, resetQuery]);
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = sections[sectionIndex];
    if (query != null && (!isValidQueryValue || isValidQueryValue(query.value)) && query.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${query.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      resetQuery();
      return null;
    }
    setQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format) => getLetterEditingOptions(utils, timezone, activeSection.type, format);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(utils, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(utils, fallbackValue, utils.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = (queryValue, section) => {
      const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
      const queryValueNumber = Number(cleanQueryValue);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(utils, queryValueNumber, sectionBoundaries, localizedDigits, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") {
        return getNewSectionValue(queryValue, activeSection);
      }
      if (activeSection.type === "month") {
        const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, timezone, "digit", "month", "MM");
        const response = getNewSectionValue(queryValue, {
          type: activeSection.type,
          format: "MM",
          hasLeadingZerosInFormat,
          hasLeadingZerosInInput: true,
          contentType: "digit",
          maxLength: 2
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(utils, response.sectionValue, "MM", activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue(queryValue, activeSection);
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(utils, timezone, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => isStringNumber(queryValue, localizedDigits));
  };
  const applyCharacterEditing = useEventCallback_default((params) => {
    const activeSection = sections[params.sectionIndex];
    const isNumericEditing = isStringNumber(params.keyPressed, localizedDigits);
    const response = isNumericEditing ? applyNumericEditing(_extends({}, params, {
      keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits)
    })) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
      return;
    }
    updateSectionValue({
      activeSection,
      newSectionValue: response.sectionValue,
      shouldGoToNextSection: response.shouldGoToNextSection
    });
  });
  return {
    applyCharacterEditing,
    resetCharacterQuery: resetQuery
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldV7TextField.js
var React21 = __toESM(require_react());
init_useForkRef();
init_useEventCallback();
init_useEnhancedEffect();
init_useId();

// node_modules/@mui/x-date-pickers/internals/utils/utils.js
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
var onSpaceOrEnter = (innerFn, externalEvent) => (event) => {
  if (event.key === "Enter" || event.key === " ") {
    innerFn(event);
    event.preventDefault();
    event.stopPropagation();
  }
  if (externalEvent) {
    externalEvent(event);
  }
};
var getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
var DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldV7TextField.js
var useFieldV7TextField = (params) => {
  const {
    internalProps: {
      disabled,
      readOnly = false
    },
    forwardedProps: {
      sectionListRef: inSectionListRef,
      onBlur,
      onClick,
      onFocus,
      onInput,
      onPaste,
      focused: focusedProp,
      autoFocus = false
    },
    fieldValueManager,
    applyCharacterEditing,
    resetCharacterQuery,
    setSelectedSections,
    parsedSelectedSections,
    state,
    clearActiveSection,
    clearValue,
    updateSectionValue,
    updateValueFromValueStr,
    sectionOrder,
    areAllSectionsEmpty,
    sectionsValueBoundaries
  } = params;
  const sectionListRef = React21.useRef(null);
  const handleSectionListRef = useForkRef(inSectionListRef, sectionListRef);
  const localeText = useLocaleText();
  const utils = useUtils();
  const id = useId();
  const [focused, setFocused] = React21.useState(false);
  const interactions = React21.useMemo(() => ({
    syncSelectionToDOM: () => {
      if (!sectionListRef.current) {
        return;
      }
      const selection = document.getSelection();
      if (!selection) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (selection.rangeCount > 0 && sectionListRef.current.getRoot().contains(selection.getRangeAt(0).startContainer)) {
          selection.removeAllRanges();
        }
        if (focused) {
          sectionListRef.current.getRoot().blur();
        }
        return;
      }
      if (!sectionListRef.current.getRoot().contains(getActiveElement(document))) {
        return;
      }
      const range = new window.Range();
      let target;
      if (parsedSelectedSections === "all") {
        target = sectionListRef.current.getRoot();
      } else {
        const section = state.sections[parsedSelectedSections];
        if (section.type === "empty") {
          target = sectionListRef.current.getSectionContainer(parsedSelectedSections);
        } else {
          target = sectionListRef.current.getSectionContent(parsedSelectedSections);
        }
      }
      range.selectNodeContents(target);
      target.focus();
      selection.removeAllRanges();
      selection.addRange(range);
    },
    getActiveSectionIndexFromDOM: () => {
      const activeElement = getActiveElement(document);
      if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) {
        return null;
      }
      return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
    },
    focusField: (newSelectedSections = 0) => {
      if (!sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      setFocused(true);
      sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
    },
    setSelectedSections: (newSelectedSections) => {
      if (!sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      const newActiveSectionIndex = newParsedSelectedSections === "all" ? 0 : newParsedSelectedSections;
      setFocused(newActiveSectionIndex !== null);
      setSelectedSections(newSelectedSections);
    },
    isFieldFocused: () => {
      const activeElement = getActiveElement(document);
      return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
    }
  }), [parsedSelectedSections, setSelectedSections, state.sections, focused]);
  const revertDOMSectionChange = useEventCallback_default((sectionIndex) => {
    if (!sectionListRef.current) {
      return;
    }
    const section = state.sections[sectionIndex];
    sectionListRef.current.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
    interactions.syncSelectionToDOM();
  });
  const handleContainerClick = useEventCallback_default((event, ...args) => {
    if (event.isDefaultPrevented() || !sectionListRef.current) {
      return;
    }
    setFocused(true);
    onClick == null ? void 0 : onClick(event, ...args);
    if (parsedSelectedSections === "all") {
      setTimeout(() => {
        const cursorPosition = document.getSelection().getRangeAt(0).startOffset;
        if (cursorPosition === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        let sectionIndex = 0;
        let cursorOnStartOfSection = 0;
        while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
          const section = state.sections[sectionIndex];
          sectionIndex += 1;
          cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
        }
        setSelectedSections(sectionIndex - 1);
      });
    } else if (!focused) {
      setFocused(true);
      setSelectedSections(sectionOrder.startIndex);
    } else {
      const hasClickedOnASection = sectionListRef.current.getRoot().contains(event.target);
      if (!hasClickedOnASection) {
        setSelectedSections(sectionOrder.startIndex);
      }
    }
  });
  const handleContainerInput = useEventCallback_default((event) => {
    onInput == null ? void 0 : onInput(event);
    if (!sectionListRef.current || parsedSelectedSections !== "all") {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    sectionListRef.current.getRoot().innerHTML = state.sections.map((section) => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join("");
    interactions.syncSelectionToDOM();
    if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
      resetCharacterQuery();
      clearValue();
      setSelectedSections("all");
    } else if (keyPressed.length > 1) {
      updateValueFromValueStr(keyPressed);
    } else {
      applyCharacterEditing({
        keyPressed,
        sectionIndex: 0
      });
    }
  });
  const handleContainerPaste = useEventCallback_default((event) => {
    onPaste == null ? void 0 : onPaste(event);
    if (readOnly || parsedSelectedSections !== "all") {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    event.preventDefault();
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerFocus = useEventCallback_default((...args) => {
    onFocus == null ? void 0 : onFocus(...args);
    if (focused || !sectionListRef.current) {
      return;
    }
    setFocused(true);
    const isFocusInsideASection = sectionListRef.current.getSectionIndexFromDOMElement(getActiveElement(document)) != null;
    if (!isFocusInsideASection) {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleContainerBlur = useEventCallback_default((...args) => {
    onBlur == null ? void 0 : onBlur(...args);
    setTimeout(() => {
      if (!sectionListRef.current) {
        return;
      }
      const activeElement = getActiveElement(document);
      const shouldBlur = !sectionListRef.current.getRoot().contains(activeElement);
      if (shouldBlur) {
        setFocused(false);
        setSelectedSections(null);
      }
    });
  });
  const getInputContainerClickHandler = useEventCallback_default((sectionIndex) => (event) => {
    if (event.isDefaultPrevented() || readOnly) {
      return;
    }
    setSelectedSections(sectionIndex);
  });
  const handleInputContentMouseUp = useEventCallback_default((event) => {
    event.preventDefault();
  });
  const getInputContentFocusHandler = useEventCallback_default((sectionIndex) => () => {
    if (readOnly) {
      return;
    }
    setSelectedSections(sectionIndex);
  });
  const handleInputContentPaste = useEventCallback_default((event) => {
    event.preventDefault();
    if (readOnly || typeof parsedSelectedSections !== "number") {
      return;
    }
    const activeSection = state.sections[parsedSelectedSections];
    const pastedValue = event.clipboardData.getData("text");
    const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
    const digitsOnly = /^[0-9]+$/.test(pastedValue);
    const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
    const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
    if (isValidPastedValue) {
      resetCharacterQuery();
      updateSectionValue({
        activeSection,
        newSectionValue: pastedValue,
        shouldGoToNextSection: true
      });
    } else if (!lettersOnly && !digitsOnly) {
      resetCharacterQuery();
      updateValueFromValueStr(pastedValue);
    }
  });
  const handleInputContentDragOver = useEventCallback_default((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
  });
  const handleInputContentInput = useEventCallback_default((event) => {
    if (!sectionListRef.current) {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    const sectionIndex = sectionListRef.current.getSectionIndexFromDOMElement(target);
    const section = state.sections[sectionIndex];
    if (readOnly || !sectionListRef.current) {
      revertDOMSectionChange(sectionIndex);
      return;
    }
    if (keyPressed.length === 0) {
      if (section.value === "") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      resetCharacterQuery();
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex
    });
    revertDOMSectionChange(sectionIndex);
  });
  useEnhancedEffect_default(() => {
    if (!focused || !sectionListRef.current) {
      return;
    }
    if (parsedSelectedSections === "all") {
      sectionListRef.current.getRoot().focus();
    } else if (typeof parsedSelectedSections === "number") {
      const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
      if (domElement) {
        domElement.focus();
      }
    }
  }, [parsedSelectedSections, focused]);
  const sectionBoundaries = React21.useMemo(() => {
    return state.sections.reduce((acc, next) => {
      acc[next.type] = sectionsValueBoundaries[next.type]({
        currentDate: null,
        contentType: next.contentType,
        format: next.format
      });
      return acc;
    }, {});
  }, [sectionsValueBoundaries, state.sections]);
  const isContainerEditable = parsedSelectedSections === "all";
  const elements = React21.useMemo(() => {
    return state.sections.map((section, index) => {
      const isEditable = !isContainerEditable && !disabled && !readOnly;
      return {
        container: {
          "data-sectionindex": index,
          onClick: getInputContainerClickHandler(index)
        },
        content: {
          tabIndex: isContainerEditable || index > 0 ? -1 : 0,
          contentEditable: !isContainerEditable && !disabled && !readOnly,
          role: "spinbutton",
          id: `${id}-${section.type}`,
          "aria-labelledby": `${id}-${section.type}`,
          "aria-readonly": readOnly,
          "aria-valuenow": getSectionValueNow(section, utils),
          "aria-valuemin": sectionBoundaries[section.type].minimum,
          "aria-valuemax": sectionBoundaries[section.type].maximum,
          "aria-valuetext": section.value ? getSectionValueText(section, utils) : localeText.empty,
          "aria-label": localeText[section.type],
          "aria-disabled": disabled,
          spellCheck: isEditable ? false : void 0,
          autoCapitalize: isEditable ? "off" : void 0,
          autoCorrect: isEditable ? "off" : void 0,
          [parseInt(React21.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: isEditable ? "next" : void 0,
          children: section.value || section.placeholder,
          onInput: handleInputContentInput,
          onPaste: handleInputContentPaste,
          onFocus: getInputContentFocusHandler(index),
          onDragOver: handleInputContentDragOver,
          onMouseUp: handleInputContentMouseUp,
          inputMode: section.contentType === "letter" ? "text" : "numeric"
        },
        before: {
          children: section.startSeparator
        },
        after: {
          children: section.endSeparator
        }
      };
    });
  }, [state.sections, getInputContentFocusHandler, handleInputContentPaste, handleInputContentDragOver, handleInputContentInput, getInputContainerClickHandler, handleInputContentMouseUp, disabled, readOnly, isContainerEditable, localeText, utils, sectionBoundaries, id]);
  const handleValueStrChange = useEventCallback_default((event) => {
    updateValueFromValueStr(event.target.value);
  });
  const valueStr = React21.useMemo(() => areAllSectionsEmpty ? "" : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [areAllSectionsEmpty, state.sections, fieldValueManager]);
  React21.useEffect(() => {
    if (sectionListRef.current == null) {
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please remove the `enableAccessibleFieldDOMStructure` prop from your picker or field component:", "", "<DatePicker slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join("\n"));
    }
    if (autoFocus && sectionListRef.current) {
      sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
    }
  }, []);
  return {
    interactions,
    returnedValue: {
      // Forwarded
      autoFocus,
      readOnly,
      focused: focusedProp ?? focused,
      sectionListRef: handleSectionListRef,
      onBlur: handleContainerBlur,
      onClick: handleContainerClick,
      onFocus: handleContainerFocus,
      onInput: handleContainerInput,
      onPaste: handleContainerPaste,
      // Additional
      enableAccessibleFieldDOMStructure: true,
      elements,
      // TODO v7: Try to set to undefined when there is a section selected.
      tabIndex: parsedSelectedSections === 0 ? -1 : 0,
      contentEditable: isContainerEditable,
      value: valueStr,
      onChange: handleValueStrChange,
      areAllSectionsEmpty
    }
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldV6TextField.js
init_extends();
var React22 = __toESM(require_react());
init_useEventCallback();
init_useForkRef();
var cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
var addPositionPropertiesToSections = (sections, localizedDigits, isRTL) => {
  let position = 0;
  let positionInInput = isRTL ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr", localizedDigits);
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + (cleanedValue === "" ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
var useFieldV6TextField = (params) => {
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const focusTimeoutRef = React22.useRef();
  const {
    forwardedProps: {
      onFocus,
      onClick,
      onPaste,
      onBlur,
      inputRef: inputRefProp,
      placeholder: inPlaceholder
    },
    internalProps: {
      readOnly = false
    },
    parsedSelectedSections,
    activeSectionIndex,
    state,
    fieldValueManager,
    valueManager,
    applyCharacterEditing,
    resetCharacterQuery,
    updateSectionValue,
    updateValueFromValueStr,
    clearActiveSection,
    clearValue,
    setTempAndroidValueStr,
    setSelectedSections,
    getSectionsFromValue,
    areAllSectionsEmpty,
    localizedDigits
  } = params;
  const inputRef = React22.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const sections = React22.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRTL), [state.sections, localizedDigits, isRTL]);
  const interactions = React22.useMemo(() => ({
    syncSelectionToDOM: () => {
      if (!inputRef.current) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (inputRef.current.scrollLeft) {
          inputRef.current.scrollLeft = 0;
        }
        return;
      }
      if (inputRef.current !== getActiveElement(document)) {
        return;
      }
      const currentScrollTop = inputRef.current.scrollTop;
      if (parsedSelectedSections === "all") {
        inputRef.current.select();
      } else {
        const selectedSection = sections[parsedSelectedSections];
        const selectionStart = selectedSection.type === "empty" ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
        const selectionEnd = selectedSection.type === "empty" ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
        if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
          if (inputRef.current === getActiveElement(document)) {
            inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          }
        }
      }
      inputRef.current.scrollTop = currentScrollTop;
    },
    getActiveSectionIndexFromDOM: () => {
      var _a;
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      const isInputReadOnly = !!((_a = inputRef.current) == null ? void 0 : _a.readOnly);
      if (browserStartIndex === 0 && browserEndIndex === 0 || isInputReadOnly) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 : sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    },
    focusField: (newSelectedSection = 0) => {
      var _a;
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      setSelectedSections(newSelectedSection);
    },
    setSelectedSections: (newSelectedSections) => setSelectedSections(newSelectedSections),
    isFieldFocused: () => inputRef.current === getActiveElement(document)
  }), [inputRef, parsedSelectedSections, sections, setSelectedSections]);
  const syncSelectionFromDOM = () => {
    if (readOnly) {
      setSelectedSections(null);
      return;
    }
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= sections[0].startInInput) {
      nextSectionIndex = 1;
    } else if (browserStartIndex >= sections[sections.length - 1].endInInput) {
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  };
  const handleInputFocus = useEventCallback_default((...args) => {
    onFocus == null ? void 0 : onFocus(...args);
    const input = inputRef.current;
    clearTimeout(focusTimeoutRef.current);
    focusTimeoutRef.current = setTimeout(() => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (activeSectionIndex != null || readOnly) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputClick = useEventCallback_default((event, ...args) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick == null ? void 0 : onClick(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputPaste = useEventCallback_default((event) => {
    onPaste == null ? void 0 : onPaste(event);
    event.preventDefault();
    if (readOnly) {
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (typeof parsedSelectedSections === "number") {
      const activeSection = state.sections[parsedSelectedSections];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
      if (isValidPastedValue) {
        resetCharacterQuery();
        updateSectionValue({
          activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        return;
      }
      if (lettersOnly || digitsOnly) {
        return;
      }
    }
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerBlur = useEventCallback_default((...args) => {
    onBlur == null ? void 0 : onBlur(...args);
    setSelectedSections(null);
  });
  const handleInputChange = useEventCallback_default((event) => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === "") {
      resetCharacterQuery();
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr2 = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr2);
    if (activeSectionIndex == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (parsedSelectedSections === "all" && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRTL));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = sections[activeSectionIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr2);
      } else {
        resetCharacterQuery();
        clearActiveSection();
      }
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: activeSectionIndex
    });
  });
  const placeholder = React22.useMemo(() => {
    if (inPlaceholder) {
      return inPlaceholder;
    }
    return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRTL);
  }, [inPlaceholder, fieldValueManager, getSectionsFromValue, valueManager.emptyValue, localizedDigits, isRTL]);
  const valueStr = React22.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRTL), [state.sections, fieldValueManager, state.tempValueStrAndroid, localizedDigits, isRTL]);
  React22.useEffect(() => {
    if (inputRef.current && inputRef.current === getActiveElement(document)) {
      setSelectedSections("all");
    }
    return () => {
      clearTimeout(focusTimeoutRef.current);
    };
  }, []);
  const inputMode = React22.useMemo(() => {
    if (activeSectionIndex == null) {
      return "text";
    }
    if (state.sections[activeSectionIndex].contentType === "letter") {
      return "text";
    }
    return "numeric";
  }, [activeSectionIndex, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(document);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  return {
    interactions,
    returnedValue: {
      // Forwarded
      readOnly,
      onBlur: handleContainerBlur,
      onClick: handleInputClick,
      onFocus: handleInputFocus,
      onPaste: handleInputPaste,
      inputRef: handleRef,
      // Additional
      enableAccessibleFieldDOMStructure: false,
      placeholder,
      inputMode,
      autoComplete: "off",
      value: shouldShowPlaceholder ? "" : valueStr,
      onChange: handleInputChange
    }
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.js
var useField = (params) => {
  const utils = useUtils();
  const {
    internalProps,
    internalProps: {
      unstableFieldRef,
      minutesStep,
      enableAccessibleFieldDOMStructure = false,
      disabled = false,
      readOnly = false
    },
    forwardedProps: {
      onKeyDown,
      error,
      clearable,
      onClear
    },
    fieldValueManager,
    valueManager,
    validator
  } = params;
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const stateResponse = useFieldState(params);
  const {
    state,
    activeSectionIndex,
    parsedSelectedSections,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    localizedDigits,
    timezone
  } = stateResponse;
  const characterEditingResponse = useFieldCharacterEditing({
    sections: state.sections,
    updateSectionValue,
    sectionsValueBoundaries,
    localizedDigits,
    setTempAndroidValueStr,
    timezone
  });
  const {
    resetCharacterQuery
  } = characterEditingResponse;
  const areAllSectionsEmpty = valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue);
  const useFieldTextField = enableAccessibleFieldDOMStructure ? useFieldV7TextField : useFieldV6TextField;
  const sectionOrder = React23.useMemo(() => getSectionOrder(state.sections, isRTL && !enableAccessibleFieldDOMStructure), [state.sections, isRTL, enableAccessibleFieldDOMStructure]);
  const {
    returnedValue,
    interactions
  } = useFieldTextField(_extends({}, params, stateResponse, characterEditingResponse, {
    areAllSectionsEmpty,
    sectionOrder
  }));
  const handleContainerKeyDown = useEventCallback_default((event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    switch (true) {
      case ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a" && !event.shiftKey && !event.altKey): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      case event.key === "Enter": {
        event.preventDefault();
        break;
      }
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      case event.key === "Delete": {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (parsedSelectedSections == null || parsedSelectedSections === "all") {
          clearValue();
        } else {
          clearActiveSection();
        }
        resetCharacterQuery();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || activeSectionIndex == null) {
          break;
        }
        const activeSection = state.sections[activeSectionIndex];
        const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
        const newSectionValue = adjustSectionValue(utils, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, activeDateManager.date, {
          minutesStep
        });
        updateSectionValue({
          activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
  useEnhancedEffect_default(() => {
    interactions.syncSelectionToDOM();
  });
  const validationError = useValidation(_extends({}, internalProps, {
    value: state.value,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const inputError = React23.useMemo(() => {
    if (error !== void 0) {
      return error;
    }
    return valueManager.hasError(validationError);
  }, [valueManager, validationError, error]);
  React23.useEffect(() => {
    if (!inputError && activeSectionIndex == null) {
      resetCharacterQuery();
    }
  }, [state.referenceValue, activeSectionIndex, inputError]);
  React23.useEffect(() => {
    if (state.tempValueStrAndroid != null && activeSectionIndex != null) {
      resetCharacterQuery();
      clearActiveSection();
    }
  }, [state.sections]);
  React23.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: interactions.getActiveSectionIndexFromDOM,
    setSelectedSections: interactions.setSelectedSections,
    focusField: interactions.focusField,
    isFieldFocused: interactions.isFieldFocused
  }));
  const handleClearValue = useEventCallback_default((event, ...args) => {
    event.preventDefault();
    onClear == null ? void 0 : onClear(event, ...args);
    clearValue();
    if (!interactions.isFieldFocused()) {
      interactions.focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const commonForwardedProps = {
    onKeyDown: handleContainerKeyDown,
    onClear: handleClearValue,
    error: inputError,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled)
  };
  const commonAdditionalProps = {
    disabled,
    readOnly
  };
  return _extends({}, params.forwardedProps, commonForwardedProps, commonAdditionalProps, returnedValue);
};

// node_modules/@mui/x-date-pickers/internals/utils/validation/validateDate.js
var validateDate = ({
  props,
  value,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.date(void 0, timezone);
  const minDate = applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  const maxDate = applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};

// node_modules/@mui/x-date-pickers/internals/utils/fields.js
init_extends();

// node_modules/@mui/x-date-pickers/internals/utils/validation/extractValidationProps.js
var DATE_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"];
var TIME_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"];
var DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
var VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
var extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});

// node_modules/@mui/x-date-pickers/internals/utils/fields.js
var SHARED_FIELD_INTERNAL_PROP_NAMES = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator"];
var splitFieldInternalAndForwardedProps = (props, valueType) => {
  const forwardedProps = _extends({}, props);
  const internalProps = {};
  const extractProp = (propName) => {
    if (forwardedProps.hasOwnProperty(propName)) {
      internalProps[propName] = forwardedProps[propName];
      delete forwardedProps[propName];
    }
  };
  SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
  if (valueType === "date") {
    DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
  } else if (valueType === "time") {
    TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
  } else if (valueType === "date-time") {
    DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
  }
  return {
    forwardedProps,
    internalProps
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/defaultizedFieldProps.js
init_extends();
var useDefaultizedDateField = (props) => {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  return _extends({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? utils.formats.keyboardDate,
    minDate: applyDefaultDate(utils, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDate, defaultDates.maxDate)
  });
};
var useDefaultizedTimeField = (props) => {
  const utils = useUtils();
  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return _extends({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat
  });
};
var useDefaultizedDateTimeField = (props) => {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return _extends({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime),
    minDate: applyDefaultDate(utils, props.minDateTime ?? props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDateTime ?? props.maxDate, defaultDates.maxDate),
    minTime: props.minDateTime ?? props.minTime,
    maxTime: props.maxDateTime ?? props.maxTime
  });
};

// node_modules/@mui/x-date-pickers/DateField/useDateField.js
var useDateField = (inProps) => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date");
  return useField({
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDate,
    valueType: "date"
  });
};

// node_modules/@mui/x-date-pickers/hooks/useClearableField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React24 = __toESM(require_react());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded12 = ["clearable", "onClear", "InputProps", "sx", "slots", "slotProps"];
var _excluded23 = ["ownerState"];
var useClearableField = (props) => {
  const localeText = useLocaleText();
  const {
    clearable,
    onClear,
    InputProps,
    sx,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const IconButton = (slots == null ? void 0 : slots.clearButton) ?? IconButton_default;
  const _useSlotProps = useSlotProps({
    elementType: IconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: localeText.fieldClearLabel
    }
  }), iconButtonProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded23);
  const EndClearIcon = (slots == null ? void 0 : slots.clearIcon) ?? ClearIcon;
  const endClearIconProps = useSlotProps({
    elementType: EndClearIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.clearIcon,
    ownerState: {}
  });
  return _extends({}, other, {
    InputProps: _extends({}, InputProps, {
      endAdornment: (0, import_jsx_runtime13.jsxs)(React24.Fragment, {
        children: [clearable && (0, import_jsx_runtime13.jsx)(InputAdornment_default, {
          position: "end",
          sx: {
            marginRight: (InputProps == null ? void 0 : InputProps.endAdornment) ? -1 : -1.5
          },
          children: (0, import_jsx_runtime13.jsx)(IconButton, _extends({}, iconButtonProps, {
            onClick: onClear,
            children: (0, import_jsx_runtime13.jsx)(EndClearIcon, _extends({
              fontSize: "small"
            }, endClearIconProps))
          }))
        }), InputProps == null ? void 0 : InputProps.endAdornment]
      })
    }),
    sx: [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(sx) ? sx : [sx]]
  });
};

// node_modules/@mui/x-date-pickers/PickersTextField/PickersTextField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React31 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_clsx();
init_utils();
init_useForkRef();
init_composeClasses();
init_useId();

// node_modules/@mui/x-date-pickers/PickersTextField/pickersTextFieldClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getPickersTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiPickersTextField", slot);
}
var pickersTextFieldClasses = generateUtilityClasses("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);

// node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
init_objectWithoutPropertiesLoose();
init_extends();
var React28 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_utils();
init_composeClasses();

// node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/pickersOutlinedInputClasses.js
init_extends();
init_generateUtilityClasses();
init_generateUtilityClass();

// node_modules/@mui/x-date-pickers/PickersTextField/PickersInputBase/PickersInputBase.js
init_objectWithoutPropertiesLoose();
init_extends();
var React26 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_useForkRef();
init_utils();
init_composeClasses();
init_capitalize();
init_visuallyHidden();

// node_modules/@mui/x-date-pickers/PickersTextField/PickersInputBase/pickersInputBaseClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getPickersInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiPickersInputBase", slot);
}
var pickersInputBaseClasses = generateUtilityClasses("MuiPickersInputBase", ["root", "focused", "disabled", "error", "notchedOutline", "sectionContent", "sectionBefore", "sectionAfter", "adornedStart", "adornedEnd", "input"]);

// node_modules/@mui/x-date-pickers/PickersSectionList/PickersSectionList.js
init_objectWithoutPropertiesLoose();
init_extends();
var React25 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_composeClasses();
init_useForkRef();

// node_modules/@mui/x-date-pickers/PickersSectionList/pickersSectionListClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getPickersSectionListUtilityClass(slot) {
  return generateUtilityClass("MuiPickersSectionList", slot);
}
var pickersSectionListClasses = generateUtilityClasses("MuiPickersSectionList", ["root", "section", "sectionContent"]);

// node_modules/@mui/x-date-pickers/PickersSectionList/PickersSectionList.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded13 = ["slots", "slotProps", "elements", "sectionListRef"];
var PickersSectionListRoot = styled_default("div", {
  name: "MuiPickersSectionList",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
});
var PickersSectionListSection = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "Section",
  overridesResolver: (props, styles) => styles.section
})({});
var PickersSectionListSectionSeparator = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator",
  overridesResolver: (props, styles) => styles.sectionSeparator
})({
  whiteSpace: "pre"
});
var PickersSectionListSectionContent = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent",
  overridesResolver: (props, styles) => styles.sectionContent
})({
  outline: "none"
});
var useUtilityClasses10 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    section: ["section"],
    sectionContent: ["sectionContent"]
  };
  return composeClasses(slots, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
  const {
    slots,
    slotProps,
    element,
    classes
  } = props;
  const Section = (slots == null ? void 0 : slots.section) ?? PickersSectionListSection;
  const sectionProps = useSlotProps({
    elementType: Section,
    externalSlotProps: slotProps == null ? void 0 : slotProps.section,
    externalForwardedProps: element.container,
    className: classes.section,
    ownerState: {}
  });
  const SectionContent = (slots == null ? void 0 : slots.sectionContent) ?? PickersSectionListSectionContent;
  const sectionContentProps = useSlotProps({
    elementType: SectionContent,
    externalSlotProps: slotProps == null ? void 0 : slotProps.sectionContent,
    externalForwardedProps: element.content,
    additionalProps: {
      suppressContentEditableWarning: true
    },
    className: classes.sectionContent,
    ownerState: {}
  });
  const SectionSeparator = (slots == null ? void 0 : slots.sectionSeparator) ?? PickersSectionListSectionSeparator;
  const sectionSeparatorBeforeProps = useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps == null ? void 0 : slotProps.sectionSeparator,
    externalForwardedProps: element.before,
    ownerState: {
      position: "before"
    }
  });
  const sectionSeparatorAfterProps = useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps == null ? void 0 : slotProps.sectionSeparator,
    externalForwardedProps: element.after,
    ownerState: {
      position: "after"
    }
  });
  return (0, import_jsx_runtime14.jsxs)(Section, _extends({}, sectionProps, {
    children: [(0, import_jsx_runtime14.jsx)(SectionSeparator, _extends({}, sectionSeparatorBeforeProps)), (0, import_jsx_runtime14.jsx)(SectionContent, _extends({}, sectionContentProps)), (0, import_jsx_runtime14.jsx)(SectionSeparator, _extends({}, sectionSeparatorAfterProps))]
  }));
}
var PickersSectionList = React25.forwardRef(function PickersSectionList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSectionList"
  });
  const {
    slots,
    slotProps,
    elements,
    sectionListRef
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const classes = useUtilityClasses10(props);
  const rootRef = React25.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const getRoot = (methodName) => {
    if (!rootRef.current) {
      throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
    }
    return rootRef.current;
  };
  React25.useImperativeHandle(sectionListRef, () => ({
    getRoot() {
      return getRoot("getRoot");
    },
    getSectionContainer(index) {
      const root = getRoot("getSectionContainer");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
    },
    getSectionContent(index) {
      const root = getRoot("getSectionContent");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
    },
    getSectionIndexFromDOMElement(element) {
      const root = getRoot("getSectionIndexFromDOMElement");
      if (element == null || !root.contains(element)) {
        return null;
      }
      let sectionContainer = null;
      if (element.classList.contains(pickersSectionListClasses.section)) {
        sectionContainer = element;
      } else if (element.classList.contains(pickersSectionListClasses.sectionContent)) {
        sectionContainer = element.parentElement;
      }
      if (sectionContainer == null) {
        return null;
      }
      return Number(sectionContainer.dataset.sectionindex);
    }
  }));
  const Root = (slots == null ? void 0 : slots.root) ?? PickersSectionListRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps == null ? void 0 : slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRootRef,
      suppressContentEditableWarning: true
    },
    className: classes.root,
    ownerState: {}
  });
  return (0, import_jsx_runtime14.jsx)(Root, _extends({}, rootProps, {
    children: rootProps.contentEditable ? elements.map(({
      content,
      before,
      after
    }) => `${before.children}${content.children}${after.children}`).join("") : (0, import_jsx_runtime14.jsx)(React25.Fragment, {
      children: elements.map((element, elementIndex) => (0, import_jsx_runtime14.jsx)(PickersSection, {
        slots,
        slotProps,
        element,
        classes
      }, elementIndex))
    })
  }));
});
true ? PickersSectionList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types6.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types6.default.arrayOf(import_prop_types6.default.shape({
    after: import_prop_types6.default.object.isRequired,
    before: import_prop_types6.default.object.isRequired,
    container: import_prop_types6.default.object.isRequired,
    content: import_prop_types6.default.object.isRequired
  })).isRequired,
  sectionListRef: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.shape({
    current: import_prop_types6.default.shape({
      getRoot: import_prop_types6.default.func.isRequired,
      getSectionContainer: import_prop_types6.default.func.isRequired,
      getSectionContent: import_prop_types6.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types6.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: import_prop_types6.default.object,
  /**
   * Overridable component slots.
   */
  slots: import_prop_types6.default.object
} : void 0;

// node_modules/@mui/x-date-pickers/PickersTextField/PickersInputBase/PickersInputBase.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded14 = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef"];
var round = (value) => Math.round(value * 1e5) / 1e5;
var PickersInputBaseRoot = styled_default("div", {
  name: "MuiPickersInputBase",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${round(0.15 / 16)}em`,
  variants: [{
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
}));
var PickersInputBaseSectionsContainer = styled_default(PickersSectionListRoot, {
  name: "MuiPickersInputBase",
  slot: "SectionsContainer",
  overridesResolver: (props, styles) => styles.sectionsContainer
})(({
  theme
}) => _extends({
  padding: "4px 0 5px",
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  lineHeight: "1.4375em",
  // 23px
  flexGrow: 1,
  outline: "none",
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  letterSpacing: "inherit",
  // Baseline behavior
  width: "182px"
}, theme.direction === "rtl" && {
  textAlign: "right /*! @noflip */"
}, {
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      adornedStart: false,
      focused: false,
      filled: false
    },
    style: {
      color: "currentColor",
      opacity: 0
    }
  }, {
    // Can't use the object notation because label can be null or undefined
    props: ({
      adornedStart,
      focused,
      filled,
      label
    }) => !adornedStart && !focused && !filled && label == null,
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === "light" ? 0.42 : 0.5
    }
  }]
}));
var PickersInputBaseSection = styled_default(PickersSectionListSection, {
  name: "MuiPickersInputBase",
  slot: "Section",
  overridesResolver: (props, styles) => styles.section
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "1.4375em",
  // 23px
  display: "flex"
}));
var PickersInputBaseSectionContent = styled_default(PickersSectionListSectionContent, {
  name: "MuiPickersInputBase",
  slot: "SectionContent",
  overridesResolver: (props, styles) => styles.content
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  lineHeight: "1.4375em",
  // 23px
  letterSpacing: "inherit",
  width: "fit-content",
  outline: "none"
}));
var PickersInputBaseSectionSeparator = styled_default(PickersSectionListSectionSeparator, {
  name: "MuiPickersInputBase",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
}));
var PickersInputBaseInput = styled_default("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (props, styles) => styles.hiddenInput
})(_extends({}, visuallyHidden_default));
var useUtilityClasses11 = (ownerState) => {
  const {
    focused,
    disabled,
    error,
    classes,
    fullWidth,
    readOnly,
    color,
    size,
    endAdornment,
    startAdornment
  } = ownerState;
  const slots = {
    root: ["root", focused && !disabled && "focused", disabled && "disabled", readOnly && "readOnly", error && "error", fullWidth && "fullWidth", `color${capitalize(color)}`, size === "small" && "inputSizeSmall", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"]
  };
  return composeClasses(slots, getPickersInputBaseUtilityClass, classes);
};
var PickersInputBase = React26.forwardRef(function PickersInputBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInputBase"
  });
  const {
    elements,
    areAllSectionsEmpty,
    value,
    onChange,
    id,
    endAdornment,
    startAdornment,
    renderSuffix,
    slots,
    slotProps,
    contentEditable,
    tabIndex,
    onInput,
    onPaste,
    onKeyDown,
    name,
    readOnly,
    inputProps,
    inputRef,
    sectionListRef
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const rootRef = React26.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const handleInputRef = useForkRef(inputProps == null ? void 0 : inputProps.ref, inputRef);
  const muiFormControl = useFormControl();
  if (!muiFormControl) {
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  }
  const handleInputFocus = (event) => {
    var _a;
    if (muiFormControl.disabled) {
      event.stopPropagation();
      return;
    }
    (_a = muiFormControl.onFocus) == null ? void 0 : _a.call(muiFormControl, event);
  };
  React26.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  React26.useEffect(() => {
    if (!muiFormControl) {
      return;
    }
    if (areAllSectionsEmpty) {
      muiFormControl.onEmpty();
    } else {
      muiFormControl.onFilled();
    }
  }, [muiFormControl, areAllSectionsEmpty]);
  const ownerState = _extends({}, props, muiFormControl);
  const classes = useUtilityClasses11(ownerState);
  const InputRoot = (slots == null ? void 0 : slots.root) || PickersInputBaseRoot;
  const inputRootProps = useSlotProps({
    elementType: InputRoot,
    externalSlotProps: slotProps == null ? void 0 : slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      "aria-invalid": muiFormControl.error,
      ref: handleRootRef
    },
    className: classes.root,
    ownerState
  });
  const InputSectionsContainer = (slots == null ? void 0 : slots.input) || PickersInputBaseSectionsContainer;
  return (0, import_jsx_runtime15.jsxs)(InputRoot, _extends({}, inputRootProps, {
    children: [startAdornment, (0, import_jsx_runtime15.jsx)(PickersSectionList, {
      sectionListRef,
      elements,
      contentEditable,
      tabIndex,
      className: classes.sectionsContainer,
      onFocus: handleInputFocus,
      onBlur: muiFormControl.onBlur,
      onInput,
      onPaste,
      onKeyDown,
      slots: {
        root: InputSectionsContainer,
        section: PickersInputBaseSection,
        sectionContent: PickersInputBaseSectionContent,
        sectionSeparator: PickersInputBaseSectionSeparator
      },
      slotProps: {
        root: {
          ownerState
        },
        sectionContent: {
          className: pickersInputBaseClasses.sectionContent
        },
        sectionSeparator: ({
          position
        }) => ({
          className: position === "before" ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter
        })
      }
    }), endAdornment, renderSuffix ? renderSuffix(_extends({}, muiFormControl)) : null, (0, import_jsx_runtime15.jsx)(PickersInputBaseInput, _extends({
      name,
      className: classes.input,
      value,
      onChange,
      id,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly,
      required: muiFormControl.required,
      disabled: muiFormControl.disabled
    }, inputProps, {
      ref: handleInputRef
    }))]
  }));
});
true ? PickersInputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types7.default.bool.isRequired,
  className: import_prop_types7.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types7.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types7.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types7.default.arrayOf(import_prop_types7.default.shape({
    after: import_prop_types7.default.object.isRequired,
    before: import_prop_types7.default.object.isRequired,
    container: import_prop_types7.default.object.isRequired,
    content: import_prop_types7.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types7.default.node,
  fullWidth: import_prop_types7.default.bool,
  id: import_prop_types7.default.string,
  inputProps: import_prop_types7.default.object,
  inputRef: refType_default,
  label: import_prop_types7.default.node,
  margin: import_prop_types7.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types7.default.string,
  onChange: import_prop_types7.default.func.isRequired,
  onClick: import_prop_types7.default.func.isRequired,
  onInput: import_prop_types7.default.func.isRequired,
  onKeyDown: import_prop_types7.default.func.isRequired,
  onPaste: import_prop_types7.default.func.isRequired,
  ownerState: import_prop_types7.default.any,
  readOnly: import_prop_types7.default.bool,
  renderSuffix: import_prop_types7.default.func,
  sectionListRef: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.shape({
    current: import_prop_types7.default.shape({
      getRoot: import_prop_types7.default.func.isRequired,
      getSectionContainer: import_prop_types7.default.func.isRequired,
      getSectionContent: import_prop_types7.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types7.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types7.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types7.default.object,
  startAdornment: import_prop_types7.default.node,
  style: import_prop_types7.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  value: import_prop_types7.default.string.isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/pickersOutlinedInputClasses.js
function getPickersOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersOutlinedInput", slot);
}
var pickersOutlinedInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersOutlinedInput", ["root", "notchedOutline", "input"]));

// node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/Outline.js
init_extends();
init_objectWithoutPropertiesLoose();
var React27 = __toESM(require_react());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded15 = ["children", "className", "label", "notched", "shrink"];
var OutlineRoot = styled_default("fieldset", {
  name: "MuiPickersOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles) => styles.notchedOutline
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
var OutlineLabel = styled_default("span")(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit"
}));
var OutlineLegend = styled_default("legend")(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      withLabel: false
    },
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      withLabel: true
    },
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: {
      withLabel: true,
      notched: true
    },
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));
function Outline(props) {
  const {
    className,
    label
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    withLabel
  });
  return (0, import_jsx_runtime16.jsx)(OutlineRoot, _extends({
    "aria-hidden": true,
    className
  }, other, {
    ownerState,
    children: (0, import_jsx_runtime16.jsx)(OutlineLegend, {
      ownerState,
      children: withLabel ? (0, import_jsx_runtime16.jsx)(OutlineLabel, {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        (0, import_jsx_runtime16.jsx)(OutlineLabel, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}

// node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded16 = ["label", "autoFocus", "ownerState", "notched"];
var PickersOutlinedInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersOutlinedInput",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${pickersOutlinedInputClasses.disabled}`]: {
      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      },
      "*": {
        color: (theme.vars || theme).palette.action.disabled
      }
    },
    [`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    variants: Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        color
      },
      style: {
        [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    }))
  };
});
var PickersOutlinedInputSectionsContainer = styled_default(PickersInputBaseSectionsContainer, {
  name: "MuiPickersOutlinedInput",
  slot: "SectionsContainer",
  overridesResolver: (props, styles) => styles.sectionsContainer
})({
  padding: "16.5px 0",
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 0"
    }
  }]
});
var useUtilityClasses12 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersOutlinedInput = React28.forwardRef(function PickersOutlinedInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersOutlinedInput"
  });
  const {
    label,
    ownerState: ownerStateProp,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const muiFormControl = useFormControl();
  const ownerState = _extends({}, props, ownerStateProp, muiFormControl, {
    color: (muiFormControl == null ? void 0 : muiFormControl.color) || "primary"
  });
  const classes = useUtilityClasses12(ownerState);
  return (0, import_jsx_runtime17.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersOutlinedInputRoot,
      input: PickersOutlinedInputSectionsContainer
    },
    renderSuffix: (state) => (0, import_jsx_runtime17.jsx)(Outline, {
      shrink: Boolean(notched || state.adornedStart || state.focused || state.filled),
      notched: Boolean(notched || state.adornedStart || state.focused || state.filled),
      className: classes.notchedOutline,
      label: label != null && label !== "" && (muiFormControl == null ? void 0 : muiFormControl.required) ? (0, import_jsx_runtime17.jsxs)(React28.Fragment, {
        children: [label, " ", "*"]
      }) : label,
      ownerState
    })
  }, other, {
    label,
    classes,
    ref
  }));
});
true ? PickersOutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types8.default.bool.isRequired,
  className: import_prop_types8.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types8.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types8.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types8.default.arrayOf(import_prop_types8.default.shape({
    after: import_prop_types8.default.object.isRequired,
    before: import_prop_types8.default.object.isRequired,
    container: import_prop_types8.default.object.isRequired,
    content: import_prop_types8.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types8.default.node,
  fullWidth: import_prop_types8.default.bool,
  id: import_prop_types8.default.string,
  inputProps: import_prop_types8.default.object,
  inputRef: refType_default,
  label: import_prop_types8.default.node,
  margin: import_prop_types8.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types8.default.string,
  notched: import_prop_types8.default.bool,
  onChange: import_prop_types8.default.func.isRequired,
  onClick: import_prop_types8.default.func.isRequired,
  onInput: import_prop_types8.default.func.isRequired,
  onKeyDown: import_prop_types8.default.func.isRequired,
  onPaste: import_prop_types8.default.func.isRequired,
  ownerState: import_prop_types8.default.any,
  readOnly: import_prop_types8.default.bool,
  renderSuffix: import_prop_types8.default.func,
  sectionListRef: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.shape({
    current: import_prop_types8.default.shape({
      getRoot: import_prop_types8.default.func.isRequired,
      getSectionContainer: import_prop_types8.default.func.isRequired,
      getSectionContent: import_prop_types8.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types8.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types8.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types8.default.object,
  startAdornment: import_prop_types8.default.node,
  style: import_prop_types8.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  value: import_prop_types8.default.string.isRequired
} : void 0;
PickersOutlinedInput.muiName = "Input";

// node_modules/@mui/x-date-pickers/PickersTextField/PickersFilledInput/PickersFilledInput.js
init_objectWithoutPropertiesLoose();
init_extends();
var React29 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_utils();
init_composeClasses();

// node_modules/@mui/x-date-pickers/PickersTextField/PickersFilledInput/pickersFilledInputClasses.js
init_extends();
init_generateUtilityClasses();
init_generateUtilityClass();
function getPickersFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersFilledInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersFilledInput", ["root", "underline", "input"]));

// node_modules/@mui/x-date-pickers/PickersTextField/PickersFilledInput/PickersFilledInput.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded17 = ["label", "autoFocus", "disableUnderline", "ownerState"];
var PickersFilledInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${pickersFilledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${pickersFilledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => {
      var _a;
      return {
        props: {
          color,
          disableUnderline: false
        },
        style: {
          "&::after": {
            // @ts-ignore
            borderBottom: `2px solid ${(_a = (theme.vars || theme).palette[color]) == null ? void 0 : _a.main}`
          }
        }
      };
    }), {
      props: {
        disableUnderline: false
      },
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersFilledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersFilledInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${pickersFilledInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, {
      props: ({
        startAdornment
      }) => !!startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        endAdornment
      }) => !!endAdornment,
      style: {
        paddingRight: 12
      }
    }]
  };
});
var PickersFilledSectionsContainer = styled_default(PickersInputBaseSectionsContainer, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  overridesResolver: (props, styles) => styles.sectionsContainer
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      startAdornment
    }) => !!startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      endAdornment
    }) => !!endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: true
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: true,
      size: "small"
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
});
var useUtilityClasses13 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersFilledInput = React29.forwardRef(function PickersFilledInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFilledInput"
  });
  const {
    label,
    disableUnderline = false,
    ownerState: ownerStateProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const muiFormControl = useFormControl();
  const ownerState = _extends({}, props, ownerStateProp, muiFormControl, {
    color: (muiFormControl == null ? void 0 : muiFormControl.color) || "primary"
  });
  const classes = useUtilityClasses13(ownerState);
  return (0, import_jsx_runtime18.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersFilledInputRoot,
      input: PickersFilledSectionsContainer
    },
    slotProps: {
      root: {
        disableUnderline
      }
    }
  }, other, {
    label,
    classes,
    ref
  }));
});
true ? PickersFilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types9.default.bool.isRequired,
  className: import_prop_types9.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types9.default.bool.isRequired,
  disableUnderline: import_prop_types9.default.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types9.default.arrayOf(import_prop_types9.default.shape({
    after: import_prop_types9.default.object.isRequired,
    before: import_prop_types9.default.object.isRequired,
    container: import_prop_types9.default.object.isRequired,
    content: import_prop_types9.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types9.default.node,
  fullWidth: import_prop_types9.default.bool,
  hiddenLabel: import_prop_types9.default.bool,
  id: import_prop_types9.default.string,
  inputProps: import_prop_types9.default.object,
  inputRef: refType_default,
  label: import_prop_types9.default.node,
  margin: import_prop_types9.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types9.default.string,
  onChange: import_prop_types9.default.func.isRequired,
  onClick: import_prop_types9.default.func.isRequired,
  onInput: import_prop_types9.default.func.isRequired,
  onKeyDown: import_prop_types9.default.func.isRequired,
  onPaste: import_prop_types9.default.func.isRequired,
  ownerState: import_prop_types9.default.any,
  readOnly: import_prop_types9.default.bool,
  renderSuffix: import_prop_types9.default.func,
  sectionListRef: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.shape({
    current: import_prop_types9.default.shape({
      getRoot: import_prop_types9.default.func.isRequired,
      getSectionContainer: import_prop_types9.default.func.isRequired,
      getSectionContent: import_prop_types9.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types9.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types9.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types9.default.object,
  startAdornment: import_prop_types9.default.node,
  style: import_prop_types9.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  value: import_prop_types9.default.string.isRequired
} : void 0;
PickersFilledInput.muiName = "Input";

// node_modules/@mui/x-date-pickers/PickersTextField/PickersInput/PickersInput.js
init_objectWithoutPropertiesLoose();
init_extends();
var React30 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
init_utils();
init_composeClasses();

// node_modules/@mui/x-date-pickers/PickersTextField/PickersInput/pickersInputClasses.js
init_extends();
init_generateUtilityClasses();
init_generateUtilityClass();
function getPickersInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersInput", ["root", "input"]));

// node_modules/@mui/x-date-pickers/PickersTextField/PickersInput/PickersInput.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded18 = ["label", "autoFocus", "disableUnderline", "ownerState"];
var PickersInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersInput",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    "label + &": {
      marginTop: 16
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        color
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    })), {
      props: {
        disableUnderline: false
      },
      style: {
        "&::after": {
          background: "red",
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${pickersInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
});
var useUtilityClasses14 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersInput = React30.forwardRef(function PickersInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInput"
  });
  const {
    label,
    disableUnderline = false,
    ownerState: ownerStateProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const muiFormControl = useFormControl();
  const ownerState = _extends({}, props, ownerStateProp, muiFormControl, {
    disableUnderline,
    color: (muiFormControl == null ? void 0 : muiFormControl.color) || "primary"
  });
  const classes = useUtilityClasses14(ownerState);
  return (0, import_jsx_runtime19.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersInputRoot
    }
  }, other, {
    label,
    classes,
    ref
  }));
});
true ? PickersInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types10.default.bool.isRequired,
  className: import_prop_types10.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types10.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types10.default.bool.isRequired,
  disableUnderline: import_prop_types10.default.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
    after: import_prop_types10.default.object.isRequired,
    before: import_prop_types10.default.object.isRequired,
    container: import_prop_types10.default.object.isRequired,
    content: import_prop_types10.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types10.default.node,
  fullWidth: import_prop_types10.default.bool,
  id: import_prop_types10.default.string,
  inputProps: import_prop_types10.default.object,
  inputRef: refType_default,
  label: import_prop_types10.default.node,
  margin: import_prop_types10.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types10.default.string,
  onChange: import_prop_types10.default.func.isRequired,
  onClick: import_prop_types10.default.func.isRequired,
  onInput: import_prop_types10.default.func.isRequired,
  onKeyDown: import_prop_types10.default.func.isRequired,
  onPaste: import_prop_types10.default.func.isRequired,
  ownerState: import_prop_types10.default.any,
  readOnly: import_prop_types10.default.bool,
  renderSuffix: import_prop_types10.default.func,
  sectionListRef: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.shape({
    current: import_prop_types10.default.shape({
      getRoot: import_prop_types10.default.func.isRequired,
      getSectionContainer: import_prop_types10.default.func.isRequired,
      getSectionContent: import_prop_types10.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types10.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types10.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types10.default.object,
  startAdornment: import_prop_types10.default.node,
  style: import_prop_types10.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  value: import_prop_types10.default.string.isRequired
} : void 0;
PickersInput.muiName = "Input";

// node_modules/@mui/x-date-pickers/PickersTextField/PickersTextField.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded19 = ["onFocus", "onBlur", "className", "color", "disabled", "error", "variant", "required", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps"];
var VARIANT_COMPONENT = {
  standard: PickersInput,
  filled: PickersFilledInput,
  outlined: PickersOutlinedInput
};
var PickersTextFieldRoot = styled_default(FormControl_default, {
  name: "MuiPickersTextField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var useUtilityClasses15 = (ownerState) => {
  const {
    focused,
    disabled,
    classes,
    required
  } = ownerState;
  const slots = {
    root: ["root", focused && !disabled && "focused", disabled && "disabled", required && "required"]
  };
  return composeClasses(slots, getPickersTextFieldUtilityClass, classes);
};
var PickersTextField = React31.forwardRef(function PickersTextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersTextField"
  });
  const {
    // Props used by FormControl
    onFocus,
    onBlur,
    className,
    color = "primary",
    disabled = false,
    error = false,
    variant = "outlined",
    required = false,
    // Props used by PickersInput
    InputProps,
    inputProps,
    inputRef,
    sectionListRef,
    elements,
    areAllSectionsEmpty,
    onClick,
    onKeyDown,
    onPaste,
    onInput,
    endAdornment,
    startAdornment,
    tabIndex,
    contentEditable,
    focused,
    value,
    onChange,
    fullWidth,
    id: idProp,
    name,
    // Props used by FormHelperText
    helperText,
    FormHelperTextProps,
    // Props used by InputLabel
    label,
    InputLabelProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const rootRef = React31.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const id = useId(idProp);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const ownerState = _extends({}, props, {
    color,
    disabled,
    error,
    focused,
    required,
    variant
  });
  const classes = useUtilityClasses15(ownerState);
  const PickersInputComponent = VARIANT_COMPONENT[variant];
  return (0, import_jsx_runtime20.jsxs)(PickersTextFieldRoot, _extends({
    className: clsx_default(classes.root, className),
    ref: handleRootRef,
    focused,
    onFocus,
    onBlur,
    disabled,
    variant,
    error,
    color,
    fullWidth,
    required,
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime20.jsx)(InputLabel_default, _extends({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), (0, import_jsx_runtime20.jsx)(PickersInputComponent, _extends({
      elements,
      areAllSectionsEmpty,
      onClick,
      onKeyDown,
      onInput,
      onPaste,
      endAdornment,
      startAdornment,
      tabIndex,
      contentEditable,
      value,
      onChange,
      id,
      fullWidth,
      inputProps,
      inputRef,
      sectionListRef,
      label,
      name,
      role: "group",
      "aria-labelledby": inputLabelId
    }, InputProps)), helperText && (0, import_jsx_runtime20.jsx)(FormHelperText_default, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
true ? PickersTextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types11.default.bool.isRequired,
  className: import_prop_types11.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types11.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types11.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types11.default.bool.isRequired,
  disabled: import_prop_types11.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types11.default.arrayOf(import_prop_types11.default.shape({
    after: import_prop_types11.default.object.isRequired,
    before: import_prop_types11.default.object.isRequired,
    container: import_prop_types11.default.object.isRequired,
    content: import_prop_types11.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types11.default.node,
  error: import_prop_types11.default.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types11.default.bool,
  FormHelperTextProps: import_prop_types11.default.object,
  fullWidth: import_prop_types11.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types11.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types11.default.bool,
  id: import_prop_types11.default.string,
  InputLabelProps: import_prop_types11.default.object,
  inputProps: import_prop_types11.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types11.default.object,
  inputRef: refType_default,
  label: import_prop_types11.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types11.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types11.default.string,
  onBlur: import_prop_types11.default.func.isRequired,
  onChange: import_prop_types11.default.func.isRequired,
  onClick: import_prop_types11.default.func.isRequired,
  onFocus: import_prop_types11.default.func.isRequired,
  onInput: import_prop_types11.default.func.isRequired,
  onKeyDown: import_prop_types11.default.func.isRequired,
  onPaste: import_prop_types11.default.func.isRequired,
  readOnly: import_prop_types11.default.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types11.default.bool,
  sectionListRef: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.shape({
    current: import_prop_types11.default.shape({
      getRoot: import_prop_types11.default.func.isRequired,
      getSectionContainer: import_prop_types11.default.func.isRequired,
      getSectionContent: import_prop_types11.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types11.default.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types11.default.oneOf(["medium", "small"]),
  startAdornment: import_prop_types11.default.node,
  style: import_prop_types11.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  value: import_prop_types11.default.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types11.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/internals/utils/convertFieldResponseIntoMuiTextFieldProps.js
init_extends();
init_objectWithoutPropertiesLoose();
var _excluded20 = ["enableAccessibleFieldDOMStructure"];
var _excluded24 = ["InputProps", "readOnly"];
var _excluded32 = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef"];
var convertFieldResponseIntoMuiTextFieldProps = (_ref) => {
  let {
    enableAccessibleFieldDOMStructure
  } = _ref, fieldResponse = _objectWithoutPropertiesLoose(_ref, _excluded20);
  if (enableAccessibleFieldDOMStructure) {
    const {
      InputProps: InputProps2,
      readOnly: readOnly2
    } = fieldResponse, other2 = _objectWithoutPropertiesLoose(fieldResponse, _excluded24);
    return _extends({}, other2, {
      InputProps: _extends({}, InputProps2 ?? {}, {
        readOnly: readOnly2
      })
    });
  }
  const {
    onPaste,
    onKeyDown,
    inputMode,
    readOnly,
    InputProps,
    inputProps,
    inputRef
  } = fieldResponse, other = _objectWithoutPropertiesLoose(fieldResponse, _excluded32);
  return _extends({}, other, {
    InputProps: _extends({}, InputProps ?? {}, {
      readOnly
    }),
    inputProps: _extends({}, inputProps ?? {}, {
      inputMode,
      onPaste,
      onKeyDown,
      ref: inputRef
    })
  });
};

// node_modules/@mui/x-date-pickers/DateField/DateField.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded21 = ["slots", "slotProps", "InputProps", "inputProps"];
var DateField = React32.forwardRef(function DateField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateField"
  });
  const {
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded21);
  const ownerState = themeProps;
  const TextField = (slots == null ? void 0 : slots.textField) ?? (inProps.enableAccessibleFieldDOMStructure ? PickersTextField : TextField_default);
  const textFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    externalForwardedProps: other,
    additionalProps: {
      ref: inRef
    },
    ownerState
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const fieldResponse = useDateField(textFieldProps);
  const convertedFieldResponse = convertFieldResponseIntoMuiTextFieldProps(fieldResponse);
  const processedFieldProps = useClearableField(_extends({}, convertedFieldResponse, {
    slots,
    slotProps
  }));
  return (0, import_jsx_runtime21.jsx)(TextField, _extends({}, processedFieldProps));
});
true ? DateField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types12.default.bool,
  className: import_prop_types12.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types12.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types12.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types12.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types12.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types12.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types12.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types12.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types12.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types12.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types12.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types12.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types12.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types12.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types12.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types12.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types12.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types12.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types12.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types12.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types12.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types12.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types12.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types12.default.object,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types12.default.string,
  onBlur: import_prop_types12.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types12.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types12.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types12.default.func,
  onFocus: import_prop_types12.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types12.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types12.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types12.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types12.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types12.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types12.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types12.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types12.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types12.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types12.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types12.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types12.default.object,
  style: import_prop_types12.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types12.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types12.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types12.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/TimeField/TimeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React33 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/utils/validation/validateTime.js
var validateTime = ({
  adapter,
  value,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.date(void 0, timezone);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, value)):
      return "minTime";
    case Boolean(maxTime && isAfter(value, maxTime)):
      return "maxTime";
    case Boolean(disableFuture && adapter.utils.isAfter(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBefore(value, now)):
      return "disablePast";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};

// node_modules/@mui/x-date-pickers/TimeField/useTimeField.js
var useTimeField = (inProps) => {
  const props = useDefaultizedTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "time");
  return useField({
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateTime,
    valueType: "time"
  });
};

// node_modules/@mui/x-date-pickers/TimeField/TimeField.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _excluded25 = ["slots", "slotProps", "InputProps", "inputProps"];
var TimeField = React33.forwardRef(function TimeField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTimeField"
  });
  const {
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded25);
  const ownerState = themeProps;
  const TextField = (slots == null ? void 0 : slots.textField) ?? (inProps.enableAccessibleFieldDOMStructure ? PickersTextField : TextField_default);
  const textFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      ref: inRef
    }
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const fieldResponse = useTimeField(textFieldProps);
  const convertedFieldResponse = convertFieldResponseIntoMuiTextFieldProps(fieldResponse);
  const processedFieldProps = useClearableField(_extends({}, convertedFieldResponse, {
    slots,
    slotProps
  }));
  return (0, import_jsx_runtime22.jsx)(TextField, _extends({}, processedFieldProps));
});
true ? TimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types13.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types13.default.bool,
  className: import_prop_types13.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types13.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types13.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types13.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types13.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types13.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types13.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types13.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types13.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types13.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types13.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types13.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types13.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types13.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types13.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types13.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types13.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types13.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types13.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types13.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types13.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types13.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types13.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types13.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types13.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types13.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types13.default.string,
  onBlur: import_prop_types13.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types13.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types13.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types13.default.func,
  onFocus: import_prop_types13.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types13.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types13.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types13.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types13.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types13.default.number]),
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types13.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types13.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types13.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types13.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types13.default.object,
  style: import_prop_types13.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types13.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types13.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types13.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React34 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/utils/validation/validateDateTime.js
var validateDateTime = ({
  props,
  value,
  adapter
}) => {
  const dateValidationResult = validateDate({
    adapter,
    value,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    props
  });
};

// node_modules/@mui/x-date-pickers/DateTimeField/useDateTimeField.js
var useDateTimeField = (inProps) => {
  const props = useDefaultizedDateTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date-time");
  return useField({
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDateTime,
    valueType: "date-time"
  });
};

// node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var _excluded26 = ["slots", "slotProps", "InputProps", "inputProps"];
var DateTimeField = React34.forwardRef(function DateTimeField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateTimeField"
  });
  const {
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded26);
  const ownerState = themeProps;
  const TextField = (slots == null ? void 0 : slots.textField) ?? (inProps.enableAccessibleFieldDOMStructure ? PickersTextField : TextField_default);
  const textFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      ref: inRef
    }
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const fieldResponse = useDateTimeField(textFieldProps);
  const convertedFieldResponse = convertFieldResponseIntoMuiTextFieldProps(fieldResponse);
  const processedFieldProps = useClearableField(_extends({}, convertedFieldResponse, {
    slots,
    slotProps
  }));
  return (0, import_jsx_runtime23.jsx)(TextField, _extends({}, processedFieldProps));
});
true ? DateTimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types14.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types14.default.bool,
  className: import_prop_types14.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types14.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types14.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types14.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types14.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types14.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types14.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types14.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types14.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types14.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types14.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types14.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types14.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types14.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types14.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types14.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types14.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types14.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types14.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types14.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types14.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types14.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types14.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types14.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types14.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types14.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types14.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types14.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types14.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types14.default.string,
  onBlur: import_prop_types14.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types14.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types14.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types14.default.func,
  onFocus: import_prop_types14.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types14.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types14.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types14.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types14.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types14.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types14.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types14.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types14.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types14.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types14.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types14.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types14.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types14.default.object,
  style: import_prop_types14.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types14.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types14.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types14.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/DateCalendar/DateCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React45 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/DateCalendar/useCalendarState.js
init_extends();
var React36 = __toESM(require_react());
init_useEventCallback();

// node_modules/@mui/x-date-pickers/DateCalendar/useIsDateDisabled.js
var React35 = __toESM(require_react());
var useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = useLocalizationContext();
  return React35.useCallback((day) => validateDate({
    adapter,
    value: day,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast,
      timezone
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};

// node_modules/@mui/x-date-pickers/DateCalendar/useCalendarState.js
var createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case "changeMonth":
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });
    case "finishMonthSwitchingAnimation":
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });
    case "changeFocusedDay": {
      if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
        return state;
      }
      const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
      return _extends({}, state, {
        focusedDay: action.focusedDay,
        isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
        currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
        slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
};
var useCalendarState = (params) => {
  const {
    value,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus = false,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    timezone
  } = params;
  const utils = useUtils();
  const reducerFn = React36.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const referenceDate = React36.useMemo(
    () => {
      return singleItemValueManager.getInitialReferenceValue({
        value,
        utils,
        timezone,
        props: params,
        referenceDate: referenceDateProp,
        granularity: SECTION_TYPE_GRANULARITY.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const [calendarState, dispatch] = React36.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    currentMonth: utils.startOfMonth(referenceDate),
    slideDirection: "left"
  });
  const handleChangeMonth = React36.useCallback((payload) => {
    dispatch(_extends({
      type: "changeMonth"
    }, payload));
    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = React36.useCallback((newDate) => {
    const newDateRequested = newDate;
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? "left" : "right"
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  const onMonthSwitchingAnimationEnd = React36.useCallback(() => {
    dispatch({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  const changeFocusedDay = useEventCallback_default((newFocusedDate, withoutMonthSwitchingAnimation) => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: "changeFocusedDay",
        focusedDay: newFocusedDate,
        withoutMonthSwitchingAnimation
      });
    }
  });
  return {
    referenceDate,
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth
  };
};

// node_modules/@mui/x-date-pickers/DateCalendar/PickersFadeTransitionGroup.js
var React37 = __toESM(require_react());
init_clsx();
init_composeClasses();

// node_modules/@mui/x-date-pickers/DateCalendar/pickersFadeTransitionGroupClasses.js
init_utils();
var getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
var pickersFadeTransitionGroupClasses = generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersFadeTransitionGroup.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var useUtilityClasses16 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
var PickersFadeTransitionGroupRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "block",
  position: "relative"
});
function PickersFadeTransitionGroup(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFadeTransitionGroup"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
  } = props;
  const classes = useUtilityClasses16(props);
  const theme = useTheme();
  if (reduceAnimations) {
    return children;
  }
  return (0, import_jsx_runtime24.jsx)(PickersFadeTransitionGroupRoot, {
    className: clsx_default(classes.root, className),
    children: (0, import_jsx_runtime24.jsx)(Fade_default, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children
    }, transKey)
  });
}

// node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React39 = __toESM(require_react());
init_useEventCallback();
init_utils();
init_clsx();

// node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js
init_extends();
init_objectWithoutPropertiesLoose();
var React38 = __toESM(require_react());
init_clsx();
init_composeClasses();

// node_modules/@mui/x-date-pickers/DateCalendar/pickersSlideTransitionClasses.js
init_utils();
var getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
var pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var _excluded27 = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
var useUtilityClasses17 = (ownerState) => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
var PickersSlideTransitionRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: theme.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
    // extracting `classes` from `other`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const classes = useUtilityClasses17(props);
  const theme = useTheme();
  if (reduceAnimations) {
    return (0, import_jsx_runtime25.jsx)("div", {
      className: clsx_default(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return (0, import_jsx_runtime25.jsx)(PickersSlideTransitionRoot, {
    className: clsx_default(classes.root, className),
    childFactory: (element) => React38.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: (0, import_jsx_runtime25.jsx)(CSSTransition_default, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}

// node_modules/@mui/x-date-pickers/DateCalendar/dayCalendarClasses.js
init_utils();
var getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
var dayCalendarClasses = generateUtilityClasses("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);

// node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var _excluded28 = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"];
var _excluded29 = ["ownerState"];
var useUtilityClasses18 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
var PickersCalendarDayRoot = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
var PickersCalendarDayHeader = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (_, styles) => styles.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var PickersCalendarWeekDayLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
var PickersCalendarWeekNumberLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.disabled
}));
var PickersCalendarWeekNumber = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
var PickersCalendarLoadingContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
var PickersCalendarSlideTransition = styled_default(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
var PickersCalendarWeekContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: "hidden"
});
var PickersCalendarWeek = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
function WrappedDay(_ref) {
  let {
    parentProps,
    day,
    focusableDay,
    selectedDays,
    isDateDisabled,
    currentMonthNumber,
    isViewFocused
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded28);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const utils = useUtils();
  const now = useNow(timezone);
  const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
  const isSelected = selectedDays.some((selectedDay) => utils.isSameDay(selectedDay, day));
  const isToday = utils.isSameDay(day, now);
  const Day = (slots == null ? void 0 : slots.day) ?? PickersDay2;
  const _useSlotProps = useSlotProps({
    elementType: Day,
    externalSlotProps: slotProps == null ? void 0 : slotProps.day,
    additionalProps: _extends({
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      role: "gridcell",
      isAnimating: isMonthSwitchingAnimating,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": utils.toJsDate(day).valueOf()
    }, other),
    ownerState: _extends({}, parentProps, {
      day,
      selected: isSelected
    })
  }), dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded29);
  const isDisabled = React39.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const outsideCurrentMonth = React39.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
  const isFirstVisibleCell = React39.useMemo(() => {
    const startOfMonth = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, startOfMonth);
    }
    return utils.isSameDay(day, utils.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  const isLastVisibleCell = React39.useMemo(() => {
    const endOfMonth = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, endOfMonth);
    }
    return utils.isSameDay(day, utils.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  return (0, import_jsx_runtime26.jsx)(Day, _extends({}, dayProps, {
    day,
    disabled: isDisabled,
    autoFocus: isViewFocused && isFocusableDay,
    today: isToday,
    outsideCurrentMonth,
    isFirstVisibleCell,
    isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? "date" : void 0
  }));
}
function DayCalendar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendar"
  });
  const utils = useUtils();
  const {
    onFocusedDayChange,
    className,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => (0, import_jsx_runtime26.jsx)("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = (date) => utils.format(date, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    autoFocus,
    timezone
  } = props;
  const now = useNow(timezone);
  const classes = useUtilityClasses18(props);
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const localeText = useLocaleText();
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const [internalFocusedDay, setInternalFocusedDay] = React39.useState(() => focusedDay || now);
  const handleDaySelect = useEventCallback_default((day) => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = (day) => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      setInternalFocusedDay(day);
      onFocusedViewChange == null ? void 0 : onFocusedViewChange(true);
      setInternalHasFocus(true);
    }
  };
  const handleKeyDown = useEventCallback_default((event, day) => {
    switch (event.key) {
      case "ArrowUp":
        focusDay(utils.addDays(day, -7));
        event.preventDefault();
        break;
      case "ArrowDown":
        focusDay(utils.addDays(day, 7));
        event.preventDefault();
        break;
      case "ArrowLeft": {
        const newFocusedDayDefault = utils.addDays(day, isRTL ? 1 : -1);
        const nextAvailableMonth = utils.addMonths(day, isRTL ? 1 : -1);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: isRTL ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
          maxDate: isRTL ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        const newFocusedDayDefault = utils.addDays(day, isRTL ? -1 : 1);
        const nextAvailableMonth = utils.addMonths(day, isRTL ? -1 : 1);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: isRTL ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          maxDate: isRTL ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "Home":
        focusDay(utils.startOfWeek(day));
        event.preventDefault();
        break;
      case "End":
        focusDay(utils.endOfWeek(day));
        event.preventDefault();
        break;
      case "PageUp":
        focusDay(utils.addMonths(day, 1));
        event.preventDefault();
        break;
      case "PageDown":
        focusDay(utils.addMonths(day, -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleFocus = useEventCallback_default((event, day) => focusDay(day));
  const handleBlur = useEventCallback_default((event, day) => {
    if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
      onFocusedViewChange == null ? void 0 : onFocusedViewChange(false);
    }
  });
  const currentMonthNumber = utils.getMonth(currentMonth);
  const currentYearNumber = utils.getYear(currentMonth);
  const validSelectedDays = React39.useMemo(() => selectedDays.filter((day) => !!day).map((day) => utils.startOfDay(day)), [utils, selectedDays]);
  const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
  const slideNodeRef = React39.useMemo(() => React39.createRef(), [transitionKey]);
  const startOfCurrentWeek = utils.startOfWeek(now);
  const focusableDay = React39.useMemo(() => {
    const startOfMonth = utils.startOfMonth(currentMonth);
    const endOfMonth = utils.endOfMonth(currentMonth);
    if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
      return findClosestEnabledDate({
        utils,
        date: internalFocusedDay,
        minDate: startOfMonth,
        maxDate: endOfMonth,
        disablePast,
        disableFuture,
        isDateDisabled,
        timezone
      });
    }
    return internalFocusedDay;
  }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils, timezone]);
  const weeksToDisplay = React39.useMemo(() => {
    const currentMonthWithTimezone = utils.setTimezone(currentMonth, timezone);
    const toDisplay = utils.getWeekArray(currentMonthWithTimezone);
    let nextMonth = utils.addMonths(currentMonthWithTimezone, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = utils.getWeekArray(nextMonth);
      const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = utils.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, utils, timezone]);
  return (0, import_jsx_runtime26.jsxs)(PickersCalendarDayRoot, {
    role: "grid",
    "aria-labelledby": gridLabelId,
    className: classes.root,
    children: [(0, import_jsx_runtime26.jsxs)(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && (0, import_jsx_runtime26.jsx)(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": localeText.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: localeText.calendarWeekNumberHeaderText
      }), getWeekdays(utils, now).map((weekday, i) => (0, import_jsx_runtime26.jsx)(PickersCalendarWeekDayLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), "weekday"),
        className: classes.weekDayLabel,
        children: dayOfWeekFormatter(weekday)
      }, i.toString()))]
    }), loading ? (0, import_jsx_runtime26.jsx)(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : (0, import_jsx_runtime26.jsx)(PickersCalendarSlideTransition, _extends({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations,
      slideDirection,
      className: clsx_default(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: (0, import_jsx_runtime26.jsx)(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => (0, import_jsx_runtime26.jsxs)(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && (0, import_jsx_runtime26.jsx)(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": localeText.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
            children: localeText.calendarWeekNumberText(utils.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => (0, import_jsx_runtime26.jsx)(WrappedDay, {
            parentProps: props,
            day,
            selectedDays: validSelectedDays,
            focusableDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled,
            currentMonthNumber,
            isViewFocused: internalHasFocus,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}

// node_modules/@mui/x-date-pickers/MonthCalendar/MonthCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React41 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/MonthCalendar/PickersMonth.js
init_objectWithoutPropertiesLoose();
init_extends();
var React40 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-date-pickers/MonthCalendar/pickersMonthClasses.js
init_utils();
function getPickersMonthUtilityClass(slot) {
  return generateUtilityClass("MuiPickersMonth", slot);
}
var pickersMonthClasses = generateUtilityClasses("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]);

// node_modules/@mui/x-date-pickers/MonthCalendar/PickersMonth.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var _excluded30 = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"];
var useUtilityClasses19 = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    monthButton: ["monthButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersMonthUtilityClass, classes);
};
var PickersMonthRoot = styled_default("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "33.3%",
  variants: [{
    props: {
      monthsPerRow: 4
    },
    style: {
      flexBasis: "25%"
    }
  }]
});
var PickersMonthButton = styled_default("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (_, styles) => [styles.monthButton, {
    [`&.${pickersMonthClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersMonthClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersMonthClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersMonthClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
var PickersMonth = React40.memo(function PickersMonth2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersMonth"
  });
  const {
    autoFocus,
    children,
    disabled,
    selected,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const ref = React40.useRef(null);
  const classes = useUtilityClasses19(props);
  useEnhancedEffect_default(() => {
    var _a;
    if (autoFocus) {
      (_a = ref.current) == null ? void 0 : _a.focus();
    }
  }, [autoFocus]);
  return (0, import_jsx_runtime27.jsx)(PickersMonthRoot, _extends({
    className: classes.root,
    ownerState: props
  }, other, {
    children: (0, import_jsx_runtime27.jsx)(PickersMonthButton, {
      ref,
      disabled,
      type: "button",
      role: "radio",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      "aria-checked": selected,
      "aria-label": ariaLabel,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value),
      className: classes.monthButton,
      ownerState: props,
      children
    })
  }));
});

// node_modules/@mui/x-date-pickers/MonthCalendar/monthCalendarClasses.js
init_utils();
function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiMonthCalendar", slot);
}
var monthCalendarClasses = generateUtilityClasses("MuiMonthCalendar", ["root"]);

// node_modules/@mui/x-date-pickers/MonthCalendar/MonthCalendar.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded31 = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"];
var useUtilityClasses20 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var MonthCalendarRoot = styled_default("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
});
var MonthCalendar = React41.forwardRef(function MonthCalendar2(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
  const {
    className,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    shouldDisableMonth,
    readOnly,
    autoFocus = false,
    onMonthFocus,
    hasFocus,
    onFocusedViewChange,
    monthsPerRow = 3,
    timezone: timezoneProp,
    gridLabelId
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "MonthCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const theme = useTheme_default();
  const utils = useUtils();
  const referenceDate = React41.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = useUtilityClasses20(ownerState);
  const todayMonth = React41.useMemo(() => utils.getMonth(now), [utils, now]);
  const selectedMonth = React41.useMemo(() => {
    if (value != null) {
      return utils.getMonth(value);
    }
    return null;
  }, [value, utils]);
  const [focusedMonth, setFocusedMonth] = React41.useState(() => selectedMonth || utils.getMonth(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback_default((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = React41.useCallback((dateToValidate) => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = utils.startOfMonth(dateToValidate);
    if (utils.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
  const handleMonthSelection = useEventCallback_default((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setMonth(value ?? referenceDate, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback_default((month) => {
    if (!isMonthDisabled(utils.setMonth(value ?? referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  React41.useEffect(() => {
    setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback_default((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case "ArrowUp":
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleMonthFocus = useEventCallback_default((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback_default((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return (0, import_jsx_runtime28.jsx)(MonthCalendarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: getMonthsInYear(utils, value ?? referenceDate).map((month) => {
      const monthNumber = utils.getMonth(month);
      const monthText = utils.format(month, "monthShort");
      const monthLabel = utils.format(month, "month");
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return (0, import_jsx_runtime28.jsx)(PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? "date" : void 0,
        "aria-label": monthLabel,
        monthsPerRow,
        children: monthText
      }, monthText);
    })
  }));
});
true ? MonthCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types15.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types15.default.object,
  className: import_prop_types15.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types15.default.object,
  /**
   * If `true` picker is disabled
   */
  disabled: import_prop_types15.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types15.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types15.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types15.default.bool,
  gridLabelId: import_prop_types15.default.string,
  hasFocus: import_prop_types15.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types15.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types15.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types15.default.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: import_prop_types15.default.func,
  onFocusedViewChange: import_prop_types15.default.func,
  onMonthFocus: import_prop_types15.default.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: import_prop_types15.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: import_prop_types15.default.object,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types15.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types15.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types15.default.object
} : void 0;

// node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React43 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/YearCalendar/PickersYear.js
init_objectWithoutPropertiesLoose();
init_extends();
var React42 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/YearCalendar/pickersYearClasses.js
init_utils();
function getPickersYearUtilityClass(slot) {
  return generateUtilityClass("MuiPickersYear", slot);
}
var pickersYearClasses = generateUtilityClasses("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/YearCalendar/PickersYear.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var _excluded33 = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"];
var useUtilityClasses21 = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    yearButton: ["yearButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersYearUtilityClass, classes);
};
var PickersYearRoot = styled_default("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "33.3%",
  variants: [{
    props: {
      yearsPerRow: 4
    },
    style: {
      flexBasis: "25%"
    }
  }]
});
var PickersYearButton = styled_default("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (_, styles) => [styles.yearButton, {
    [`&.${pickersYearClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersYearClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersYearClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersYearClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
var PickersYear = React42.memo(function PickersYear2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersYear"
  });
  const {
    autoFocus,
    className,
    children,
    disabled,
    selected,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    "aria-current": ariaCurrent
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded33);
  const ref = React42.useRef(null);
  const classes = useUtilityClasses21(props);
  React42.useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  return (0, import_jsx_runtime29.jsx)(PickersYearRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState: props
  }, other, {
    children: (0, import_jsx_runtime29.jsx)(PickersYearButton, {
      ref,
      disabled,
      type: "button",
      role: "radio",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      "aria-checked": selected,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value),
      className: classes.yearButton,
      ownerState: props,
      children
    })
  }));
});

// node_modules/@mui/x-date-pickers/YearCalendar/yearCalendarClasses.js
init_utils();
function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiYearCalendar", slot);
}
var yearCalendarClasses = generateUtilityClasses("MuiYearCalendar", ["root"]);

// node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded34 = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"];
var useUtilityClasses22 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    yearsPerRow: themeProps.yearsPerRow ?? 3,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var YearCalendarRoot = styled_default("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
});
var YearCalendar = React43.forwardRef(function YearCalendar2(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
  const {
    autoFocus,
    className,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    readOnly,
    shouldDisableYear,
    onYearFocus,
    hasFocus,
    onFocusedViewChange,
    yearsPerRow,
    timezone: timezoneProp,
    gridLabelId
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded34);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "YearCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const theme = useTheme_default();
  const utils = useUtils();
  const referenceDate = React43.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = useUtilityClasses22(ownerState);
  const todayYear = React43.useMemo(() => utils.getYear(now), [utils, now]);
  const selectedYear = React43.useMemo(() => {
    if (value != null) {
      return utils.getYear(value);
    }
    return null;
  }, [value, utils]);
  const [focusedYear, setFocusedYear] = React43.useState(() => selectedYear || utils.getYear(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback_default((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = React43.useCallback((dateToValidate) => {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = utils.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
  const handleYearSelection = useEventCallback_default((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setYear(value ?? referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback_default((year) => {
    if (!isYearDisabled(utils.setYear(value ?? referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus == null ? void 0 : onYearFocus(year);
    }
  });
  React43.useEffect(() => {
    setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const handleKeyDown = useEventCallback_default((event, year) => {
    switch (event.key) {
      case "ArrowUp":
        focusYear(year - yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusYear(year + yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusYear(year + (theme.direction === "ltr" ? -1 : 1));
        event.preventDefault();
        break;
      case "ArrowRight":
        focusYear(year + (theme.direction === "ltr" ? 1 : -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleYearFocus = useEventCallback_default((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback_default((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = React43.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  React43.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  return (0, import_jsx_runtime30.jsx)(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: utils.getYearRange([minDate, maxDate]).map((year) => {
      const yearNumber = utils.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return (0, import_jsx_runtime30.jsx)(PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? "date" : void 0,
        yearsPerRow,
        children: utils.format(year, "year")
      }, utils.format(year, "year"));
    })
  }));
});
true ? YearCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types16.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  className: import_prop_types16.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types16.default.object,
  /**
   * If `true` picker is disabled
   */
  disabled: import_prop_types16.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types16.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types16.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types16.default.bool,
  gridLabelId: import_prop_types16.default.string,
  hasFocus: import_prop_types16.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types16.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types16.default.object,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: import_prop_types16.default.func,
  onFocusedViewChange: import_prop_types16.default.func,
  onYearFocus: import_prop_types16.default.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: import_prop_types16.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: import_prop_types16.default.object,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types16.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types16.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types16.default.object,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types16.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/PickersCalendarHeader/pickersCalendarHeaderClasses.js
init_utils();
var getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
var pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);

// node_modules/@mui/x-date-pickers/PickersCalendarHeader/PickersCalendarHeader.js
init_objectWithoutPropertiesLoose();
init_extends();
var React44 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
init_clsx();
init_utils();
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded35 = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone", "format"];
var _excluded210 = ["ownerState"];
var useUtilityClasses23 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
var PickersCalendarHeaderRoot = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
});
var PickersCalendarHeaderLabelContainer = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (_, styles) => styles.labelContainer
})(({
  theme
}) => _extends({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
var PickersCalendarHeaderLabel = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (_, styles) => styles.label
})({
  marginRight: 6
});
var PickersCalendarHeaderSwitchViewButton = styled_default(IconButton_default, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (_, styles) => styles.switchViewButton
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
});
var PickersCalendarHeaderSwitchViewIcon = styled_default(ArrowDropDownIcon, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (_, styles) => styles.switchViewIcon
})(({
  theme
}) => ({
  willChange: "transform",
  transition: theme.transitions.create("transform"),
  transform: "rotate(0deg)"
}));
var PickersCalendarHeader = React44.forwardRef(function PickersCalendarHeader2(inProps, ref) {
  const localeText = useLocaleText();
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersCalendarHeader"
  });
  const {
    slots,
    slotProps,
    currentMonth: month,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    view,
    reduceAnimations,
    views,
    labelId,
    className,
    timezone,
    format = `${utils.formats.month} ${utils.formats.year}`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const ownerState = props;
  const classes = useUtilityClasses23(props);
  const SwitchViewButton = (slots == null ? void 0 : slots.switchViewButton) ?? PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": localeText.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState,
    className: classes.switchViewButton
  });
  const SwitchViewIcon = (slots == null ? void 0 : slots.switchViewIcon) ?? PickersCalendarHeaderSwitchViewIcon;
  const _useSlotProps = useSlotProps({
    elementType: SwitchViewIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewIcon,
    ownerState: void 0,
    className: classes.switchViewIcon
  }), switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded210);
  const selectNextMonth = () => onMonthChange(utils.addMonths(month, 1), "left");
  const selectPreviousMonth = () => onMonthChange(utils.addMonths(month, -1), "right");
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find((el) => el !== view) || views[0]);
    } else {
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };
  if (views.length === 1 && views[0] === "year") {
    return null;
  }
  const label = utils.formatByString(month, format);
  return (0, import_jsx_runtime31.jsxs)(PickersCalendarHeaderRoot, _extends({}, other, {
    ownerState,
    className: clsx_default(className, classes.root),
    ref,
    children: [(0, import_jsx_runtime31.jsxs)(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [(0, import_jsx_runtime31.jsx)(PickersFadeTransitionGroup, {
        reduceAnimations,
        transKey: label,
        children: (0, import_jsx_runtime31.jsx)(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState,
          className: classes.label,
          children: label
        })
      }), views.length > 1 && !disabled && (0, import_jsx_runtime31.jsx)(SwitchViewButton, _extends({}, switchViewButtonProps, {
        children: (0, import_jsx_runtime31.jsx)(SwitchViewIcon, _extends({}, switchViewIconProps))
      }))]
    }), (0, import_jsx_runtime31.jsx)(Fade_default, {
      in: view === "day",
      children: (0, import_jsx_runtime31.jsx)(PickersArrowSwitcher, {
        slots,
        slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: localeText.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: localeText.nextMonth
      })
    })]
  }));
});
true ? PickersCalendarHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types17.default.object,
  className: import_prop_types17.default.string,
  currentMonth: import_prop_types17.default.object.isRequired,
  disabled: import_prop_types17.default.bool,
  disableFuture: import_prop_types17.default.bool,
  disablePast: import_prop_types17.default.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: import_prop_types17.default.string,
  labelId: import_prop_types17.default.string,
  maxDate: import_prop_types17.default.object.isRequired,
  minDate: import_prop_types17.default.object.isRequired,
  onMonthChange: import_prop_types17.default.func.isRequired,
  onViewChange: import_prop_types17.default.func,
  reduceAnimations: import_prop_types17.default.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types17.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types17.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
  timezone: import_prop_types17.default.string.isRequired,
  view: import_prop_types17.default.oneOf(["day", "month", "year"]).isRequired,
  views: import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["day", "month", "year"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/internals/hooks/useDefaultReduceAnimations.js
var PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
var mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
var useDefaultReduceAnimations = () => {
  const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  return prefersReduced || slowAnimationDevices;
};

// node_modules/@mui/x-date-pickers/DateCalendar/dateCalendarClasses.js
init_utils();
var getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
var dateCalendarClasses = generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);

// node_modules/@mui/x-date-pickers/DateCalendar/DateCalendar.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var _excluded36 = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"];
var useUtilityClasses24 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({}, themeProps, {
    loading: themeProps.loading ?? false,
    disablePast: themeProps.disablePast ?? false,
    disableFuture: themeProps.disableFuture ?? false,
    openTo: themeProps.openTo ?? "day",
    views: themeProps.views ?? ["year", "day"],
    reduceAnimations: themeProps.reduceAnimations ?? defaultReduceAnimations,
    renderLoading: themeProps.renderLoading ?? (() => (0, import_jsx_runtime32.jsx)("span", {
      children: "..."
    })),
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var DateCalendarRoot = styled_default(PickerViewRoot, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  height: VIEW_HEIGHT
});
var DateCalendarViewTransitionContainer = styled_default(PickersFadeTransitionGroup, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({});
var DateCalendar = React45.forwardRef(function DateCalendar2(inProps, ref) {
  const utils = useUtils();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
  const {
    autoFocus,
    onViewChange,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    onChange,
    onYearChange,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    view: inView,
    views,
    openTo,
    className,
    disabled,
    readOnly,
    minDate,
    maxDate,
    disableHighlightToday,
    focusedView: inFocusedView,
    onFocusedViewChange,
    showDaysOutsideCurrentMonth,
    fixedWeekNumber,
    dayOfWeekFormatter,
    slots,
    slotProps,
    loading,
    renderLoading,
    displayWeekNumber,
    yearsPerRow,
    monthsPerRow,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "DateCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone
  });
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = (slots == null ? void 0 : slots.calendarHeader) ?? PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps({
    elementType: CalendarHeader,
    externalSlotProps: slotProps == null ? void 0 : slotProps.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (newMonth, direction) => handleChangeMonth({
        newMonth,
        direction
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId,
      slots,
      slotProps
    },
    ownerState: props
  });
  const handleDateMonthChange = useEventCallback_default((newDate) => {
    const startOfMonth = utils.startOfMonth(newDate);
    const endOfMonth = utils.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onMonthChange == null ? void 0 : onMonthChange(startOfMonth);
    } else {
      goToNextView();
      changeMonth(startOfMonth);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleDateYearChange = useEventCallback_default((newDate) => {
    const startOfYear = utils.startOfYear(newDate);
    const endOfYear = utils.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onYearChange == null ? void 0 : onYearChange(closestEnabledDate);
    } else {
      goToNextView();
      changeMonth(startOfYear);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleSelectedDayChange = useEventCallback_default((day) => {
    if (day) {
      return handleValueChange(mergeDateAndTime(utils, day, value ?? referenceDate), "finish", view);
    }
    return handleValueChange(day, "finish", view);
  });
  React45.useEffect(() => {
    if (value != null && utils.isValid(value)) {
      changeMonth(value);
    }
  }, [value]);
  const ownerState = props;
  const classes = useUtilityClasses24(ownerState);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone,
    gridLabelId
  };
  const prevOpenViewRef = React45.useRef(view);
  React45.useEffect(() => {
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = React45.useMemo(() => [value], [value]);
  return (0, import_jsx_runtime32.jsxs)(DateCalendarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime32.jsx)(CalendarHeader, _extends({}, calendarHeaderProps)), (0, import_jsx_runtime32.jsx)(DateCalendarViewTransitionContainer, {
      reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState,
      children: (0, import_jsx_runtime32.jsxs)("div", {
        children: [view === "year" && (0, import_jsx_runtime32.jsx)(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          value,
          onChange: handleDateYearChange,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
          yearsPerRow,
          referenceDate
        })), view === "month" && (0, import_jsx_runtime32.jsx)(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          hasFocus,
          className,
          value,
          onChange: handleDateMonthChange,
          shouldDisableMonth,
          onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
          monthsPerRow,
          referenceDate
        })), view === "day" && (0, import_jsx_runtime32.jsx)(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations,
          selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
          showDaysOutsideCurrentMonth,
          fixedWeekNumber,
          dayOfWeekFormatter,
          displayWeekNumber,
          slots,
          slotProps,
          loading,
          renderLoading
        }))]
      })
    })]
  }));
});
true ? DateCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types18.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types18.default.object,
  className: import_prop_types18.default.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types18.default.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types18.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types18.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types18.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types18.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types18.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types18.default.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types18.default.number,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types18.default.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types18.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types18.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types18.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types18.default.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types18.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types18.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types18.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types18.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types18.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types18.default.oneOf(["day", "month", "year"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types18.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types18.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: import_prop_types18.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types18.default.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types18.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types18.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types18.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types18.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types18.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types18.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types18.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types18.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types18.default.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: import_prop_types18.default.arrayOf(import_prop_types18.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types18.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/DayCalendarSkeleton.js
init_extends();
init_objectWithoutPropertiesLoose();
var React46 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/dayCalendarSkeletonClasses.js
init_utils();
var getDayCalendarSkeletonUtilityClass = (slot) => generateUtilityClass("MuiDayCalendarSkeleton", slot);
var dayCalendarSkeletonClasses = generateUtilityClasses("MuiDayCalendarSkeleton", ["root", "week", "daySkeleton"]);

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/DayCalendarSkeleton.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded37 = ["className"];
var useUtilityClasses25 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    week: ["week"],
    daySkeleton: ["daySkeleton"]
  };
  return composeClasses(slots, getDayCalendarSkeletonUtilityClass, classes);
};
var DayCalendarSkeletonRoot = styled_default("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  alignSelf: "start"
});
var DayCalendarSkeletonWeek = styled_default("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Week",
  overridesResolver: (props, styles) => styles.week
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
var DayCalendarSkeletonDay = styled_default(Skeleton_default, {
  name: "MuiDayCalendarSkeleton",
  slot: "DaySkeleton",
  overridesResolver: (props, styles) => styles.daySkeleton
})({
  margin: `0 ${DAY_MARGIN}px`,
  variants: [{
    props: {
      day: 0
    },
    style: {
      visibility: "hidden"
    }
  }]
});
DayCalendarSkeletonDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: import_prop_types19.default.shape({
    day: import_prop_types19.default.number.isRequired
  }).isRequired
};
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
function DayCalendarSkeleton(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendarSkeleton"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const classes = useUtilityClasses25(other);
  return (0, import_jsx_runtime33.jsx)(DayCalendarSkeletonRoot, _extends({
    className: clsx_default(classes.root, className)
  }, other, {
    children: monthMap.map((week, index) => (0, import_jsx_runtime33.jsx)(DayCalendarSkeletonWeek, {
      className: classes.week,
      children: week.map((day, index2) => (0, import_jsx_runtime33.jsx)(DayCalendarSkeletonDay, {
        variant: "circular",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: classes.daySkeleton,
        ownerState: {
          day
        }
      }, index2))
    }, index))
  }));
}
true ? DayCalendarSkeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types19.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object, import_prop_types19.default.bool])), import_prop_types19.default.func, import_prop_types19.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React65 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
init_extends();
var React61 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/DatePicker/shared.js
init_extends();
var React49 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React48 = __toESM(require_react());
init_clsx();
var import_prop_types20 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React47 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarClasses.js
init_utils();
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
var pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "content"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var _excluded38 = ["children", "className", "toolbarTitle", "hidden", "titleId", "isLandscape", "classes", "landscapeDirection"];
var useUtilityClasses26 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", isLandscape && "penIconButtonLandscape"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
}));
var PickersToolbarContent = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      isLandscape: true,
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
});
var PickersToolbar = React47.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    toolbarTitle,
    hidden,
    titleId
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const ownerState = props;
  const classes = useUtilityClasses26(ownerState);
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime34.jsxs)(PickersToolbarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime34.jsx)(Typography_default, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), (0, import_jsx_runtime34.jsx)(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      children
    })]
  }));
});

// node_modules/@mui/x-date-pickers/DatePicker/datePickerToolbarClasses.js
init_utils();
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
var datePickerToolbarClasses = generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);

// node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var _excluded39 = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className", "onViewChange", "view"];
var useUtilityClasses27 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
var DatePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
var DatePickerToolbarTitle = styled_default(Typography_default, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (_, styles) => styles.title
})({
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      margin: "auto 16px auto auto"
    }
  }]
});
var DatePickerToolbar = React48.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    value,
    isLandscape,
    toolbarFormat,
    toolbarPlaceholder = "––",
    views,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses27(props);
  const dateText = React48.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    const formatFromViews = resolveDateFormat(utils, {
      format: toolbarFormat,
      views
    }, true);
    return utils.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return (0, import_jsx_runtime35.jsx)(DatePickerToolbarRoot, _extends({
    ref,
    toolbarTitle: localeText.datePickerToolbarTitle,
    isLandscape,
    className: clsx_default(classes.root, className)
  }, other, {
    children: (0, import_jsx_runtime35.jsx)(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
true ? DatePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types20.default.object,
  className: import_prop_types20.default.string,
  disabled: import_prop_types20.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types20.default.bool,
  isLandscape: import_prop_types20.default.bool.isRequired,
  onChange: import_prop_types20.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types20.default.func.isRequired,
  readOnly: import_prop_types20.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object]),
  titleId: import_prop_types20.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types20.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types20.default.node,
  value: import_prop_types20.default.object,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types20.default.oneOf(["day", "month", "year"]).isRequired,
  /**
   * Available views.
   */
  views: import_prop_types20.default.arrayOf(import_prop_types20.default.oneOf(["day", "month", "year"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/DatePicker/shared.js
function useDatePickerDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const localeText = React49.useMemo(() => {
    var _a;
    if (((_a = themeProps.localeText) == null ? void 0 : _a.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: _extends({
      toolbar: DatePickerToolbar
    }, themeProps.slots)
  });
}

// node_modules/@mui/x-date-pickers/internals/hooks/useDesktopPicker/useDesktopPicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React59 = __toESM(require_react());
init_useForkRef();
init_useId();

// node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js
init_extends();
init_objectWithoutPropertiesLoose();
var React50 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/pickersPopperClasses.js
init_utils();
function getPickersPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPickersPopper", slot);
}
var pickersPopperClasses = generateUtilityClasses("MuiPickersPopper", ["root", "paper"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var _excluded40 = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
var useUtilityClasses28 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPickersPopperUtilityClass, classes);
};
var PickersPopperRoot = styled_default(Popper_default, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
var PickersPopperPaper = styled_default(Paper_default, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (_, styles) => styles.paper
})({
  outline: 0,
  transformOrigin: "top center",
  variants: [{
    props: ({
      placement
    }) => ["top", "top-start", "top-end"].includes(placement),
    style: {
      transformOrigin: "bottom center"
    }
  }]
});
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function useClickAwayListener(active, onClickAway) {
  const movedRef = React50.useRef(false);
  const syntheticEventRef = React50.useRef(false);
  const nodeRef = React50.useRef(null);
  const activatedRef = React50.useRef(false);
  React50.useEffect(() => {
    if (!active) {
      return void 0;
    }
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener("mousedown", armClickAwayListener, true);
    document.addEventListener("touchstart", armClickAwayListener, true);
    return () => {
      document.removeEventListener("mousedown", armClickAwayListener, true);
      document.removeEventListener("touchstart", armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);
  const handleClickAway = useEventCallback_default((event) => {
    if (!activatedRef.current) {
      return;
    }
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!nodeRef.current || // is a TouchEvent?
    "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });
  const handleSynthetic = () => {
    syntheticEventRef.current = true;
  };
  React50.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener("touchstart", handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener("touchstart", handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  React50.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener("click", handleClickAway);
      return () => {
        doc.removeEventListener("click", handleClickAway);
        syntheticEventRef.current = false;
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
var PickersPopperPaperWrapper = React50.forwardRef((props, ref) => {
  const {
    PaperComponent,
    popperPlacement,
    ownerState: inOwnerState,
    children,
    paperSlotProps,
    paperClasses,
    onPaperClick,
    onPaperTouchStart
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const ownerState = _extends({}, inOwnerState, {
    placement: popperPlacement
  });
  const paperProps = useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return (0, import_jsx_runtime36.jsx)(PaperComponent, _extends({}, other, paperProps, {
    onClick: (event) => {
      var _a;
      onPaperClick(event);
      (_a = paperProps.onClick) == null ? void 0 : _a.call(paperProps, event);
    },
    onTouchStart: (event) => {
      var _a;
      onPaperTouchStart(event);
      (_a = paperProps.onTouchStart) == null ? void 0 : _a.call(paperProps, event);
    },
    ownerState,
    children
  }));
});
function PickersPopper(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersPopper"
  });
  const {
    anchorEl,
    children,
    containerRef = null,
    shouldRestoreFocus,
    onBlur,
    onDismiss,
    open,
    role,
    placement,
    slots,
    slotProps,
    reduceAnimations: inReduceAnimations
  } = props;
  React50.useEffect(() => {
    function handleKeyDown2(nativeEvent) {
      if (open && nativeEvent.key === "Escape") {
        onDismiss();
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [onDismiss, open]);
  const lastFocusedElementRef = React50.useRef(null);
  React50.useEffect(() => {
    if (role === "tooltip" || shouldRestoreFocus && !shouldRestoreFocus()) {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(document);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, role, shouldRestoreFocus]);
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur ?? onDismiss);
  const paperRef = React50.useRef(null);
  const handleRef = useForkRef(paperRef, containerRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const ownerState = props;
  const classes = useUtilityClasses28(ownerState);
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const reduceAnimations = inReduceAnimations ?? defaultReduceAnimations;
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss();
    }
  };
  const Transition = (slots == null ? void 0 : slots.desktopTransition) ?? reduceAnimations ? Fade_default : Grow_default;
  const FocusTrap2 = (slots == null ? void 0 : slots.desktopTrapFocus) ?? FocusTrap;
  const Paper = (slots == null ? void 0 : slots.desktopPaper) ?? PickersPopperPaper;
  const Popper = (slots == null ? void 0 : slots.popper) ?? PickersPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: slotProps == null ? void 0 : slotProps.popper,
    additionalProps: {
      transition: true,
      role,
      open,
      anchorEl,
      placement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: props
  });
  return (0, import_jsx_runtime36.jsx)(Popper, _extends({}, popperProps, {
    children: ({
      TransitionProps,
      placement: popperPlacement
    }) => (0, import_jsx_runtime36.jsx)(FocusTrap2, _extends({
      open,
      disableAutoFocus: true,
      disableRestoreFocus: true,
      disableEnforceFocus: role === "tooltip",
      isEnabled: () => true
    }, slotProps == null ? void 0 : slotProps.desktopTrapFocus, {
      children: (0, import_jsx_runtime36.jsx)(Transition, _extends({}, TransitionProps, slotProps == null ? void 0 : slotProps.desktopTransition, {
        children: (0, import_jsx_runtime36.jsx)(PickersPopperPaperWrapper, {
          PaperComponent: Paper,
          ownerState,
          popperPlacement,
          ref: handlePaperRef,
          onPaperClick,
          onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps == null ? void 0 : slotProps.desktopPaper,
          children
        })
      }))
    }))
  }));
}

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.js
init_extends();
var React52 = __toESM(require_react());
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/hooks/useOpenState.js
var React51 = __toESM(require_react());
var useOpenState = ({
  open,
  onOpen,
  onClose
}) => {
  const isControllingOpenProp = React51.useRef(typeof open === "boolean").current;
  const [openState, setIsOpenState] = React51.useState(false);
  React51.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== "boolean") {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = React51.useCallback((newIsOpen) => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }
    if (newIsOpen && onOpen) {
      onOpen();
    }
    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.js
var shouldPublishValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromField") {
    return true;
  }
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState !== "shallow") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromShortcut") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  return false;
};
var shouldCommitValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled,
    closeOnSelect
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState === "finish" && closeOnSelect) {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromShortcut") {
    return action.changeImportance === "accept" && hasChanged(dateState.lastCommittedValue);
  }
  return false;
};
var shouldClosePicker = (params) => {
  const {
    action,
    closeOnSelect
  } = params;
  if (action.name === "setValueFromAction") {
    return true;
  }
  if (action.name === "setValueFromView") {
    return action.selectionState === "finish" && closeOnSelect;
  }
  if (action.name === "setValueFromShortcut") {
    return action.changeImportance === "accept";
  }
  return false;
};
var usePickerValue = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  validator
}) => {
  const {
    onAccept,
    onChange,
    value: inValue,
    defaultValue: inDefaultValue,
    closeOnSelect = wrapperVariant === "desktop",
    timezone: timezoneProp
  } = props;
  const {
    current: defaultValue
  } = React52.useRef(inDefaultValue);
  const {
    current: isControlled
  } = React52.useRef(inValue !== void 0);
  if (true) {
    React52.useEffect(() => {
      if (isControlled !== (inValue !== void 0)) {
        console.error([`MUI X: A component is changing the ${isControlled ? "" : "un"}controlled value of a picker to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled valuefor the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [inValue]);
    React52.useEffect(() => {
      if (!isControlled && defaultValue !== inDefaultValue) {
        console.error([`MUI X: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value.`].join("\n"));
      }
    }, [JSON.stringify(defaultValue)]);
  }
  const utils = useUtils();
  const adapter = useLocalizationContext();
  const {
    isOpen,
    setIsOpen
  } = useOpenState(props);
  const [dateState, setDateState] = React52.useState(() => {
    let initialValue;
    if (inValue !== void 0) {
      initialValue = inValue;
    } else if (defaultValue !== void 0) {
      initialValue = defaultValue;
    } else {
      initialValue = valueManager.emptyValue;
    }
    return {
      draft: initialValue,
      lastPublishedValue: initialValue,
      lastCommittedValue: initialValue,
      lastControlledValue: inValue,
      hasBeenModifiedSinceMount: false
    };
  });
  const {
    timezone,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: inValue,
    defaultValue,
    onChange,
    valueManager
  });
  useValidation(_extends({}, props, {
    value: dateState.draft,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const updateDate = useEventCallback_default((action) => {
    const updaterParams = {
      action,
      dateState,
      hasChanged: (comparison) => !valueManager.areValuesEqual(utils, action.value, comparison),
      isControlled,
      closeOnSelect
    };
    const shouldPublish = shouldPublishValue(updaterParams);
    const shouldCommit = shouldCommitValue(updaterParams);
    const shouldClose = shouldClosePicker(updaterParams);
    setDateState((prev) => _extends({}, prev, {
      draft: action.value,
      lastPublishedValue: shouldPublish ? action.value : prev.lastPublishedValue,
      lastCommittedValue: shouldCommit ? action.value : prev.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    if (shouldPublish) {
      const validationError = action.name === "setValueFromField" ? action.context.validationError : validator({
        adapter,
        value: action.value,
        props: _extends({}, props, {
          value: action.value,
          timezone
        })
      });
      const context = {
        validationError
      };
      if (action.name === "setValueFromShortcut") {
        context.shortcut = action.shortcut;
      }
      handleValueChange(action.value, context);
    }
    if (shouldCommit && onAccept) {
      onAccept(action.value);
    }
    if (shouldClose) {
      setIsOpen(false);
    }
  });
  if (inValue !== void 0 && (dateState.lastControlledValue === void 0 || !valueManager.areValuesEqual(utils, dateState.lastControlledValue, inValue))) {
    const isUpdateComingFromPicker = valueManager.areValuesEqual(utils, dateState.draft, inValue);
    setDateState((prev) => _extends({}, prev, {
      lastControlledValue: inValue
    }, isUpdateComingFromPicker ? {} : {
      lastCommittedValue: inValue,
      lastPublishedValue: inValue,
      draft: inValue,
      hasBeenModifiedSinceMount: true
    }));
  }
  const handleClear = useEventCallback_default(() => {
    updateDate({
      value: valueManager.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  });
  const handleAccept = useEventCallback_default(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  });
  const handleDismiss = useEventCallback_default(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  });
  const handleCancel = useEventCallback_default(() => {
    updateDate({
      value: dateState.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  });
  const handleSetToday = useEventCallback_default(() => {
    updateDate({
      value: valueManager.getTodayValue(utils, timezone, valueType),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  });
  const handleOpen = useEventCallback_default((event) => {
    event.preventDefault();
    setIsOpen(true);
  });
  const handleClose = useEventCallback_default((event) => {
    event == null ? void 0 : event.preventDefault();
    setIsOpen(false);
  });
  const handleChange = useEventCallback_default((newValue, selectionState = "partial") => updateDate({
    name: "setValueFromView",
    value: newValue,
    selectionState
  }));
  const handleSelectShortcut = useEventCallback_default((newValue, changeImportance, shortcut) => updateDate({
    name: "setValueFromShortcut",
    value: newValue,
    changeImportance,
    shortcut
  }));
  const handleChangeFromField = useEventCallback_default((newValue, context) => updateDate({
    name: "setValueFromField",
    value: newValue,
    context
  }));
  const actions = {
    onClear: handleClear,
    onAccept: handleAccept,
    onDismiss: handleDismiss,
    onCancel: handleCancel,
    onSetToday: handleSetToday,
    onOpen: handleOpen,
    onClose: handleClose
  };
  const fieldResponse = {
    value: dateState.draft,
    onChange: handleChangeFromField
  };
  const viewValue = React52.useMemo(() => valueManager.cleanValue(utils, dateState.draft), [utils, valueManager, dateState.draft]);
  const viewResponse = {
    value: viewValue,
    onChange: handleChange,
    onClose: handleClose,
    open: isOpen
  };
  const isValid = (testedValue) => {
    const error = validator({
      adapter,
      value: testedValue,
      props: _extends({}, props, {
        value: testedValue,
        timezone
      })
    });
    return !valueManager.hasError(error);
  };
  const layoutResponse = _extends({}, actions, {
    value: viewValue,
    onChange: handleChange,
    onSelectShortcut: handleSelectShortcut,
    isValid
  });
  return {
    open: isOpen,
    fieldProps: fieldResponse,
    viewProps: viewResponse,
    layoutProps: layoutResponse,
    actions
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerViews.js
init_extends();
init_objectWithoutPropertiesLoose();
var React53 = __toESM(require_react());
init_useEnhancedEffect();
init_useEventCallback();
var _excluded41 = ["className", "sx"];
var usePickerViews = ({
  props,
  propsFromPickerValue,
  additionalViewProps,
  autoFocusView,
  rendererInterceptor: rendererInterceptor3,
  fieldRef
}) => {
  const {
    onChange,
    open,
    onClose
  } = propsFromPickerValue;
  const {
    views,
    openTo,
    onViewChange,
    disableOpenPicker,
    viewRenderers,
    timezone
  } = props;
  const propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded41);
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView
  } = useViews({
    view: void 0,
    views,
    openTo,
    onChange,
    onViewChange,
    autoFocus: autoFocusView
  });
  const {
    hasUIView,
    viewModeLookup
  } = React53.useMemo(() => views.reduce((acc, viewForReduce) => {
    let viewMode;
    if (disableOpenPicker) {
      viewMode = "field";
    } else if (viewRenderers[viewForReduce] != null) {
      viewMode = "UI";
    } else {
      viewMode = "field";
    }
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {}
  }), [disableOpenPicker, viewRenderers, views]);
  const timeViewsCount = React53.useMemo(() => views.reduce((acc, viewForReduce) => {
    if (viewRenderers[viewForReduce] != null && isTimeView(viewForReduce)) {
      return acc + 1;
    }
    return acc;
  }, 0), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const shouldRestoreFocus = useEventCallback_default(() => currentViewMode === "UI");
  const [popperView, setPopperView] = React53.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect_default(() => {
    if (currentViewMode === "field" && open) {
      onClose();
      setTimeout(() => {
        var _a;
        (_a = fieldRef == null ? void 0 : fieldRef.current) == null ? void 0 : _a.focusField(view);
      });
    }
  }, [view]);
  useEnhancedEffect_default(() => {
    if (!open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [open]);
  const layoutProps = {
    views,
    view: popperView,
    onViewChange: setView
  };
  return {
    hasUIView,
    shouldRestoreFocus,
    layoutProps,
    renderCurrentView: () => {
      if (popperView == null) {
        return null;
      }
      const renderer = viewRenderers[popperView];
      if (renderer == null) {
        return null;
      }
      const rendererProps = _extends({}, propsToForwardToView, additionalViewProps, propsFromPickerValue, {
        views,
        timezone,
        onChange: setValueAndGoToNextView,
        view: popperView,
        onViewChange: setView,
        focusedView,
        onFocusedViewChange: setFocusedView,
        showViewSwitcher: timeViewsCount > 1,
        timeViewsCount
      });
      if (rendererInterceptor3) {
        return rendererInterceptor3(viewRenderers, popperView, rendererProps);
      }
      return renderer(rendererProps);
    }
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerLayoutProps.js
init_extends();

// node_modules/@mui/x-date-pickers/internals/hooks/useIsLandscape.js
var React54 = __toESM(require_react());
init_utils();
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
var useIsLandscape = (views, customOrientation) => {
  const [orientation, setOrientation] = React54.useState(getOrientation);
  useEnhancedEffect_default(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return false;
  }
  const orientationToUse = customOrientation || orientation;
  return orientationToUse === "landscape";
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerLayoutProps.js
var usePickerLayoutProps = ({
  props,
  propsFromPickerValue,
  propsFromPickerViews,
  wrapperVariant
}) => {
  const {
    orientation
  } = props;
  const isLandscape = useIsLandscape(propsFromPickerViews.views, orientation);
  const layoutProps = _extends({}, propsFromPickerViews, propsFromPickerValue, {
    isLandscape,
    wrapperVariant,
    disabled: props.disabled,
    readOnly: props.readOnly
  });
  return {
    layoutProps
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePicker.js
var warnRenderInputIsDefined = buildWarning(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);
var usePicker = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  additionalViewProps,
  validator,
  autoFocusView,
  rendererInterceptor: rendererInterceptor3,
  fieldRef
}) => {
  if (true) {
    if (props.renderInput != null) {
      warnRenderInputIsDefined();
    }
  }
  const pickerValueResponse = usePickerValue({
    props,
    valueManager,
    valueType,
    wrapperVariant,
    validator
  });
  const pickerViewsResponse = usePickerViews({
    props,
    additionalViewProps,
    autoFocusView,
    fieldRef,
    propsFromPickerValue: pickerValueResponse.viewProps,
    rendererInterceptor: rendererInterceptor3
  });
  const pickerLayoutResponse = usePickerLayoutProps({
    props,
    wrapperVariant,
    propsFromPickerValue: pickerValueResponse.layoutProps,
    propsFromPickerViews: pickerViewsResponse.layoutProps
  });
  return {
    // Picker value
    open: pickerValueResponse.open,
    actions: pickerValueResponse.actions,
    fieldProps: pickerValueResponse.fieldProps,
    // Picker views
    renderCurrentView: pickerViewsResponse.renderCurrentView,
    hasUIView: pickerViewsResponse.hasUIView,
    shouldRestoreFocus: pickerViewsResponse.shouldRestoreFocus,
    // Picker layout
    layoutProps: pickerLayoutResponse.layoutProps
  };
};

// node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
var React58 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/PickersLayout/pickersLayoutClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
var pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);

// node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
init_extends();
var React57 = __toESM(require_react());
init_utils();

// node_modules/@mui/x-date-pickers/PickersActionBar/PickersActionBar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React55 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded42 = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function PickersActionBar(props) {
  const {
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded42);
  const localeText = useLocaleText();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions == null ? void 0 : actions.map((actionType) => {
    switch (actionType) {
      case "clear":
        return (0, import_jsx_runtime37.jsx)(Button_default, {
          onClick: onClear,
          children: localeText.clearButtonLabel
        }, actionType);
      case "cancel":
        return (0, import_jsx_runtime37.jsx)(Button_default, {
          onClick: onCancel,
          children: localeText.cancelButtonLabel
        }, actionType);
      case "accept":
        return (0, import_jsx_runtime37.jsx)(Button_default, {
          onClick: onAccept,
          children: localeText.okButtonLabel
        }, actionType);
      case "today":
        return (0, import_jsx_runtime37.jsx)(Button_default, {
          onClick: onSetToday,
          children: localeText.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return (0, import_jsx_runtime37.jsx)(DialogActions_default, _extends({}, other, {
    children: buttons
  }));
}
true ? PickersActionBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: import_prop_types21.default.arrayOf(import_prop_types21.default.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types21.default.bool,
  onAccept: import_prop_types21.default.func.isRequired,
  onCancel: import_prop_types21.default.func.isRequired,
  onClear: import_prop_types21.default.func.isRequired,
  onSetToday: import_prop_types21.default.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/PickersShortcuts/PickersShortcuts.js
init_extends();
init_objectWithoutPropertiesLoose();
var React56 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var _excluded43 = ["items", "changeImportance", "isLandscape", "onChange", "isValid"];
var _excluded211 = ["getValue"];
function PickersShortcuts(props) {
  const {
    items,
    changeImportance = "accept",
    onChange,
    isValid
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded211);
    const newValue = getValue({
      isValid
    });
    return {
      label: item.label,
      onClick: () => {
        onChange(newValue, changeImportance, item);
      },
      disabled: !isValid(newValue)
    };
  });
  return (0, import_jsx_runtime38.jsx)(List_default, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return (0, import_jsx_runtime38.jsx)(ListItem_default, {
        children: (0, import_jsx_runtime38.jsx)(Chip_default, _extends({}, item))
      }, item.label);
    })
  }));
}
true ? PickersShortcuts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: import_prop_types22.default.oneOf(["accept", "set"]),
  className: import_prop_types22.default.string,
  component: import_prop_types22.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types22.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types22.default.bool,
  isLandscape: import_prop_types22.default.bool.isRequired,
  isValid: import_prop_types22.default.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: import_prop_types22.default.arrayOf(import_prop_types22.default.shape({
    getValue: import_prop_types22.default.func.isRequired,
    label: import_prop_types22.default.string.isRequired
  })),
  onChange: import_prop_types22.default.func.isRequired,
  style: import_prop_types22.default.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types22.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
var useUtilityClasses29 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var usePickerLayout = (props) => {
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange,
    onSelectShortcut,
    isValid,
    isLandscape,
    disabled,
    readOnly,
    children,
    slots,
    slotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = props;
  const classes = useUtilityClasses29(props);
  const ActionBar = (slots == null ? void 0 : slots.actionBar) ?? PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === "desktop" ? [] : ["cancel", "accept"],
      className: classes.actionBar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const actionBar = (0, import_jsx_runtime39.jsx)(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots == null ? void 0 : slots.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.toolbar,
    additionalProps: {
      isLandscape,
      onChange,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly,
      className: classes.toolbar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? (0, import_jsx_runtime39.jsx)(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots == null ? void 0 : slots.tabs;
  const tabs = view && Tabs ? (0, import_jsx_runtime39.jsx)(Tabs, _extends({
    view,
    onViewChange,
    className: classes.tabs
  }, slotProps == null ? void 0 : slotProps.tabs)) : null;
  const Shortcuts = (slots == null ? void 0 : slots.shortcuts) ?? PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps == null ? void 0 : slotProps.shortcuts,
    additionalProps: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts
    },
    ownerState: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? (0, import_jsx_runtime39.jsx)(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
var usePickerLayout_default = usePickerLayout;

// node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var useUtilityClasses30 = (ownerState) => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var PickersLayoutRoot = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: theme.direction === "rtl" ? 3 : 1,
        gridRow: "2 / 3"
      },
      [`.${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      }
    }
  }, {
    props: {
      isLandscape: false
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: theme.direction === "rtl" ? 3 : 1,
        gridRow: "2 / 3"
      }
    }
  }]
}));
PickersLayoutRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types23.default.elementType,
  ownerState: import_prop_types23.default.shape({
    isLandscape: import_prop_types23.default.bool.isRequired
  }).isRequired,
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object])
};
var PickersLayoutContentWrapper = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
var PickersLayout = function PickersLayout2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = usePickerLayout_default(props);
  const {
    sx,
    className,
    isLandscape,
    ref,
    wrapperVariant
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses30(ownerState);
  return (0, import_jsx_runtime40.jsxs)(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx_default(className, classes.root),
    ownerState,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, (0, import_jsx_runtime40.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === "desktop" ? (0, import_jsx_runtime40.jsxs)(React58.Fragment, {
        children: [content, tabs]
      }) : (0, import_jsx_runtime40.jsxs)(React58.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
};
true ? PickersLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types23.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types23.default.object,
  className: import_prop_types23.default.string,
  disabled: import_prop_types23.default.bool,
  isLandscape: import_prop_types23.default.bool.isRequired,
  isValid: import_prop_types23.default.func.isRequired,
  onAccept: import_prop_types23.default.func.isRequired,
  onCancel: import_prop_types23.default.func.isRequired,
  onChange: import_prop_types23.default.func.isRequired,
  onClear: import_prop_types23.default.func.isRequired,
  onClose: import_prop_types23.default.func.isRequired,
  onDismiss: import_prop_types23.default.func.isRequired,
  onOpen: import_prop_types23.default.func.isRequired,
  onSelectShortcut: import_prop_types23.default.func.isRequired,
  onSetToday: import_prop_types23.default.func.isRequired,
  onViewChange: import_prop_types23.default.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types23.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types23.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types23.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types23.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object]),
  value: import_prop_types23.default.any,
  view: import_prop_types23.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: import_prop_types23.default.arrayOf(import_prop_types23.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: import_prop_types23.default.oneOf(["desktop", "mobile"])
} : void 0;

// node_modules/@mui/x-date-pickers/internals/hooks/useDesktopPicker/useDesktopPicker.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var _excluded44 = ["props", "getOpenDialogAriaText"];
var _excluded212 = ["ownerState"];
var _excluded310 = ["ownerState"];
var useDesktopPicker = (_ref) => {
  var _a;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded44);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    timezone,
    name,
    label,
    inputRef,
    readOnly,
    disabled,
    autoFocus,
    localeText,
    reduceAnimations
  } = props;
  const utils = useUtils();
  const containerRef = React59.useRef(null);
  const fieldRef = React59.useRef(null);
  const labelId = useId();
  const isToolbarHidden = ((_a = innerSlotProps == null ? void 0 : innerSlotProps.toolbar) == null ? void 0 : _a.hidden) ?? false;
  const {
    open,
    actions,
    hasUIView,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    fieldRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  }));
  const InputAdornment = slots.inputAdornment ?? InputAdornment_default;
  const _useSlotProps = useSlotProps({
    elementType: InputAdornment,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: props
  }), inputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded212);
  const OpenPickerButton = slots.openPickerButton ?? IconButton_default;
  const _useSlotProps2 = useSlotProps({
    elementType: OpenPickerButton,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.openPickerButton,
    additionalProps: {
      disabled: disabled || readOnly,
      onClick: open ? actions.onClose : actions.onOpen,
      "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils),
      edge: inputAdornmentProps.position
    },
    ownerState: props
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded310);
  const OpenPickerIcon = slots.openPickerIcon;
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, {
      readOnly,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      enableAccessibleFieldDOMStructure,
      selectedSections,
      onSelectedSectionsChange,
      timezone,
      label,
      name,
      autoFocus: autoFocus && !props.open,
      focused: open ? true : void 0
    }, inputRef ? {
      inputRef
    } : {}),
    ownerState: props
  });
  if (hasUIView) {
    fieldProps.InputProps = _extends({}, fieldProps.InputProps, {
      ref: containerRef,
      [`${inputAdornmentProps.position}Adornment`]: (0, import_jsx_runtime41.jsx)(InputAdornment, _extends({}, inputAdornmentProps, {
        children: (0, import_jsx_runtime41.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, {
          children: (0, import_jsx_runtime41.jsx)(OpenPickerIcon, _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.openPickerIcon))
        }))
      }))
    });
  }
  const slotsForField = _extends({
    textField: slots.textField,
    clearIcon: slots.clearIcon,
    clearButton: slots.clearButton
  }, fieldProps.slots);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    popper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.popper)
  });
  const handleFieldRef = useForkRef(fieldRef, fieldProps.unstableFieldRef);
  const renderPicker = () => (0, import_jsx_runtime41.jsxs)(LocalizationProvider, {
    localeText,
    children: [(0, import_jsx_runtime41.jsx)(Field, _extends({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      unstableFieldRef: handleFieldRef
    })), (0, import_jsx_runtime41.jsx)(PickersPopper, _extends({
      role: "dialog",
      placement: "bottom-start",
      anchorEl: containerRef.current
    }, actions, {
      open,
      slots,
      slotProps,
      shouldRestoreFocus,
      reduceAnimations,
      children: (0, import_jsx_runtime41.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/dateViewRenderers/dateViewRenderers.js
var React60 = __toESM(require_react());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => (0, import_jsx_runtime42.jsx)(DateCalendar, {
  view,
  onViewChange,
  views: views.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
});

// node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
var DesktopDatePicker = React61.forwardRef(function DesktopDatePicker2(inProps, ref) {
  var _a, _b;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    slots: _extends({
      openPickerIcon: CalendarIcon,
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: ((_b = props.localeText) == null ? void 0 : _b.openDatePickerDialogue) ?? localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types24.default.bool,
  className: import_prop_types24.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types24.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types24.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types24.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types24.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types24.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types24.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types24.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types24.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types24.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types24.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types24.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types24.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types24.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types24.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types24.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types24.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types24.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types24.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types24.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types24.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types24.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types24.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types24.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types24.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types24.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types24.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types24.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types24.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types24.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types24.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types24.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types24.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types24.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types24.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types24.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types24.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types24.default.oneOfType([import_prop_types24.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types24.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types24.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types24.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types24.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types24.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types24.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types24.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types24.default.oneOfType([import_prop_types24.default.arrayOf(import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object, import_prop_types24.default.bool])), import_prop_types24.default.func, import_prop_types24.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types24.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types24.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types24.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types24.default.shape({
    day: import_prop_types24.default.func,
    month: import_prop_types24.default.func,
    year: import_prop_types24.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types24.default.arrayOf(import_prop_types24.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: import_prop_types24.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/MobileDatePicker/MobileDatePicker.js
init_extends();
var React64 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/hooks/useMobilePicker/useMobilePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React63 = __toESM(require_react());
init_useForkRef();
init_useId();

// node_modules/@mui/x-date-pickers/internals/components/PickersModalDialog.js
init_extends();
var React62 = __toESM(require_react());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var PickersModalDialogRoot = styled_default(Dialog_default)({
  [`& .${dialogClasses_default.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses_default.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
var PickersModalDialogContent = styled_default(DialogContent_default)({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children,
    onDismiss,
    open,
    slots,
    slotProps
  } = props;
  const Dialog = (slots == null ? void 0 : slots.dialog) ?? PickersModalDialogRoot;
  const Transition = (slots == null ? void 0 : slots.mobileTransition) ?? Fade_default;
  return (0, import_jsx_runtime43.jsx)(Dialog, _extends({
    open,
    onClose: onDismiss
  }, slotProps == null ? void 0 : slotProps.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps == null ? void 0 : slotProps.mobileTransition,
    PaperComponent: slots == null ? void 0 : slots.mobilePaper,
    PaperProps: slotProps == null ? void 0 : slotProps.mobilePaper,
    children: (0, import_jsx_runtime43.jsx)(PickersModalDialogContent, {
      children
    })
  }));
}

// node_modules/@mui/x-date-pickers/internals/hooks/useMobilePicker/useMobilePicker.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var _excluded45 = ["props", "getOpenDialogAriaText"];
var useMobilePicker = (_ref) => {
  var _a;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded45);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    timezone,
    name,
    label,
    inputRef,
    readOnly,
    disabled,
    localeText
  } = props;
  const utils = useUtils();
  const fieldRef = React63.useRef(null);
  const labelId = useId();
  const isToolbarHidden = ((_a = innerSlotProps == null ? void 0 : innerSlotProps.toolbar) == null ? void 0 : _a.hidden) ?? false;
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    fieldRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  }));
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, !(disabled || readOnly) && {
      onClick: actions.onOpen,
      onKeyDown: onSpaceOrEnter(actions.onOpen)
    }, {
      readOnly: readOnly ?? true,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      enableAccessibleFieldDOMStructure,
      selectedSections,
      onSelectedSectionsChange,
      timezone,
      label,
      name
    }, inputRef ? {
      inputRef
    } : {}),
    ownerState: props
  });
  fieldProps.inputProps = _extends({}, fieldProps.inputProps, {
    "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils)
  });
  const slotsForField = _extends({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.mobilePaper)
  });
  const handleFieldRef = useForkRef(fieldRef, fieldProps.unstableFieldRef);
  const renderPicker = () => (0, import_jsx_runtime44.jsxs)(LocalizationProvider, {
    localeText,
    children: [(0, import_jsx_runtime44.jsx)(Field, _extends({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      unstableFieldRef: handleFieldRef
    })), (0, import_jsx_runtime44.jsx)(PickersModalDialog, _extends({}, actions, {
      open,
      slots,
      slotProps,
      children: (0, import_jsx_runtime44.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/MobileDatePicker/MobileDatePicker.js
var MobileDatePicker = React64.forwardRef(function MobileDatePicker2(inProps, ref) {
  var _a, _b;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    slots: _extends({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: ((_b = props.localeText) == null ? void 0 : _b.openDatePickerDialogue) ?? localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types25.default.bool,
  className: import_prop_types25.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types25.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types25.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types25.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types25.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types25.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types25.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types25.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types25.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types25.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types25.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types25.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types25.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types25.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types25.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types25.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types25.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types25.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types25.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types25.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types25.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types25.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types25.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types25.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types25.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types25.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types25.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types25.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types25.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types25.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types25.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types25.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types25.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types25.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types25.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types25.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types25.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types25.default.oneOfType([import_prop_types25.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types25.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types25.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types25.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types25.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types25.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types25.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types25.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types25.default.oneOfType([import_prop_types25.default.arrayOf(import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object, import_prop_types25.default.bool])), import_prop_types25.default.func, import_prop_types25.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types25.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types25.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types25.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types25.default.shape({
    day: import_prop_types25.default.func,
    month: import_prop_types25.default.func,
    year: import_prop_types25.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types25.default.arrayOf(import_prop_types25.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types25.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var _excluded46 = ["desktopModeMediaQuery"];
var DatePicker = React65.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime45.jsx)(DesktopDatePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime45.jsx)(MobileDatePicker, _extends({
    ref
  }, other));
});
true ? DatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types26.default.bool,
  className: import_prop_types26.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types26.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types26.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types26.default.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types26.default.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types26.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types26.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types26.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types26.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types26.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types26.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types26.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types26.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types26.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types26.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types26.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types26.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types26.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types26.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types26.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types26.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types26.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types26.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types26.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types26.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types26.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types26.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types26.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types26.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types26.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types26.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types26.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types26.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types26.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types26.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types26.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types26.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types26.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types26.default.oneOfType([import_prop_types26.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types26.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types26.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types26.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types26.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types26.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types26.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types26.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object, import_prop_types26.default.bool])), import_prop_types26.default.func, import_prop_types26.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types26.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types26.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types26.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types26.default.shape({
    day: import_prop_types26.default.func,
    month: import_prop_types26.default.func,
    year: import_prop_types26.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types26.default.arrayOf(import_prop_types26.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: import_prop_types26.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/StaticDatePicker/StaticDatePicker.js
init_extends();
var React67 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/internals/hooks/useStaticPicker/useStaticPicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React66 = __toESM(require_react());
init_clsx();
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var _excluded47 = ["props", "ref"];
var PickerStaticLayout = styled_default(PickersLayout)(({
  theme
}) => ({
  overflow: "hidden",
  minWidth: DIALOG_WIDTH,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));
var useStaticPicker = (_ref) => {
  let {
    props,
    ref
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded47);
  const {
    localeText,
    slots,
    slotProps,
    className,
    sx,
    displayStaticWrapperAs,
    autoFocus
  } = props;
  const {
    layoutProps,
    renderCurrentView
  } = usePicker(_extends({}, pickerParams, {
    props,
    autoFocusView: autoFocus ?? false,
    fieldRef: void 0,
    additionalViewProps: {},
    wrapperVariant: displayStaticWrapperAs
  }));
  const Layout = (slots == null ? void 0 : slots.layout) ?? PickerStaticLayout;
  const renderPicker = () => {
    var _a, _b, _c;
    return (0, import_jsx_runtime46.jsx)(LocalizationProvider, {
      localeText,
      children: (0, import_jsx_runtime46.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        sx: [...Array.isArray(sx) ? sx : [sx], ...Array.isArray((_a = slotProps == null ? void 0 : slotProps.layout) == null ? void 0 : _a.sx) ? slotProps.layout.sx : [(_b = slotProps == null ? void 0 : slotProps.layout) == null ? void 0 : _b.sx]],
        className: clsx_default(className, (_c = slotProps == null ? void 0 : slotProps.layout) == null ? void 0 : _c.className),
        ref,
        children: renderCurrentView()
      }))
    });
  };
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/StaticDatePicker/StaticDatePicker.js
var StaticDatePicker = React67.forwardRef(function StaticDatePicker2(inProps, ref) {
  var _a;
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiStaticDatePicker");
  const displayStaticWrapperAs = defaultizedProps.displayStaticWrapperAs ?? "mobile";
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    yearsPerRow: defaultizedProps.yearsPerRow ?? (displayStaticWrapperAs === "mobile" ? 3 : 4),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop"
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    validator: validateDate,
    ref
  });
  return renderPicker();
});
StaticDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types27.default.bool,
  className: import_prop_types27.default.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types27.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types27.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types27.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types27.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types27.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types27.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types27.default.oneOf(["desktop", "mobile"]),
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types27.default.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types27.default.number,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types27.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types27.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types27.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types27.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types27.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types27.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types27.default.func,
  /**
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
   */
  onClose: import_prop_types27.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types27.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types27.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types27.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types27.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types27.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types27.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types27.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types27.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types27.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types27.default.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types27.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types27.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types27.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types27.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types27.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types27.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types27.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types27.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types27.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types27.default.shape({
    day: import_prop_types27.default.func,
    month: import_prop_types27.default.func,
    year: import_prop_types27.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types27.default.arrayOf(import_prop_types27.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types27.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React75 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js
init_extends();
var React73 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/TimePicker/shared.js
init_extends();
var React71 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/TimePicker/TimePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React70 = __toESM(require_react());
init_clsx();
var import_prop_types28 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarText.js
init_extends();
init_objectWithoutPropertiesLoose();
var React68 = __toESM(require_react());
init_clsx();
init_utils();

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarTextClasses.js
init_utils();
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
var pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root", "selected"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarText.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var _excluded48 = ["className", "selected", "value"];
var useUtilityClasses31 = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
var PickersToolbarTextRoot = styled_default(Typography_default, {
  name: "MuiPickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${pickersToolbarTextClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${pickersToolbarTextClasses.selected}`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
var PickersToolbarText = React68.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded48);
  const classes = useUtilityClasses31(props);
  return (0, import_jsx_runtime47.jsx)(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx_default(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarButton.js
init_extends();
init_objectWithoutPropertiesLoose();
var React69 = __toESM(require_react());
init_clsx();
init_utils();
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var _excluded49 = ["align", "className", "selected", "typographyClassName", "value", "variant", "width"];
var useUtilityClasses32 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarButtonRoot = styled_default(Button_default, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
var PickersToolbarButton = React69.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant,
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded49);
  const classes = useUtilityClasses32(props);
  return (0, import_jsx_runtime48.jsx)(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx_default(className, classes.root)
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: (0, import_jsx_runtime48.jsx)(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});

// node_modules/@mui/x-date-pickers/TimePicker/timePickerToolbarClasses.js
init_utils();
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
var timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// node_modules/@mui/x-date-pickers/TimePicker/TimePickerToolbar.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var _excluded50 = ["ampm", "ampmInClock", "value", "isLandscape", "onChange", "view", "onViewChange", "views", "disabled", "readOnly", "className"];
var useUtilityClasses33 = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
var TimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var TimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
var TimePickerToolbarHourMinuteLabel = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme
}) => _extends({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}, {
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      marginTop: "auto"
    }
  }]
}));
TimePickerToolbarHourMinuteLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types28.default.elementType,
  ownerState: import_prop_types28.default.object.isRequired,
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object])
};
var TimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12,
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      margin: "4px 0 auto",
      flexDirection: "row",
      justifyContent: "space-around",
      flexBasis: "100%"
    }
  }]
});
TimePickerToolbarAmPmSelection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types28.default.elementType,
  ownerState: import_prop_types28.default.object.isRequired,
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object])
};
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    value,
    isLandscape,
    onChange,
    view,
    onViewChange,
    views,
    disabled,
    readOnly,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded50);
  const utils = useUtils();
  const localeText = useLocaleText();
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock && views.includes("hours"));
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, onChange);
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const ownerState = props;
  const classes = useUtilityClasses33(_extends({}, ownerState, {
    theme
  }));
  const separator = (0, import_jsx_runtime49.jsx)(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return (0, import_jsx_runtime49.jsxs)(TimePickerToolbarRoot, _extends({
    landscapeDirection: "row",
    toolbarTitle: localeText.timePickerToolbarTitle,
    isLandscape,
    ownerState,
    className: clsx_default(classes.root, className)
  }, other, {
    children: [(0, import_jsx_runtime49.jsxs)(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && (0, import_jsx_runtime49.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange("hours"),
        selected: view === "hours",
        value: value ? formatHours(value) : "--"
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && (0, import_jsx_runtime49.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange("minutes"),
        selected: view === "minutes",
        value: value ? utils.format(value, "minutes") : "--"
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && (0, import_jsx_runtime49.jsx)(PickersToolbarButton, {
        variant: "h3",
        onClick: () => onViewChange("seconds"),
        selected: view === "seconds",
        value: value ? utils.format(value, "seconds") : "--"
      })]
    }), showAmPmControl && (0, import_jsx_runtime49.jsxs)(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [(0, import_jsx_runtime49.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(utils, "am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), (0, import_jsx_runtime49.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(utils, "pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
true ? TimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ampm: import_prop_types28.default.bool,
  ampmInClock: import_prop_types28.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types28.default.object,
  className: import_prop_types28.default.string,
  disabled: import_prop_types28.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types28.default.bool,
  isLandscape: import_prop_types28.default.bool.isRequired,
  onChange: import_prop_types28.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types28.default.func.isRequired,
  readOnly: import_prop_types28.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object]),
  titleId: import_prop_types28.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types28.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types28.default.node,
  value: import_prop_types28.default.object,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types28.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired,
  /**
   * Available views.
   */
  views: import_prop_types28.default.arrayOf(import_prop_types28.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/TimePicker/shared.js
function useTimePickerDefaultizedProps(props, name) {
  var _a;
  const utils = useUtils();
  const themeProps = useThemeProps({
    props,
    name
  });
  const ampm = themeProps.ampm ?? utils.is12HourCycleInCurrentLocale();
  const localeText = React71.useMemo(() => {
    var _a2;
    if (((_a2 = themeProps.localeText) == null ? void 0 : _a2.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      timePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, {
    ampm,
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["hours", "minutes"],
    defaultOpenTo: "hours"
  }), {
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    slots: _extends({
      toolbar: TimePickerToolbar
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm,
        ampmInClock: themeProps.ampmInClock
      }, (_a = themeProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
}

// node_modules/@mui/x-date-pickers/timeViewRenderers/timeViewRenderers.js
var React72 = __toESM(require_react());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => (0, import_jsx_runtime50.jsx)(TimeClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
});
var renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime50.jsx)(DigitalClock, {
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps == null ? void 0 : timeSteps.minutes,
  skipDisabled,
  timezone
});
var renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime50.jsx)(MultiSectionDigitalClock, {
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
});

// node_modules/@mui/x-date-pickers/internals/utils/date-time-utils.js
init_extends();
init_objectWithoutPropertiesLoose();
var _excluded51 = ["views", "format"];
var resolveDateTimeFormat = (utils, _ref) => {
  let {
    views,
    format
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded51);
  if (format) {
    return format;
  }
  const dateViews2 = [];
  const timeViews2 = [];
  views.forEach((view) => {
    if (isTimeView(view)) {
      timeViews2.push(view);
    } else {
      dateViews2.push(view);
    }
  });
  if (timeViews2.length === 0) {
    return resolveDateFormat(utils, _extends({
      views: dateViews2
    }, other), false);
  }
  if (dateViews2.length === 0) {
    return resolveTimeFormat(utils, _extends({
      views: timeViews2
    }, other));
  }
  const timeFormat = resolveTimeFormat(utils, _extends({
    views: timeViews2
  }, other));
  const dateFormat = resolveDateFormat(utils, _extends({
    views: dateViews2
  }, other), false);
  return `${dateFormat} ${timeFormat}`;
};
var resolveViews = (ampm, views, shouldUseSingleColumn) => {
  if (shouldUseSingleColumn) {
    return views.filter((view) => !isInternalTimeView(view) || view === "hours");
  }
  return ampm ? [...views, "meridiem"] : views;
};
var resolveShouldRenderTimeInASingleColumn = (timeSteps, threshold) => 24 * 60 / ((timeSteps.hours ?? 1) * (timeSteps.minutes ?? 5)) <= threshold;
function resolveTimeViewsResponse({
  thresholdToRenderTimeInASingleColumn: inThreshold,
  ampm,
  timeSteps: inTimeSteps,
  views
}) {
  const thresholdToRenderTimeInASingleColumn = inThreshold ?? 24;
  const timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps);
  const shouldRenderTimeInASingleColumn = resolveShouldRenderTimeInASingleColumn(timeSteps, thresholdToRenderTimeInASingleColumn);
  return {
    thresholdToRenderTimeInASingleColumn,
    timeSteps,
    shouldRenderTimeInASingleColumn,
    views: resolveViews(ampm, views, shouldRenderTimeInASingleColumn)
  };
}

// node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js
var DesktopTimePicker = React73.forwardRef(function DesktopTimePicker2(inProps, ref) {
  var _a, _b, _c, _d;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const {
    shouldRenderTimeInASingleColumn,
    views: resolvedViews,
    timeSteps
  } = resolveTimeViewsResponse(defaultizedProps);
  const renderTimeView = shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  const actionBarActions = shouldRenderTimeInASingleColumn ? [] : ["accept"];
  const shouldHoursRendererContainMeridiemView = ((_a = viewRenderers.hours) == null ? void 0 : _a.name) === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? resolvedViews.filter((view) => view !== "meridiem") : resolvedViews;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    timeSteps,
    viewRenderers,
    format: resolveTimeFormat(utils, defaultizedProps),
    // Setting only `hours` time view in case of single column time picker
    // Allows for easy view lifecycle management
    views: shouldRenderTimeInASingleColumn ? ["hours"] : views,
    slots: _extends({
      field: TimeField,
      openPickerIcon: ClockIcon
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, (_b = defaultizedProps.slotProps) == null ? void 0 : _b.toolbar),
      actionBar: _extends({
        actions: actionBarActions
      }, (_c = defaultizedProps.slotProps) == null ? void 0 : _c.actionBar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    getOpenDialogAriaText: ((_d = props.localeText) == null ? void 0 : _d.openTimePickerDialogue) ?? localeText.openTimePickerDialogue,
    validator: validateTime
  });
  return renderPicker();
});
DesktopTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types29.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types29.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types29.default.bool,
  className: import_prop_types29.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types29.default.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types29.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types29.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types29.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types29.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types29.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types29.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types29.default.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types29.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types29.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types29.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types29.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types29.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types29.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types29.default.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types29.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types29.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types29.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types29.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types29.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types29.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types29.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types29.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types29.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types29.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types29.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types29.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types29.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types29.default.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types29.default.number]),
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types29.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types29.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types29.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types29.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types29.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types29.default.shape({
    hours: import_prop_types29.default.number,
    minutes: import_prop_types29.default.number,
    seconds: import_prop_types29.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types29.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types29.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types29.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types29.default.shape({
    hours: import_prop_types29.default.func,
    meridiem: import_prop_types29.default.func,
    minutes: import_prop_types29.default.func,
    seconds: import_prop_types29.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types29.default.arrayOf(import_prop_types29.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};

// node_modules/@mui/x-date-pickers/MobileTimePicker/MobileTimePicker.js
init_extends();
var React74 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
init_utils();
var MobileTimePicker = React74.forwardRef(function MobileTimePicker2(inProps, ref) {
  var _a, _b;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    format: resolveTimeFormat(utils, defaultizedProps),
    slots: _extends({
      field: TimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    getOpenDialogAriaText: ((_b = props.localeText) == null ? void 0 : _b.openTimePickerDialogue) ?? localeText.openTimePickerDialogue,
    validator: validateTime
  });
  return renderPicker();
});
MobileTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types30.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types30.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types30.default.bool,
  className: import_prop_types30.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types30.default.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types30.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types30.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types30.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types30.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types30.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types30.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types30.default.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types30.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types30.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types30.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types30.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types30.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types30.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types30.default.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types30.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types30.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types30.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types30.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types30.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types30.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types30.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types30.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types30.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types30.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types30.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types30.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types30.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types30.default.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types30.default.oneOfType([import_prop_types30.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types30.default.number]),
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types30.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types30.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types30.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types30.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types30.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types30.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types30.default.shape({
    hours: import_prop_types30.default.func,
    minutes: import_prop_types30.default.func,
    seconds: import_prop_types30.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types30.default.arrayOf(import_prop_types30.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};

// node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var _excluded52 = ["desktopModeMediaQuery"];
var TimePicker = React75.forwardRef(function TimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded52);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime51.jsx)(DesktopTimePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime51.jsx)(MobileTimePicker, _extends({
    ref
  }, other));
});
true ? TimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types31.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types31.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types31.default.bool,
  className: import_prop_types31.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types31.default.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types31.default.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types31.default.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types31.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types31.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types31.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types31.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types31.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types31.default.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types31.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types31.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types31.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types31.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types31.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types31.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types31.default.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types31.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types31.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types31.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types31.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types31.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types31.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types31.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types31.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types31.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types31.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types31.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types31.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types31.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types31.default.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types31.default.oneOfType([import_prop_types31.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types31.default.number]),
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types31.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types31.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types31.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types31.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types31.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types31.default.shape({
    hours: import_prop_types31.default.number,
    minutes: import_prop_types31.default.number,
    seconds: import_prop_types31.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types31.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types31.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types31.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types31.default.shape({
    hours: import_prop_types31.default.func,
    meridiem: import_prop_types31.default.func,
    minutes: import_prop_types31.default.func,
    seconds: import_prop_types31.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types31.default.arrayOf(import_prop_types31.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/StaticTimePicker/StaticTimePicker.js
init_extends();
var React76 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
var StaticTimePicker = React76.forwardRef(function StaticTimePicker2(inProps, ref) {
  var _a;
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiStaticTimePicker");
  const displayStaticWrapperAs = defaultizedProps.displayStaticWrapperAs ?? "mobile";
  const ampmInClock = defaultizedProps.ampmInClock ?? displayStaticWrapperAs === "desktop";
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    ampmInClock,
    slotProps: _extends({}, defaultizedProps.slotProps, {
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop",
        ampmInClock
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    validator: validateTime,
    ref
  });
  return renderPicker();
});
StaticTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types32.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types32.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types32.default.bool,
  className: import_prop_types32.default.string,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types32.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types32.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types32.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types32.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types32.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types32.default.oneOf(["desktop", "mobile"]),
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types32.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types32.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types32.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types32.default.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types32.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types32.default.func,
  /**
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
   */
  onClose: import_prop_types32.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types32.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types32.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types32.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types32.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types32.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types32.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types32.default.object,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types32.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types32.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types32.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types32.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types32.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types32.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types32.default.shape({
    hours: import_prop_types32.default.func,
    minutes: import_prop_types32.default.func,
    seconds: import_prop_types32.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types32.default.arrayOf(import_prop_types32.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React83 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React81 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/x-date-pickers/DateTimePicker/shared.js
init_extends();
var React79 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerTabs.js
var React77 = __toESM(require_react());
init_clsx();
var import_prop_types33 = __toESM(require_prop_types());
init_composeClasses();

// node_modules/@mui/x-date-pickers/DateTimePicker/dateTimePickerTabsClasses.js
init_utils();
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
var dateTimePickerTabsClasses = generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerTabs.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var viewToTab = (view) => {
  if (isDatePickerView(view)) {
    return "date";
  }
  return "time";
};
var tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
var useUtilityClasses34 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
var DateTimePickerTabsRoot = styled_default(Tabs_default, {
  name: "MuiDateTimePickerTabs",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
  "&:last-child": {
    boxShadow: `0 1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
    [`& .${tabsClasses_default.indicator}`]: {
      bottom: "auto",
      top: 0
    }
  }
}));
var DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateIcon = (0, import_jsx_runtime52.jsx)(DateRangeIcon, {}),
    onViewChange,
    timeIcon = (0, import_jsx_runtime52.jsx)(TimeIcon, {}),
    view,
    hidden = typeof window === "undefined" || window.innerHeight < 667,
    className,
    sx
  } = props;
  const localeText = useLocaleText();
  const classes = useUtilityClasses34(props);
  const handleChange = (event, value) => {
    onViewChange(tabToView(value));
  };
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime52.jsxs)(DateTimePickerTabsRoot, {
    ownerState: props,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: clsx_default(className, classes.root),
    sx,
    children: [(0, import_jsx_runtime52.jsx)(Tab_default, {
      value: "date",
      "aria-label": localeText.dateTableLabel,
      icon: (0, import_jsx_runtime52.jsx)(React77.Fragment, {
        children: dateIcon
      })
    }), (0, import_jsx_runtime52.jsx)(Tab_default, {
      value: "time",
      "aria-label": localeText.timeTableLabel,
      icon: (0, import_jsx_runtime52.jsx)(React77.Fragment, {
        children: timeIcon
      })
    })]
  });
};
true ? DateTimePickerTabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types33.default.object,
  className: import_prop_types33.default.string,
  /**
   * Date tab icon.
   * @default DateRange
   */
  dateIcon: import_prop_types33.default.node,
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimePicker` and `MobileDateTimePicker`, `displayStaticWrapperAs === 'desktop'` for `StaticDateTimePicker`
   */
  hidden: import_prop_types33.default.bool,
  /**
   * Callback called when a tab is clicked.
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types33.default.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object]),
  /**
   * Time tab icon.
   * @default Time
   */
  timeIcon: import_prop_types33.default.node,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types33.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React78 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
init_composeClasses();
init_clsx();

// node_modules/@mui/x-date-pickers/DateTimePicker/dateTimePickerToolbarClasses.js
init_utils();
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
var dateTimePickerToolbarClasses = generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "timeDigitsContainer", "separator", "timeLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarButtonClasses.js
init_utils();
var pickersToolbarButtonClasses = generateUtilityClasses("MuiPickersToolbarButton", ["root"]);

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var _excluded53 = ["ampm", "ampmInClock", "value", "onChange", "view", "isLandscape", "onViewChange", "toolbarFormat", "toolbarPlaceholder", "views", "disabled", "readOnly", "toolbarVariant", "toolbarTitle", "className"];
var useUtilityClasses35 = (ownerState) => {
  const {
    classes,
    theme,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer", theme.direction === "rtl" && "timeLabelReverse"],
    timeDigitsContainer: ["timeDigitsContainer", theme.direction === "rtl" && "timeLabelReverse"],
    separator: ["separator"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
var DateTimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-around",
  position: "relative",
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      [`& .${pickersToolbarClasses.content} .${pickersToolbarTextClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      isLandscape: true
    },
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      isLandscape: false
    },
    style: {
      paddingLeft: 24,
      paddingRight: 0
    }
  }]
}));
DateTimePickerToolbarRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types34.default.elementType,
  classes: import_prop_types34.default.object,
  className: import_prop_types34.default.string,
  isLandscape: import_prop_types34.default.bool.isRequired,
  isMobileKeyboardViewOpen: import_prop_types34.default.bool,
  landscapeDirection: import_prop_types34.default.oneOf(["column", "row"]),
  ownerState: import_prop_types34.default.object.isRequired,
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  toggleMobileKeyboardView: import_prop_types34.default.func,
  toolbarTitle: import_prop_types34.default.node,
  viewType: import_prop_types34.default.oneOf(["date", "time"])
};
var DateTimePickerToolbarDateContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer",
  overridesResolver: (props, styles) => styles.dateContainer
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
var DateTimePickerToolbarTimeContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  overridesResolver: (props, styles) => styles.timeContainer
})(({
  theme
}) => {
  return _extends({
    display: "flex",
    flexDirection: "row"
  }, theme.direction === "rtl" && {
    flexDirection: "row-reverse"
  }, {
    variants: [{
      props: ({
        isLandscape,
        toolbarVariant
      }) => isLandscape && toolbarVariant !== "desktop",
      style: _extends({
        flexDirection: "column"
      }, theme.direction === "rtl" && {
        flexDirection: "column-reverse"
      })
    }, {
      props: {
        toolbarVariant: "desktop",
        isLandscape: false
      },
      style: {
        gap: 9,
        marginRight: 4,
        alignSelf: "flex-end"
      }
    }]
  });
});
var DateTimePickerToolbarTimeDigitsContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeDigitsContainer",
  overridesResolver: (props, styles) => styles.timeDigitsContainer
})(({
  theme
}) => _extends({
  display: "flex"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}, {
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      gap: 1.5
    }
  }]
}));
DateTimePickerToolbarTimeContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types34.default.elementType,
  ownerState: import_prop_types34.default.object.isRequired,
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object])
};
var DateTimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  margin: "0 4px 0 2px",
  cursor: "default",
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      margin: 0
    }
  }]
});
var DateTimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${dateTimePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${dateTimePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12,
  [`& .${dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      margin: "4px 0 auto",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%"
    }
  }]
});
function DateTimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    value,
    onChange,
    view,
    isLandscape,
    onViewChange,
    toolbarFormat,
    toolbarPlaceholder = "––",
    views,
    disabled,
    readOnly,
    toolbarVariant = "mobile",
    toolbarTitle: inToolbarTitle,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded53);
  const ownerState = props;
  const utils = useUtils();
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, onChange);
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const isDesktop = toolbarVariant === "desktop";
  const localeText = useLocaleText();
  const theme = useTheme();
  const classes = useUtilityClasses35(_extends({}, ownerState, {
    theme
  }));
  const toolbarTitle = inToolbarTitle ?? localeText.dateTimePickerToolbarTitle;
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const dateText = React78.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(value, toolbarFormat);
    }
    return utils.format(value, "shortDate");
  }, [value, toolbarFormat, toolbarPlaceholder, utils]);
  return (0, import_jsx_runtime53.jsxs)(DateTimePickerToolbarRoot, _extends({
    isLandscape,
    className: clsx_default(classes.root, className),
    toolbarTitle
  }, other, {
    ownerState,
    children: [(0, import_jsx_runtime53.jsxs)(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views.includes("year") && (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => onViewChange("year"),
        selected: view === "year",
        value: value ? utils.format(value, "year") : "–"
      }), views.includes("day") && (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? "h5" : "h4",
        onClick: () => onViewChange("day"),
        selected: view === "day",
        value: dateText
      })]
    }), (0, import_jsx_runtime53.jsxs)(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      children: [(0, import_jsx_runtime53.jsxs)(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState,
        children: [views.includes("hours") && (0, import_jsx_runtime53.jsxs)(React78.Fragment, {
          children: [(0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && !isLandscape ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => onViewChange("hours"),
            selected: view === "hours",
            value: value ? formatHours(value) : "--"
          }), (0, import_jsx_runtime53.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState
          }), (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && !isLandscape ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => onViewChange("minutes"),
            selected: view === "minutes" || !views.includes("minutes") && view === "hours",
            value: value ? utils.format(value, "minutes") : "--",
            disabled: !views.includes("minutes")
          })]
        }), views.includes("seconds") && (0, import_jsx_runtime53.jsxs)(React78.Fragment, {
          children: [(0, import_jsx_runtime53.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState
          }), (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && !isLandscape ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => onViewChange("seconds"),
            selected: view === "seconds",
            value: value ? utils.format(value, "seconds") : "--"
          })]
        })]
      }), showAmPmControl && !isDesktop && (0, import_jsx_runtime53.jsxs)(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState,
        children: [(0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "am",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(utils, "am"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
          disabled
        }), (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "pm",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(utils, "pm"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
          disabled
        })]
      }), ampm && isDesktop && (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        variant: "h5",
        onClick: () => onViewChange("meridiem"),
        selected: view === "meridiem",
        value: value && meridiemMode ? formatMeridiem(utils, meridiemMode) : "--",
        width: MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
true ? DateTimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ampm: import_prop_types34.default.bool,
  ampmInClock: import_prop_types34.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  className: import_prop_types34.default.string,
  disabled: import_prop_types34.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types34.default.bool,
  isLandscape: import_prop_types34.default.bool.isRequired,
  onChange: import_prop_types34.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types34.default.func.isRequired,
  readOnly: import_prop_types34.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  titleId: import_prop_types34.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types34.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types34.default.node,
  /**
   * If provided, it will be used instead of `dateTimePickerToolbarTitle` from localization.
   */
  toolbarTitle: import_prop_types34.default.node,
  toolbarVariant: import_prop_types34.default.oneOf(["desktop", "mobile"]),
  value: import_prop_types34.default.object,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types34.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Available views.
   */
  views: import_prop_types34.default.arrayOf(import_prop_types34.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/DateTimePicker/shared.js
function useDateTimePickerDefaultizedProps(props, name) {
  var _a;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const ampm = themeProps.ampm ?? utils.is12HourCycleInCurrentLocale();
  const localeText = React79.useMemo(() => {
    var _a2;
    if (((_a2 = themeProps.localeText) == null ? void 0 : _a2.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      dateTimePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day", "hours", "minutes"],
    defaultOpenTo: "day"
  }), {
    ampm,
    localeText,
    orientation: themeProps.orientation ?? "portrait",
    // TODO: Remove from public API
    disableIgnoringDatePartForTimeValidation: themeProps.disableIgnoringDatePartForTimeValidation ?? Boolean(themeProps.minDateTime || themeProps.maxDateTime || // allow time clock to correctly check time validity: https://github.com/mui/mui-x/issues/8520
    themeProps.disablePast || themeProps.disableFuture),
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    minDate: applyDefaultDate(utils, themeProps.minDateTime ?? themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDateTime ?? themeProps.maxDate, defaultDates.maxDate),
    minTime: themeProps.minDateTime ?? themeProps.minTime,
    maxTime: themeProps.maxDateTime ?? themeProps.maxTime,
    slots: _extends({
      toolbar: DateTimePickerToolbar,
      tabs: DateTimePickerTabs
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm
      }, (_a = themeProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
}

// node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePickerLayout.js
var React80 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
init_clsx();
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
function DesktopDateTimePickerLayout(props) {
  var _a;
  const {
    toolbar,
    tabs,
    content,
    actionBar,
    shortcuts
  } = usePickerLayout_default(props);
  const {
    sx,
    className,
    isLandscape,
    ref
  } = props;
  const isActionBarVisible = actionBar && (((_a = actionBar.props.actions) == null ? void 0 : _a.length) ?? 0) > 0;
  return (0, import_jsx_runtime54.jsxs)(PickersLayoutRoot, {
    ref,
    className: clsx_default(className, pickersLayoutClasses.root),
    sx: [{
      [`& .${pickersLayoutClasses.tabs}`]: {
        gridRow: 4,
        gridColumn: "1 / 4"
      },
      [`& .${pickersLayoutClasses.actionBar}`]: {
        gridRow: 5
      }
    }, ...Array.isArray(sx) ? sx : [sx]],
    ownerState: props,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, (0, import_jsx_runtime54.jsxs)(PickersLayoutContentWrapper, {
      className: pickersLayoutClasses.contentWrapper,
      sx: {
        display: "grid"
      },
      children: [content, tabs, isActionBarVisible && (0, import_jsx_runtime54.jsx)(Divider_default, {
        sx: {
          gridRow: 3,
          gridColumn: "1 / 4"
        }
      })]
    }), actionBar]
  });
}
true ? DesktopDateTimePickerLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types35.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object,
  className: import_prop_types35.default.string,
  disabled: import_prop_types35.default.bool,
  isLandscape: import_prop_types35.default.bool.isRequired,
  isValid: import_prop_types35.default.func.isRequired,
  onAccept: import_prop_types35.default.func.isRequired,
  onCancel: import_prop_types35.default.func.isRequired,
  onChange: import_prop_types35.default.func.isRequired,
  onClear: import_prop_types35.default.func.isRequired,
  onClose: import_prop_types35.default.func.isRequired,
  onDismiss: import_prop_types35.default.func.isRequired,
  onOpen: import_prop_types35.default.func.isRequired,
  onSelectShortcut: import_prop_types35.default.func.isRequired,
  onSetToday: import_prop_types35.default.func.isRequired,
  onViewChange: import_prop_types35.default.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types35.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types35.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types35.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types35.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types35.default.oneOfType([import_prop_types35.default.arrayOf(import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object, import_prop_types35.default.bool])), import_prop_types35.default.func, import_prop_types35.default.object]),
  value: import_prop_types35.default.any,
  view: import_prop_types35.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: import_prop_types35.default.arrayOf(import_prop_types35.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: import_prop_types35.default.oneOf(["desktop", "mobile"])
} : void 0;

// node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePicker.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var _excluded54 = ["openTo", "focusedView", "timeViewsCount"];
var rendererInterceptor = function rendererInterceptor2(inViewRenderers, popperView, rendererProps) {
  var _a, _b;
  const {
    openTo,
    focusedView,
    timeViewsCount
  } = rendererProps, otherProps = _objectWithoutPropertiesLoose(rendererProps, _excluded54);
  const finalProps = _extends({}, otherProps, {
    focusedView: null,
    sx: [{
      [`&.${multiSectionDigitalClockClasses.root}`]: {
        borderBottom: 0
      },
      [`&.${multiSectionDigitalClockClasses.root}, .${multiSectionDigitalClockSectionClasses.root}, &.${digitalClockClasses.root}`]: {
        maxHeight: VIEW_HEIGHT
      }
    }]
  });
  const isTimeViewActive = isInternalTimeView(popperView);
  return (0, import_jsx_runtime55.jsxs)(React81.Fragment, {
    children: [(_a = inViewRenderers[!isTimeViewActive ? popperView : "day"]) == null ? void 0 : _a.call(inViewRenderers, _extends({}, rendererProps, {
      view: !isTimeViewActive ? popperView : "day",
      focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
      views: rendererProps.views.filter(isDatePickerView),
      sx: [{
        gridColumn: 1
      }, ...finalProps.sx]
    })), timeViewsCount > 0 && (0, import_jsx_runtime55.jsxs)(React81.Fragment, {
      children: [(0, import_jsx_runtime55.jsx)(Divider_default, {
        orientation: "vertical",
        sx: {
          gridColumn: 2
        }
      }), (_b = inViewRenderers[isTimeViewActive ? popperView : "hours"]) == null ? void 0 : _b.call(inViewRenderers, _extends({}, finalProps, {
        view: isTimeViewActive ? popperView : "hours",
        focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
        openTo: isInternalTimeView(openTo) ? openTo : "hours",
        views: rendererProps.views.filter(isInternalTimeView),
        sx: [{
          gridColumn: 3
        }, ...finalProps.sx]
      }))]
    })]
  });
};
var DesktopDateTimePicker = React81.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  var _a, _b, _c, _d;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const {
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views: resolvedViews,
    timeSteps
  } = resolveTimeViewsResponse(defaultizedProps);
  const renderTimeView = shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  const shouldHoursRendererContainMeridiemView = ((_a = viewRenderers.hours) == null ? void 0 : _a.name) === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? resolvedViews.filter((view) => view !== "meridiem") : resolvedViews;
  const actionBarActions = shouldRenderTimeInASingleColumn ? [] : ["accept"];
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(utils, defaultizedProps),
    views,
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    ampmInClock,
    timeSteps,
    thresholdToRenderTimeInASingleColumn,
    shouldRenderTimeInASingleColumn,
    slots: _extends({
      field: DateTimeField,
      layout: DesktopDateTimePickerLayout,
      openPickerIcon: CalendarIcon
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true,
        ampmInClock,
        toolbarVariant: "desktop"
      }, (_b = defaultizedProps.slotProps) == null ? void 0 : _b.toolbar),
      tabs: _extends({
        hidden: true
      }, (_c = defaultizedProps.slotProps) == null ? void 0 : _c.tabs),
      actionBar: (ownerState) => {
        var _a2;
        return _extends({
          actions: actionBarActions
        }, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.actionBar, ownerState));
      }
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    getOpenDialogAriaText: ((_d = props.localeText) == null ? void 0 : _d.openDatePickerDialogue) ?? localeText.openDatePickerDialogue,
    validator: validateDateTime,
    rendererInterceptor
  });
  return renderPicker();
});
DesktopDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types36.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types36.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types36.default.bool,
  className: import_prop_types36.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types36.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types36.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types36.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types36.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types36.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types36.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types36.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types36.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types36.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types36.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types36.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types36.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types36.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types36.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types36.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types36.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types36.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types36.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types36.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types36.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types36.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types36.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types36.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types36.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types36.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types36.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types36.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types36.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types36.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types36.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types36.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types36.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types36.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types36.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types36.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types36.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types36.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types36.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types36.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types36.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types36.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types36.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types36.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types36.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types36.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types36.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types36.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types36.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types36.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types36.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types36.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types36.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types36.default.shape({
    hours: import_prop_types36.default.number,
    minutes: import_prop_types36.default.number,
    seconds: import_prop_types36.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types36.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types36.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types36.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types36.default.shape({
    day: import_prop_types36.default.func,
    hours: import_prop_types36.default.func,
    meridiem: import_prop_types36.default.func,
    minutes: import_prop_types36.default.func,
    month: import_prop_types36.default.func,
    seconds: import_prop_types36.default.func,
    year: import_prop_types36.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types36.default.arrayOf(import_prop_types36.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: import_prop_types36.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/MobileDateTimePicker/MobileDateTimePicker.js
init_extends();
var React82 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());
init_utils();
var MobileDateTimePicker = React82.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  var _a, _b, _c;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(utils, defaultizedProps),
    ampmInClock,
    slots: _extends({
      field: DateTimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar),
      tabs: _extends({
        hidden: false
      }, (_b = defaultizedProps.slotProps) == null ? void 0 : _b.tabs)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    getOpenDialogAriaText: ((_c = props.localeText) == null ? void 0 : _c.openDatePickerDialogue) ?? localeText.openDatePickerDialogue,
    validator: validateDateTime
  });
  return renderPicker();
});
MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types37.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types37.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types37.default.bool,
  className: import_prop_types37.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types37.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types37.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types37.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types37.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types37.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types37.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types37.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types37.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types37.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types37.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types37.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types37.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types37.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types37.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types37.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types37.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types37.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types37.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types37.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types37.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types37.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types37.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types37.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types37.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types37.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types37.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types37.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types37.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types37.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types37.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types37.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types37.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types37.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types37.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types37.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types37.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types37.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types37.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types37.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types37.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types37.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types37.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types37.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types37.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types37.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types37.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types37.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types37.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types37.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types37.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types37.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types37.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types37.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types37.default.shape({
    day: import_prop_types37.default.func,
    hours: import_prop_types37.default.func,
    minutes: import_prop_types37.default.func,
    month: import_prop_types37.default.func,
    seconds: import_prop_types37.default.func,
    year: import_prop_types37.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types37.default.arrayOf(import_prop_types37.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types37.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePicker.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var _excluded55 = ["desktopModeMediaQuery"];
var DateTimePicker = React83.forwardRef(function DateTimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded55);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime56.jsx)(DesktopDateTimePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime56.jsx)(MobileDateTimePicker, _extends({
    ref
  }, other));
});
true ? DateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types38.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types38.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types38.default.bool,
  className: import_prop_types38.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types38.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types38.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types38.default.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types38.default.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types38.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types38.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types38.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types38.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types38.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types38.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types38.default.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: import_prop_types38.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types38.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types38.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types38.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types38.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types38.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types38.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types38.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types38.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types38.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types38.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types38.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types38.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types38.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types38.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types38.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types38.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types38.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types38.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types38.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types38.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types38.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types38.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types38.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types38.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types38.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types38.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types38.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types38.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types38.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types38.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types38.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types38.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types38.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types38.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types38.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types38.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types38.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types38.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types38.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types38.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object, import_prop_types38.default.bool])), import_prop_types38.default.func, import_prop_types38.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types38.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types38.default.shape({
    hours: import_prop_types38.default.number,
    minutes: import_prop_types38.default.number,
    seconds: import_prop_types38.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types38.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types38.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types38.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types38.default.shape({
    day: import_prop_types38.default.func,
    hours: import_prop_types38.default.func,
    meridiem: import_prop_types38.default.func,
    minutes: import_prop_types38.default.func,
    month: import_prop_types38.default.func,
    seconds: import_prop_types38.default.func,
    year: import_prop_types38.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types38.default.arrayOf(import_prop_types38.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: import_prop_types38.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/StaticDateTimePicker/StaticDateTimePicker.js
init_extends();
var React84 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());
var StaticDateTimePicker = React84.forwardRef(function StaticDateTimePicker2(inProps, ref) {
  var _a, _b;
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiStaticDateTimePicker");
  const displayStaticWrapperAs = defaultizedProps.displayStaticWrapperAs ?? "mobile";
  const ampmInClock = defaultizedProps.ampmInClock ?? displayStaticWrapperAs === "desktop";
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    ampmInClock,
    yearsPerRow: defaultizedProps.yearsPerRow ?? (displayStaticWrapperAs === "mobile" ? 3 : 4),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      tabs: _extends({
        hidden: displayStaticWrapperAs === "desktop"
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.tabs),
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop",
        ampmInClock
      }, (_b = defaultizedProps.slotProps) == null ? void 0 : _b.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    validator: validateDateTime,
    ref
  });
  return renderPicker();
});
StaticDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types39.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types39.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types39.default.bool,
  className: import_prop_types39.default.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types39.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types39.default.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types39.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types39.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types39.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types39.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types39.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types39.default.oneOf(["desktop", "mobile"]),
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types39.default.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types39.default.number,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types39.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types39.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types39.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types39.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types39.default.object,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types39.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types39.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types39.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types39.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types39.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types39.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types39.default.func,
  /**
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
   */
  onClose: import_prop_types39.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types39.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types39.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types39.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types39.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types39.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types39.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types39.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types39.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types39.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types39.default.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types39.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types39.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types39.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types39.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types39.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types39.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types39.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types39.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types39.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types39.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types39.default.shape({
    day: import_prop_types39.default.func,
    hours: import_prop_types39.default.func,
    minutes: import_prop_types39.default.func,
    month: import_prop_types39.default.func,
    seconds: import_prop_types39.default.func,
    year: import_prop_types39.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types39.default.arrayOf(import_prop_types39.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types39.default.oneOf([3, 4])
};
export {
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClearIcon,
  ClockIcon,
  DEFAULT_DESKTOP_MODE_MEDIA_QUERY,
  DateCalendar,
  DateField,
  DatePicker,
  DatePickerToolbar,
  DateRangeIcon,
  DateTimeField,
  DateTimePicker,
  DateTimePickerTabs,
  DateTimePickerToolbar,
  DayCalendarSkeleton,
  DesktopDatePicker,
  DesktopDateTimePicker,
  DesktopDateTimePickerLayout,
  DesktopTimePicker,
  DigitalClock,
  LocalizationProvider,
  MobileDatePicker,
  MobileDateTimePicker,
  MobileTimePicker,
  MonthCalendar,
  MuiPickersAdapterContext,
  MultiSectionDigitalClock,
  PickersActionBar,
  PickersCalendarHeader,
  PickersDay2 as PickersDay,
  PickersFilledInput,
  PickersInput,
  PickersInputBase,
  PickersLayout,
  PickersLayoutContentWrapper,
  PickersLayoutRoot,
  PickersOutlinedInput,
  PickersShortcuts,
  PickersTextField,
  StaticDatePicker,
  StaticDateTimePicker,
  StaticTimePicker,
  TimeClock,
  TimeField,
  TimeIcon,
  TimePicker,
  TimePickerToolbar,
  PickersSectionList as Unstable_PickersSectionList,
  PickersSectionListRoot as Unstable_PickersSectionListRoot,
  PickersSectionListSection as Unstable_PickersSectionListSection,
  PickersSectionListSectionContent as Unstable_PickersSectionListSectionContent,
  PickersSectionListSectionSeparator as Unstable_PickersSectionListSectionSeparator,
  YearCalendar,
  clockClasses,
  clockNumberClasses,
  clockPointerClasses,
  dateCalendarClasses,
  datePickerToolbarClasses,
  dateTimePickerTabsClasses,
  dateTimePickerToolbarClasses,
  dayCalendarClasses,
  dayCalendarSkeletonClasses,
  digitalClockClasses,
  getDateCalendarUtilityClass,
  getDayCalendarSkeletonUtilityClass,
  getDigitalClockUtilityClass,
  getMonthCalendarUtilityClass,
  getMultiSectionDigitalClockUtilityClass,
  getPickersDayUtilityClass,
  getPickersFilledInputUtilityClass,
  getPickersInputBaseUtilityClass,
  getPickersInputUtilityClass,
  getPickersOutlinedInputUtilityClass,
  getPickersSectionListUtilityClass,
  getPickersTextFieldUtilityClass,
  getTimeClockUtilityClass,
  getYearCalendarUtilityClass,
  monthCalendarClasses,
  multiSectionDigitalClockClasses,
  multiSectionDigitalClockSectionClasses,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
  pickersFadeTransitionGroupClasses,
  pickersFilledInputClasses,
  pickersInputBaseClasses,
  pickersInputClasses,
  pickersLayoutClasses,
  pickersMonthClasses,
  pickersOutlinedInputClasses,
  pickersSectionListClasses,
  pickersSlideTransitionClasses,
  pickersTextFieldClasses,
  pickersYearClasses,
  renderDateViewCalendar,
  renderDigitalClockTimeView,
  renderMultiSectionDigitalClockTimeView,
  renderTimeViewClock,
  timeClockClasses,
  timePickerToolbarClasses,
  useDateField as unstable_useDateField,
  useDateTimeField as unstable_useDateTimeField,
  useTimeField as unstable_useTimeField,
  useClearableField,
  usePickerLayout_default as usePickerLayout,
  yearCalendarClasses
};
/*! Bundled license information:

@mui/x-date-pickers/index.js:
  (**
   * @mui/x-date-pickers v7.3.1
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_x-date-pickers.js.map
