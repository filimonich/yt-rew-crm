import { defineComponent, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { c as cn, u as useSeoMeta } from "./index-BAqAp-tE.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DFrq6KK9.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-x3gE6Lzb.js";
import { D as DB, a as DB_ID, C as COLLECTION_CUSTOMERS } from "./appwrite-C1LWICvB.js";
import { useQuery } from "@tanstack/vue-query";
import "../server.mjs";
import "#internal/nitro";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "devalue";
import "@vueuse/core";
import "tailwind-merge";
import "clsx";
import "appwrite";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full overflow-auto" }, _attrs))}><table class="${ssrRenderClass(unref(cn)("w-full caption-bottom text-sm", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</table></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/Table.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tbody${ssrRenderAttrs(mergeProps({
        class: unref(cn)("[&_tr:last-child]:border-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableBody.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCell.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        class: unref(cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHead.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({
        class: unref(cn)("[&_tr]:border-b", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</thead>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: unref(cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Customers | CRM System"
    });
    const { data: customers, isLoading } = useQuery({
      queryKey: ["customers"],
      queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$6;
      const _component_UiTableHeader = _sfc_main$2;
      const _component_UiTableRow = _sfc_main$1;
      const _component_UiTableHead = _sfc_main$3;
      const _component_UiTableBody = _sfc_main$5;
      const _component_UiTableCell = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))}><h1 class="font-bold text-2xl mb-10">Наши клиенты</h1>`);
      if (unref(isLoading)) {
        _push(`<div>Loading...</div>`);
      } else {
        _push(ssrRenderComponent(_component_UiTable, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "w-[150px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Изображение`);
                              } else {
                                return [
                                  createTextVNode("Изображение")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "w-[300px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Наименование`);
                              } else {
                                return [
                                  createTextVNode("Наименование")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "w-[300px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Email`);
                              } else {
                                return [
                                  createTextVNode("Email")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Откуда пришел`);
                              } else {
                                return [
                                  createTextVNode("Откуда пришел")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "w-[150px]" }, {
                              default: withCtx(() => [
                                createTextVNode("Изображение")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "w-[300px]" }, {
                              default: withCtx(() => [
                                createTextVNode("Наименование")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "w-[300px]" }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("Откуда пришел")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "w-[150px]" }, {
                            default: withCtx(() => [
                              createTextVNode("Изображение")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "w-[300px]" }, {
                            default: withCtx(() => [
                              createTextVNode("Наименование")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "w-[300px]" }, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("Откуда пришел")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList((_a = unref(customers)) == null ? void 0 : _a.documents, (customer) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: customer.$id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_NuxtLink, {
                                    href: `/customers/edit/${customer.$id}`
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_NuxtImg, {
                                          src: customer.avatar_url,
                                          alt: customer.name,
                                          width: "50",
                                          height: "50",
                                          class: "rounded-full"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_NuxtImg, {
                                            src: customer.avatar_url,
                                            alt: customer.name,
                                            width: "50",
                                            height: "50",
                                            class: "rounded-full"
                                          }, null, 8, ["src", "alt"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_NuxtLink, {
                                      href: `/customers/edit/${customer.$id}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtImg, {
                                          src: customer.avatar_url,
                                          alt: customer.name,
                                          width: "50",
                                          height: "50",
                                          class: "rounded-full"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(customer.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(customer.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(customer.email)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(customer.email), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(customer.from_source)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(customer.from_source), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    href: `/customers/edit/${customer.$id}`
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtImg, {
                                        src: customer.avatar_url,
                                        alt: customer.name,
                                        width: "50",
                                        height: "50",
                                        class: "rounded-full"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(customer.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(customer.email), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(customer.from_source), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(customers)) == null ? void 0 : _b.documents, (customer) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: customer.$id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  href: `/customers/edit/${customer.$id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtImg, {
                                      src: customer.avatar_url,
                                      alt: customer.name,
                                      width: "50",
                                      height: "50",
                                      class: "rounded-full"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(customer.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(customer.email), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(customer.from_source), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "w-[150px]" }, {
                          default: withCtx(() => [
                            createTextVNode("Изображение")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "w-[300px]" }, {
                          default: withCtx(() => [
                            createTextVNode("Наименование")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "w-[300px]" }, {
                          default: withCtx(() => [
                            createTextVNode("Email")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("Откуда пришел")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(customers)) == null ? void 0 : _a.documents, (customer) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: customer.$id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  href: `/customers/edit/${customer.$id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtImg, {
                                      src: customer.avatar_url,
                                      alt: customer.name,
                                      width: "50",
                                      height: "50",
                                      class: "rounded-full"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(customer.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(customer.email), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(customer.from_source), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-MCePl0yF.js.map
