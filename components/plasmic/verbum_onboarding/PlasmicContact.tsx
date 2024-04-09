// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gPere25tZXJ8DN5wLAbNNx
// Component: u2mF1FBhU032

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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

import Button from "../../Button"; // plasmic-import: WJBFN552Km_Y/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import { useScreenVariants as useScreenVariants_9Et3CbDnt6Nw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 9Et3CbDNT6nw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: gPere25tZXJ8DN5wLAbNNx/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: u2mF1FBhU032/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: _w1MXYoHNAL4/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: XXxSktuUg6AL/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: WNrOKOGZa0w2/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: Db8zntDAjUz9/icon

createPlasmicElementProxy;

export type PlasmicContact__VariantMembers = {};
export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
  form?: Flex__<typeof FormWrapper>;
  textArea?: Flex__<typeof AntdTextArea>;
};

export interface DefaultContactProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_9Et3CbDnt6Nw()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicContact.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicContact.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicContact.pageMetadata.title}
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
            className={classNames(projectcss.all, sty.freeBox__uvZpa)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__kGd4T)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__gqSew)}
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
              />
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__hqr9K)}
              color={"white"}
              onClick={async event => {
                const $steps = {};

                $steps["goToConnect"] = true
                  ? (() => {
                      const actionArgs = { destination: `/connect` };
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
                  $steps["goToConnect"] != null &&
                  typeof $steps["goToConnect"] === "object" &&
                  typeof $steps["goToConnect"].then === "function"
                ) {
                  $steps["goToConnect"] = await $steps["goToConnect"];
                }
              }}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6Z65R
                )}
              >
                {"Connect"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__lUg1Z)}
              color={"clear"}
              onClick={async event => {
                const $steps = {};

                $steps["goToSignup"] = true
                  ? (() => {
                      const actionArgs = { destination: `/signup` };
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
                  $steps["goToSignup"] != null &&
                  typeof $steps["goToSignup"] === "object" &&
                  typeof $steps["goToSignup"].then === "function"
                ) {
                  $steps["goToSignup"] = await $steps["goToSignup"];
                }
              }}
              submitsForm={true}
            >
              {"Signup"}
            </Button>
            <Icon7Icon
              className={classNames(projectcss.all, sty.svg__bZdp)}
              role={"img"}
            />

            <Icon8Icon
              className={classNames(projectcss.all, sty.svg__blvxU)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpsdiscordggmmpaM8SJ"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://discord.gg/mmpaM8sJ"
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
                  $steps["goToHttpsdiscordggmmpaM8SJ"] != null &&
                  typeof $steps["goToHttpsdiscordggmmpaM8SJ"] === "object" &&
                  typeof $steps["goToHttpsdiscordggmmpaM8SJ"].then ===
                    "function"
                ) {
                  $steps["goToHttpsdiscordggmmpaM8SJ"] = await $steps[
                    "goToHttpsdiscordggmmpaM8SJ"
                  ];
                }
              }}
              role={"img"}
            />
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__e1PPb)}>
            <div className={classNames(projectcss.all, sty.freeBox__cgm2T)}>
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
                {"Let\u2019s talk"}
              </h1>
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
                        sty.formField__zIKd
                      )}
                      label={"Name"}
                      name={"name"}
                    >
                      <AntdInput
                        className={classNames(
                          "__wab_instance",
                          sty.input__tv6Wu
                        )}
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__ne0S6
                      )}
                      initialValue={``}
                      label={"Email"}
                    >
                      <AntdInput
                        className={classNames(
                          "__wab_instance",
                          sty.input__wvkzw
                        )}
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__jrYzt
                      )}
                      label={"Message"}
                      name={"message"}
                    >
                      <AntdTextArea
                        className={classNames("__wab_instance", sty.textArea)}
                      />
                    </FormItemWrapper>
                    <AntdButton
                      className={classNames(
                        "__wab_instance",
                        sty.button__ukY8S
                      )}
                      submitsForm={true}
                      type={"primary"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dAq4M
                        )}
                      >
                        {"Submit"}
                      </div>
                    </AntdButton>
                  </FormWrapper>
                );
              })()}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xZhom
                )}
              >
                {"or direct message us on X"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__r7Qs
                )}
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
                    typeof $steps["goToHttpstwittercomVerbumLabs"] ===
                      "object" &&
                    typeof $steps["goToHttpstwittercomVerbumLabs"].then ===
                      "function"
                  ) {
                    $steps["goToHttpstwittercomVerbumLabs"] = await $steps[
                      "goToHttpstwittercomVerbumLabs"
                    ];
                  }
                }}
              >
                {"@verbumlabs"}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__jRYrW)}>
            <div className={classNames(projectcss.all, sty.freeBox__hak44)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__phfNe)}
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
          <div className={classNames(projectcss.all, sty.freeBox__tGKcu)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bzHBe
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
  root: ["root", "h1", "form", "textArea"],
  h1: ["h1"],
  form: ["form", "textArea"],
  textArea: ["textArea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  form: typeof FormWrapper;
  textArea: typeof AntdTextArea;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContact__ArgsType,
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    textArea: makeNodeComponent("textArea"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */