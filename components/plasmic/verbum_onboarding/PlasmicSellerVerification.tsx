// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gPere25tZXJ8DN5wLAbNNx
// Component: OHnMOx3wwuaY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Wallet from "../../ThirdWebWallet";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: gPere25tZXJ8DN5wLAbNNx/projectcss
import sty from "./PlasmicSellerVerification.module.css"; // plasmic-import: OHnMOx3wwuaY/css

import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: WNrOKOGZa0w2/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: Db8zntDAjUz9/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: prO-1FyQXNLO/icon

createPlasmicElementProxy;

export type PlasmicSellerVerification__VariantMembers = {};
export type PlasmicSellerVerification__VariantsArgs = {};
type VariantPropType = keyof PlasmicSellerVerification__VariantsArgs;
export const PlasmicSellerVerification__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSellerVerification__ArgsType = {};
type ArgPropType = keyof PlasmicSellerVerification__ArgsType;
export const PlasmicSellerVerification__ArgProps = new Array<ArgPropType>();

export type PlasmicSellerVerification__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
  form?: Flex__<typeof FormWrapper>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultSellerVerificationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSellerVerification__RenderFunc(props: {
  variants: PlasmicSellerVerification__VariantsArgs;
  args: PlasmicSellerVerification__ArgsType;
  overrides: PlasmicSellerVerification__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {PlasmicSellerVerification.pageMetadata.title}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicSellerVerification.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicSellerVerification.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___3NWoe)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__ts3Mz)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__o9G1O)}
                displayHeight={"auto"}
                displayMaxHeight={"150px"}
                displayMaxWidth={"auto"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/verbum_onboarding/images/screenshot20231204At123248AmRemovebgpng.png",
                  fullWidth: 2712,
                  fullHeight: 1792,
                  aspectRatio: undefined
                }}
                onClick={ async event => {
                  const $steps = {};

                  $steps["goToHome"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: `/onboarding`
                        };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToHome"] != null &&
                    typeof $steps["goToHome"] === "object" &&
                    typeof $steps["goToHome"].then === "function"
                  ) {
                    $steps["goToHome"] = await $steps[
                      "goToHome"
                    ];
                  }
                }}
              />
            </div>
            <box style={{ paddingBottom: '20px', paddingRight: '24px' }}>
              <div> <Wallet /> 
              </div>
            </box>
            <Icon7Icon
              className={classNames(projectcss.all, sty.svg__wvJwh)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpstwittercomVerbumLabs"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://twitter.com/VerbumLabs"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpstwittercomVerbumLabs"] != null &&
                  typeof $steps["goToHttpstwittercomVerbumLabs"] === "object" &&
                  typeof $steps["goToHttpstwittercomVerbumLabs"].then ===
                    "function"
                ) {
                  $steps["goToHttpstwittercomVerbumLabs"] = await $steps[
                    "goToHttpstwittercomVerbumLabs"
                  ];
                }
              }}
              role={"img"}
            />

            <Icon8Icon
              className={classNames(projectcss.all, sty.svg__kxHpt)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpsdiscordggcvzUAkzcS7"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://discord.gg/cvzUAkzcS7"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpsdiscordggcvzUAkzcS7"] != null &&
                  typeof $steps["goToHttpsdiscordggcvzUAkzcS7"] === "object" &&
                  typeof $steps["goToHttpsdiscordggcvzUAkzcS7"].then ===
                    "function"
                ) {
                  $steps["goToHttpsdiscordggcvzUAkzcS7"] = await $steps[
                    "goToHttpsdiscordggcvzUAkzcS7"
                  ];
                }
              }}
              role={"img"}
            />
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox___1Zp2K)}>
            <div className={classNames(projectcss.all, sty.freeBox__ix7Pw)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Let's get verified"}
              </h1>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mo8Xn
                )}
              >
                {
                  "Share a link that highlights your past sales. While just one link is required, you're welcome to provide up to three. These can be from websites, seller profiles on different platforms, or your social media profiles."
                }
              </div>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.form),
                  extendedOnValuesChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["form", "value"],
                      FormWrapper_Helpers
                    ),
                  formItems: undefined,
                  labelCol: { span: 8, horizontalOnly: true },
                  layout: "vertical",
                  mode: undefined,
                  onFinish: async values => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: ["success", "Message Sent"]
                          };
                          return $globalActions[
                            "plasmic-antd5-config-provider.showNotification"
                          ]?.apply(null, [...actionArgs.args]);
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }

                    $steps["updateStateVariable"] = true
                      ? (() => {
                          const actionArgs = {};
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;
                            undefined;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateStateVariable"] != null &&
                      typeof $steps["updateStateVariable"] === "object" &&
                      typeof $steps["updateStateVariable"].then === "function"
                    ) {
                      $steps["updateStateVariable"] = await $steps[
                        "updateStateVariable"
                      ];
                    }
                  },
                  onIsSubmittingChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "isSubmitting",
                      ["form", "isSubmitting"],
                      FormWrapper_Helpers
                    ),
                  ref: ref => {
                    $refs["form"] = ref;
                  },
                  wrapperCol: { span: 16, horizontalOnly: true }
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "form.value"
                    },
                    {
                      name: "isSubmitting",
                      plasmicStateName: "form.isSubmitting"
                    }
                  ],
                  [],
                  FormWrapper_Helpers ?? {},
                  child$Props
                );

                return (
                  <FormWrapper
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    {...child$Props}
                  >
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__rtdr4
                      )}
                      label={"Link"}
                    >
                      <AntdInput
                        className={classNames(
                          "__wab_instance",
                          sty.input__yyAeM
                        )}
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__huYHe
                      )}
                      label={"Link"}
                    >
                      <AntdInput
                        className={classNames(
                          "__wab_instance",
                          sty.input__rukpF
                        )}
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__r2Rsf
                      )}
                      label={"Link"}
                    >
                      <AntdInput
                        className={classNames(
                          "__wab_instance",
                          sty.input__gpIhZ
                        )}
                      />
                    </FormItemWrapper>
                    <AntdButton
                      className={classNames("__wab_instance", sty.button)}
                      submitsForm={true}
                      type={"primary"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__w5ScZ
                        )}
                      >
                        {"Submit"}
                      </div>
                    </AntdButton>
                  </FormWrapper>
                );
              })()}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__hgtK6)}>
              <Icon12Icon
                className={classNames(projectcss.all, sty.svg__lnkmx)}
                role={"img"}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___0YTm4)}>
            <div className={classNames(projectcss.all, sty.freeBox__lmy4P)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__apVHu)}
                displayHeight={"150px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/verbum_onboarding/images/screenshot20231204At123248AmRemovebgpng.png",
                  fullWidth: 2712,
                  fullHeight: 1792,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__p7Nwn)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mmgyp
              )}
            >
              {"Copyright \u00a9 2024 Verbum Labs Inc."}
            </div>
          </div>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "form", "button"],
  h1: ["h1"],
  form: ["form", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  form: typeof FormWrapper;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSellerVerification__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSellerVerification__VariantsArgs;
    args?: PlasmicSellerVerification__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSellerVerification__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSellerVerification__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSellerVerification__ArgProps,
          internalVariantPropNames: PlasmicSellerVerification__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSellerVerification__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSellerVerification";
  } else {
    func.displayName = `PlasmicSellerVerification.${nodeName}`;
  }
  return func;
}

export const PlasmicSellerVerification = Object.assign(
  // Top-level PlasmicSellerVerification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSellerVerification
    internalVariantProps: PlasmicSellerVerification__VariantProps,
    internalArgProps: PlasmicSellerVerification__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Seller-Verification",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSellerVerification;
/* prettier-ignore-end */
