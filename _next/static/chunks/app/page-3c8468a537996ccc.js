(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7253: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 8173, 23)),
        Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.bind(r, 8765)),
        Promise.resolve().then(r.t.bind(r, 8624, 23)),
        Promise.resolve().then(r.bind(r, 60)),
        Promise.resolve().then(r.bind(r, 6611)),
        Promise.resolve().then(r.t.bind(r, 2786, 23)),
        Promise.resolve().then(r.t.bind(r, 8916, 23)),
        Promise.resolve().then(r.t.bind(r, 823, 23)),
        Promise.resolve().then(r.bind(r, 1293)),
        Promise.resolve().then(r.t.bind(r, 2983, 23)),
        Promise.resolve().then(r.t.bind(r, 1042, 23)),
        Promise.resolve().then(r.t.bind(r, 4877, 23)),
        Promise.resolve().then(r.t.bind(r, 4476, 23)),
        Promise.resolve().then(r.t.bind(r, 713, 23)),
        Promise.resolve().then(r.t.bind(r, 5393, 23)),
        Promise.resolve().then(r.t.bind(r, 2249, 23)),
        Promise.resolve().then(r.t.bind(r, 9030, 23)),
        Promise.resolve().then(r.t.bind(r, 4507, 23)),
        Promise.resolve().then(r.t.bind(r, 2820, 23)),
        Promise.resolve().then(r.t.bind(r, 1819, 23)),
        Promise.resolve().then(r.t.bind(r, 7406, 23)),
        Promise.resolve().then(r.t.bind(r, 4046, 23)),
        Promise.resolve().then(r.t.bind(r, 4717, 23)),
        Promise.resolve().then(r.bind(r, 8050)),
        Promise.resolve().then(r.bind(r, 9685)),
        Promise.resolve().then(r.bind(r, 8100)),
        Promise.resolve().then(r.bind(r, 6764)),
        Promise.resolve().then(r.bind(r, 2211)),
        Promise.resolve().then(r.bind(r, 4497)),
        Promise.resolve().then(r.bind(r, 5642)),
        Promise.resolve().then(r.bind(r, 4662)),
        Promise.resolve().then(r.bind(r, 9973)),
        Promise.resolve().then(r.bind(r, 9736));
    },
    8050: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return d;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(7138),
        i = r(8185),
        l = r(6648),
        o = r(2183);
      let c = (e) => {
        let t = new Date(e),
          r = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ][t.getMonth()],
          a = t.getDate(),
          s = t.getFullYear();
        return ''.concat(r, ' ').concat(a, ', ').concat(s);
      };
      var d = (e) => {
        let { blogPost: t, contentfulConfig: r } = e,
          [d, u] = (0, s.useState)(null),
          [f, m] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            (async () => {
              let e = t.fields.postThumbnail.sys.id;
              try {
                let t = await fetch(
                    ''
                      .concat(r.baseUrl, '/spaces/')
                      .concat(r.spaceId, '/environments/')
                      .concat(r.environmentId, '/assets/')
                      .concat(e, '?access_token=')
                      .concat(r.accessToken)
                  ),
                  a = await t.json(),
                  s = 'https:'.concat(a.fields.file.url);
                u(s);
              } catch (e) {
                console.error('Failed to fetch asset:', e);
              } finally {
                m(!1);
              }
            })();
          }, [t.fields.postThumbnail.sys.id, r]),
          (0, a.jsx)(n.default, {
            href: '/blog/' + t.fields.slug,
            className: 'flex flex-col gap-5 w-full',
            children: (0, a.jsxs)(i.Zb, {
              className: 'p-3 w-full select-none rounded-none',
              children: [
                (0, a.jsx)(i.Ol, {
                  className: 'p-0 w-full',
                  children: f
                    ? (0, a.jsx)(o.O, {
                        className: 'w-full aspect-video rounded-xl',
                      })
                    : d &&
                      (0, a.jsx)(l.default, {
                        src: d,
                        width: 400,
                        height: 400,
                        className:
                          'w-full h-fit aspect-video object-cover object-center rounded-xl',
                        alt: t.fields.title,
                        unoptimized: !0,
                      }),
                }),
                (0, a.jsxs)(i.aY, {
                  className:
                    'flex flex-col w-full px-0 py-5 space-y-3 items-start justify-start min-h-56',
                  children: [
                    (0, a.jsx)('div', {
                      className: 'flex space-x-2 mobile:space-x-1',
                      children: (0, a.jsx)('div', {
                        className:
                          'text-sm mobile:text-[11px] hover:opacity-100 transition-all text-[#C291FF]',
                        children: c(t.sys.createdAt),
                      }),
                    }),
                    (0, a.jsx)('h3', {
                      className: 'text-2xl mobile:text-lg',
                      children:
                        t.fields.title.length > 40
                          ? ''.concat(t.fields.title.slice(0, 40), '...')
                          : t.fields.title,
                    }),
                    (0, a.jsx)('p', {
                      className: 'text-xs font-thin',
                      children:
                        t.fields.excerpt && t.fields.excerpt.length > 100
                          ? ''.concat(t.fields.excerpt.slice(0, 100), '...')
                          : t.fields.excerpt || '',
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    1779: function (e, t, r) {
      'use strict';
      var a = r(7437);
      r(2265),
        (t.Z = (e) => {
          let { children: t, className: r, spaceHeader: s } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              s && (0, a.jsx)('div', { className: 'h-28' }),
              (0, a.jsx)('div', {
                className: 'w-full container pr-0 ' + r,
                children: (0, a.jsx)('div', {
                  className: 'relative z-10 w-3/4 mobile:w-full',
                  children: t,
                }),
              }),
            ],
          });
        });
    },
    9685: function (e, t, r) {
      'use strict';
      r.r(t);
      var a = r(7437),
        s = r(2265),
        n = r(2088),
        i = r(9582),
        l = r(1204);
      i.ZP.registerPlugin(l.i),
        (t.default = (e) => {
          let { text: t } = e,
            r = (0, s.useRef)(null);
          return (
            (0, s.useLayoutEffect)(() => {
              new n.Z(r.current);
              {
                let e = i.ZP.context(() => {
                  let e = r.current.querySelectorAll('.char');
                  i.ZP.from(e, {
                    y: -10,
                    rotateX: 40,
                    rotateY: -35,
                    rotateZ: -15,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                      trigger: r.current,
                      start: 'top bottom',
                      end: 'bottom 50%',
                      scrub: 1,
                    },
                  });
                }, r);
                return () => e.revert();
              }
            }, []),
            (0, a.jsx)('h2', {
              className:
                'w-full text-4xl mobile:text-4xl mobile:text-center section-heading',
              ref: r,
              children: t,
            })
          );
        });
    },
    8100: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return v;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(9354);
      function i(e) {
        let { className: t, angle: r = 65 } = e;
        return (0, a.jsxs)('div', {
          className: (0, n.cn)(
            'pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]',
            t
          ),
          style: { '--grid-angle': ''.concat(r, 'deg') },
          children: [
            (0, a.jsx)('div', {
              className:
                'absolute inset-0 [transform:rotateX(var(--grid-angle))]',
              children: (0, a.jsx)('div', {
                className: (0, n.cn)(
                  'animate-grid',
                  '[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]',
                  '[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]',
                  'dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]'
                ),
              }),
            }),
            (0, a.jsx)('div', {
              className:
                'absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black',
            }),
          ],
        });
      }
      var l = (e) => {
          let { animatedGround: t = !0 } = e;
          return (0, a.jsxs)('div', {
            className:
              'absolute top-0 left-0 h-full w-full z-0 pointer-events-none',
            children: [
              (0, a.jsx)('div', {
                className:
                  'mobile absolute top-28 left-1/4 h-[300px] w-1/4 -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_#B131FA_0%,_#B131FA_100%)] blur-[160px] mobile:bottom-1/2 mobile:left-0 mobile:z-10 mobile:h-[423px] mobile:w-[423px] z-10',
              }),
              t && (0, a.jsx)(i, { className: 'absolute top-0 left-0 z-30' }),
            ],
          });
        },
        o = r(6648),
        c = r(1779),
        d = r(2088),
        u = r(4446),
        f = r(9321);
      let m = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        h = (e) => Math.floor(Math.random() * e);
      function x(e) {
        let {
            text: t,
            duration: r = 800,
            framerProps: i = {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 3 },
            },
            className: l,
            animateOnLoad: o = !0,
          } = e,
          [c, d] = (0, s.useState)(t.split('')),
          [x, p] = (0, s.useState)(!1),
          g = (0, s.useRef)(0),
          v = (0, s.useRef)(!0);
        return (
          (0, s.useEffect)(() => {
            let e = setInterval(() => {
              if (!o && v.current) {
                clearInterval(e), (v.current = !1);
                return;
              }
              g.current < t.length
                ? (d((e) =>
                    e.map((e, r) =>
                      ' ' === e ? e : r <= g.current ? t[r] : m[h(26)]
                    )
                  ),
                  (g.current = g.current + 0.1))
                : (p(!1), clearInterval(e));
            }, r / (10 * t.length));
            return () => clearInterval(e);
          }, [t, r, x, o]),
          (0, a.jsx)('div', {
            className: 'overflow-hidden py-2 flex cursor-default scale-100',
            onMouseEnter: () => {
              (g.current = 0), p(!0);
            },
            children: (0, a.jsx)(u.M, {
              mode: 'wait',
              children: c.map((e, t) =>
                (0, a.jsx)(
                  f.E.p,
                  {
                    className: (0, n.cn)(
                      'font-mono',
                      ' ' === e ? 'w-3' : '',
                      l
                    ),
                    ...i,
                    children: e.toUpperCase(),
                  },
                  t
                )
              ),
            }),
          })
        );
      }
      function p(e) {
        let {
          className: t,
          reverse: r,
          pauseOnHover: s = !1,
          children: i,
          vertical: l = !1,
          repeat: o = 4,
          ...c
        } = e;
        return (0, a.jsx)('div', {
          ...c,
          className: (0, n.cn)(
            'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
            { 'flex-row': !l, 'flex-col': l },
            t
          ),
          children: Array(o)
            .fill(0)
            .map((e, t) =>
              (0, a.jsx)(
                'div',
                {
                  className: (0, n.cn)(
                    'flex shrink-0 justify-around [gap:var(--gap)]',
                    {
                      'animate-marquee flex-row': !l,
                      'animate-marquee-vertical flex-col': l,
                      'group-hover:[animation-play-state:paused]': s,
                      '[animation-direction:reverse]': r,
                    }
                  ),
                  children: i,
                },
                t
              )
            ),
        });
      }
      var g = r(9582);
      function v() {
        let e = (0, s.useRef)(null);
        return (
          (0, s.useLayoutEffect)(() => {
            d.Z.create('#heading-1'), d.Z.create('#heading-2');
            let t = g.ZP.context(() => {
              g.ZP.timeline()
                .from('#heading-1 .char', {
                  x: 100,
                  opacity: 0,
                  duration: 0.6,
                  stagger: 0.03,
                  delay: 1.2,
                })
                .from('#heading-2 .char', {
                  y: 100,
                  opacity: 0,
                  duration: 0.6,
                  stagger: 0.03,
                })
                .from('#hero-tagline', { y: 50, opacity: 0, duration: 0.3 })
                .from(
                  [
                    '.hyper-text_0',
                    '.hyper-text_1',
                    '.hyper-text_2',
                    '.hyper-text_3',
                    '.hyper-text_4',
                  ],
                  { x: -5, stagger: 0.4, duration: 0.4, opacity: 0 }
                )
                .from('#marquee_hero', { x: 100, opacity: 0, duration: 0.6 });
            }, e);
            return () => t.revert();
          }, []),
          (0, a.jsxs)('div', {
            className: 'h-screen relative',
            ref: e,
            children: [
              (0, a.jsx)(c.Z, {
                children: (0, a.jsxs)('div', {
                  className:
                    'flex flex-col items-center justify-center w-full h-screen',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'w-1/2 mobile:w-full flex flex-col gap-6',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'flex items-center gap-4',
                          children: [
                            (0, a.jsx)(o.default, {
                              src: '/images/logo-grayscale.png',
                              height: 100,
                              width: 300,
                              className: 'h-fit w-1/3',
                              alt: 'OpenMarket',
                            }),
                            (0, a.jsxs)('h1', {
                              className:
                                'flex flex-col items-start gap-2 text-4xl',
                              children: [
                                (0, a.jsx)('strong', {
                                  id: 'heading-1',
                                  children: 'THREE',
                                }),
                                (0, a.jsx)('span', {
                                  id: 'heading-2',
                                  children: 'PROTOCOL',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col items-start',
                          children: [
                            (0, a.jsx)('p', {
                              className: 'text-base text-white',
                              id: 'hero-tagline',
                              children:
                                'Blockchain and AI solutions for the future of eCommerce.',
                            }),
                            (0, a.jsxs)('div', {
                              className: 'flex gap-2 items-center',
                              children: [
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex gap-2 items-center hyper-text_0',
                                  children: [
                                    (0, a.jsx)(x, {
                                      className: 'font-inter text-sm',
                                      text: 'Global',
                                    }),
                                    (0, a.jsx)('span', {
                                      className: 'text-base',
                                      children: '/',
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex gap-2 items-center hyper-text_1',
                                  children: [
                                    (0, a.jsx)(x, {
                                      className: 'font-inter text-sm',
                                      text: 'Fast',
                                    }),
                                    (0, a.jsx)('span', {
                                      className: 'text-base',
                                      children: '/',
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex gap-2 items-center hyper-text_2',
                                  children: [
                                    (0, a.jsx)(x, {
                                      className: 'font-inter text-sm',
                                      text: 'Scalable',
                                    }),
                                    (0, a.jsx)('span', {
                                      className: 'text-base',
                                      children: '/',
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)('div', {
                                  className:
                                    'flex gap-2 items-center hyper-text_3',
                                  children: [
                                    (0, a.jsx)(x, {
                                      className: 'font-inter text-sm',
                                      text: 'Efficient',
                                    }),
                                    (0, a.jsx)('span', {
                                      className: 'text-base',
                                      children: '/',
                                    }),
                                  ],
                                }),
                                (0, a.jsx)('div', {
                                  className:
                                    'flex gap-2 items-center hyper-text_4',
                                  children: (0, a.jsx)(x, {
                                    className: 'font-inter text-sm',
                                    text: 'Secure.',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(p, {
                      className:
                        '[--duration:20s] w-full mt-auto absolute bottom-10 right-0',
                      id: 'marquee_hero',
                      children: [
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/chappyz.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/marlin.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/edge.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/cruster.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/iq.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/Sensay.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/LinqAI.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/Solidus.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/hashAI.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                        (0, a.jsx)(o.default, {
                          alt: 'OpenMarket',
                          src: '/images/Partners/Tectum.png',
                          className: 'h-6 mx-6 grayscale object-contain w-fit',
                          width: 100,
                          height: 50,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(l, {}),
            ],
          })
        );
      }
    },
    6764: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return o;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(8733),
        i = r(4446),
        l = r(9321);
      function o(e) {
        let {
            children: t,
            className: r,
            variant: o,
            duration: c = 0.4,
            delay: d = 0,
            yOffset: u = 6,
            inView: f = !1,
            inViewMargin: m = '-50px',
            blur: h = '6px',
          } = e,
          x = (0, s.useRef)(null),
          p = (0, n.Y)(x, { once: !0, margin: m });
        return (0, a.jsx)(i.M, {
          children: (0, a.jsx)(l.E.div, {
            ref: x,
            initial: 'hidden',
            animate: !f || p ? 'visible' : 'hidden',
            exit: 'hidden',
            variants: o || {
              hidden: { y: u, opacity: 0, filter: 'blur('.concat(h, ')') },
              visible: { y: -u, opacity: 1, filter: 'blur(0px)' },
            },
            transition: { delay: 0.04 + d, duration: c, ease: 'easeOut' },
            className: r,
            children: t,
          }),
        });
      }
    },
    2211: function (e, t, r) {
      'use strict';
      var a = r(7437),
        s = r(2265),
        n = r(9805),
        i = r(8733),
        l = r(9321);
      t.default = (e) => {
        let {
            children: t,
            width: r = 'fit-content',
            boxColor: o,
            duration: c,
          } = e,
          d = (0, n._)(),
          u = (0, n._)(),
          f = (0, s.useRef)(null),
          m = (0, i.Y)(f, { once: !0 });
        return (
          (0, s.useEffect)(() => {
            m
              ? (u.start('visible'), d.start('visible'))
              : (u.start('hidden'), d.start('hidden'));
          }, [m, d, u]),
          (0, a.jsxs)('div', {
            ref: f,
            style: { position: 'relative', width: r, overflow: 'hidden' },
            children: [
              (0, a.jsx)(l.E.div, {
                variants: {
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                },
                initial: 'hidden',
                animate: d,
                transition: { duration: c || 0.5, delay: 0.25 },
                children: t,
              }),
              (0, a.jsx)(l.E.div, {
                variants: { hidden: { left: 0 }, visible: { left: '100%' } },
                initial: 'hidden',
                animate: u,
                transition: { duration: c || 0.5, ease: 'easeIn' },
                style: {
                  position: 'absolute',
                  top: 4,
                  bottom: 4,
                  left: 0,
                  right: 0,
                  zIndex: 20,
                  background: o || '#5046e6',
                },
              }),
            ],
          })
        );
      };
    },
    4497: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          MagicCard: function () {
            return u;
          },
        });
      var a = r(8646),
        s = r(7437),
        n = r(2265),
        i = r(5282),
        l = r(9321),
        o = r(4846),
        c = r(9354);
      function d() {
        let e = (0, a._)([
          '\n            radial-gradient(',
          'px circle at ',
          'px ',
          'px, ',
          ', transparent 100%)\n          ',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        let {
            children: t,
            className: r,
            gradientSize: a = 200,
            gradientColor: u = '#262626',
            gradientOpacity: f = 0.8,
          } = e,
          m = (0, i.c)(-a),
          h = (0, i.c)(-a),
          x = (0, n.useCallback)(
            (e) => {
              let { left: t, top: r } = e.currentTarget.getBoundingClientRect();
              m.set(e.clientX - t), h.set(e.clientY - r);
            },
            [m, h]
          ),
          p = (0, n.useCallback)(() => {
            m.set(-a), h.set(-a);
          }, [m, h, a]);
        return (
          (0, n.useEffect)(() => {
            m.set(-a), h.set(-a);
          }, [m, h, a]),
          (0, s.jsxs)('div', {
            onMouseMove: x,
            onMouseLeave: p,
            className: (0, c.cn)(
              'group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white',
              r
            ),
            children: [
              (0, s.jsx)('div', { className: 'relative z-10', children: t }),
              (0, s.jsx)(l.E.div, {
                className:
                  'pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                style: { background: (0, o.Y)(d(), a, m, h, u), opacity: f },
              }),
            ],
          })
        );
      }
    },
    9733: function (e, t, r) {
      'use strict';
      r.d(t, {
        z: function () {
          return c;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(1538),
        i = r(2218),
        l = r(9354);
      let o = (0, i.j)(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
              },
              size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          }
        ),
        c = s.forwardRef((e, t) => {
          let { className: r, variant: s, size: i, asChild: c = !1, ...d } = e,
            u = c ? n.g7 : 'button';
          return (0, a.jsx)(u, {
            className: (0, l.cn)(o({ variant: s, size: i, className: r })),
            ref: t,
            ...d,
          });
        });
      c.displayName = 'Button';
    },
    8185: function (e, t, r) {
      'use strict';
      r.d(t, {
        Ol: function () {
          return l;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return o;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(9354);
      let i = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, n.cn)(
            'rounded-lg border bg-card text-card-foreground shadow-sm',
            r
          ),
          ...s,
        });
      });
      i.displayName = 'Card';
      let l = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, n.cn)('flex flex-col space-y-1.5 p-6', r),
          ...s,
        });
      });
      (l.displayName = 'CardHeader'),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)('h3', {
            ref: t,
            className: (0, n.cn)(
              'text-2xl font-semibold leading-none tracking-tight',
              r
            ),
            ...s,
          });
        }).displayName = 'CardTitle'),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)('p', {
            ref: t,
            className: (0, n.cn)('text-sm text-muted-foreground', r),
            ...s,
          });
        }).displayName = 'CardDescription');
      let o = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)('div', {
          ref: t,
          className: (0, n.cn)('p-6 pt-0', r),
          ...s,
        });
      });
      (o.displayName = 'CardContent'),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)('div', {
            ref: t,
            className: (0, n.cn)('flex items-center p-6 pt-0', r),
            ...s,
          });
        }).displayName = 'CardFooter');
    },
    5642: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Carousel: function () {
            return f;
          },
          CarouselContent: function () {
            return m;
          },
          CarouselItem: function () {
            return h;
          },
          CarouselNext: function () {
            return p;
          },
          CarouselPrevious: function () {
            return x;
          },
        });
      var a = r(7437),
        s = r(2265),
        n = r(4300),
        i = r(5137),
        l = r(1976),
        o = r(9354),
        c = r(9733);
      let d = s.createContext(null);
      function u() {
        let e = s.useContext(d);
        if (!e) throw Error('useCarousel must be used within a <Carousel />');
        return e;
      }
      let f = s.forwardRef((e, t) => {
        let {
            orientation: r = 'horizontal',
            opts: i,
            setApi: l,
            plugins: c,
            className: u,
            children: f,
            ...m
          } = e,
          [h, x] = (0, n.Z)({ ...i, axis: 'horizontal' === r ? 'x' : 'y' }, c),
          [p, g] = s.useState(!1),
          [v, b] = s.useState(!1),
          y = s.useCallback((e) => {
            e && (g(e.canScrollPrev()), b(e.canScrollNext()));
          }, []),
          N = s.useCallback(() => {
            null == x || x.scrollPrev();
          }, [x]),
          j = s.useCallback(() => {
            null == x || x.scrollNext();
          }, [x]),
          w = s.useCallback(
            (e) => {
              'ArrowLeft' === e.key
                ? (e.preventDefault(), N())
                : 'ArrowRight' === e.key && (e.preventDefault(), j());
            },
            [N, j]
          );
        return (
          s.useEffect(() => {
            x && l && l(x);
          }, [x, l]),
          s.useEffect(() => {
            if (x)
              return (
                y(x),
                x.on('reInit', y),
                x.on('select', y),
                () => {
                  null == x || x.off('select', y);
                }
              );
          }, [x, y]),
          (0, a.jsx)(d.Provider, {
            value: {
              carouselRef: h,
              api: x,
              opts: i,
              orientation:
                r ||
                ((null == i ? void 0 : i.axis) === 'y'
                  ? 'vertical'
                  : 'horizontal'),
              scrollPrev: N,
              scrollNext: j,
              canScrollPrev: p,
              canScrollNext: v,
            },
            children: (0, a.jsx)('div', {
              ref: t,
              onKeyDownCapture: w,
              className: (0, o.cn)('relative', u),
              role: 'region',
              'aria-roledescription': 'carousel',
              ...m,
              children: f,
            }),
          })
        );
      });
      f.displayName = 'Carousel';
      let m = s.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { carouselRef: n, orientation: i } = u();
        return (0, a.jsx)('div', {
          ref: n,
          className: 'overflow-hidden',
          children: (0, a.jsx)('div', {
            ref: t,
            className: (0, o.cn)(
              'flex',
              'horizontal' === i ? '-ml-4' : '-mt-4 flex-col',
              r
            ),
            ...s,
          }),
        });
      });
      m.displayName = 'CarouselContent';
      let h = s.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { orientation: n } = u();
        return (0, a.jsx)('div', {
          ref: t,
          role: 'group',
          'aria-roledescription': 'slide',
          className: (0, o.cn)(
            'min-w-0 shrink-0 grow-0 basis-full',
            'horizontal' === n ? 'pl-4' : 'pt-4',
            r
          ),
          ...s,
        });
      });
      h.displayName = 'CarouselItem';
      let x = s.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = 'outline',
            size: n = 'icon',
            ...l
          } = e,
          { orientation: d, scrollPrev: f, canScrollPrev: m } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: s,
          size: n,
          className: (0, o.cn)(
            'absolute  h-8 w-8 rounded-full',
            'horizontal' === d
              ? '-left-12 top-1/2 -translate-y-1/2'
              : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
            r
          ),
          disabled: !m,
          onClick: f,
          ...l,
          children: [
            (0, a.jsx)(i.Z, { className: 'h-4 w-4' }),
            (0, a.jsx)('span', {
              className: 'sr-only',
              children: 'Previous slide',
            }),
          ],
        });
      });
      x.displayName = 'CarouselPrevious';
      let p = s.forwardRef((e, t) => {
        let {
            className: r,
            variant: s = 'outline',
            size: n = 'icon',
            ...i
          } = e,
          { orientation: d, scrollNext: f, canScrollNext: m } = u();
        return (0, a.jsxs)(c.z, {
          ref: t,
          variant: s,
          size: n,
          className: (0, o.cn)(
            'absolute h-8 w-8 rounded-full',
            'horizontal' === d
              ? '-right-12 top-1/2 -translate-y-1/2'
              : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
            r
          ),
          disabled: !m,
          onClick: f,
          ...i,
          children: [
            (0, a.jsx)(l.Z, { className: 'h-4 w-4' }),
            (0, a.jsx)('span', {
              className: 'sr-only',
              children: 'Next slide',
            }),
          ],
        });
      });
      p.displayName = 'CarouselNext';
    },
    4662: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Dialog: function () {
            return o;
          },
          DialogClose: function () {
            return u;
          },
          DialogContent: function () {
            return m;
          },
          DialogDescription: function () {
            return g;
          },
          DialogFooter: function () {
            return x;
          },
          DialogHeader: function () {
            return h;
          },
          DialogOverlay: function () {
            return f;
          },
          DialogPortal: function () {
            return d;
          },
          DialogTitle: function () {
            return p;
          },
          DialogTrigger: function () {
            return c;
          },
        });
      var a = r(7437),
        s = r(2265),
        n = r(3304),
        i = r(4697),
        l = r(9354);
      let o = n.fC,
        c = n.xz,
        d = n.h_,
        u = n.x8,
        f = s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(n.aV, {
            ref: t,
            className: (0, l.cn)(
              'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              r
            ),
            ...s,
          });
        });
      f.displayName = n.aV.displayName;
      let m = s.forwardRef((e, t) => {
        let { className: r, children: s, ...o } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(f, {}),
            (0, a.jsxs)(n.VY, {
              ref: t,
              className: (0, l.cn)(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                r
              ),
              ...o,
              children: [
                s,
                (0, a.jsxs)(n.x8, {
                  className:
                    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                  children: [
                    (0, a.jsx)(i.Z, { className: 'h-4 w-4' }),
                    (0, a.jsx)('span', {
                      className: 'sr-only',
                      children: 'Close',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      m.displayName = n.VY.displayName;
      let h = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)('div', {
          className: (0, l.cn)(
            'flex flex-col space-y-1.5 text-center sm:text-left',
            t
          ),
          ...r,
        });
      };
      h.displayName = 'DialogHeader';
      let x = (e) => {
        let { className: t, ...r } = e;
        return (0, a.jsx)('div', {
          className: (0, l.cn)(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            t
          ),
          ...r,
        });
      };
      x.displayName = 'DialogFooter';
      let p = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.Dx, {
          ref: t,
          className: (0, l.cn)(
            'text-lg font-semibold leading-none tracking-tight',
            r
          ),
          ...s,
        });
      });
      p.displayName = n.Dx.displayName;
      let g = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(n.dk, {
          ref: t,
          className: (0, l.cn)('text-sm text-muted-foreground', r),
          ...s,
        });
      });
      g.displayName = n.dk.displayName;
    },
    9973: function (e, t, r) {
      'use strict';
      r.d(t, {
        Separator: function () {
          return l;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(8484),
        i = r(9354);
      let l = s.forwardRef((e, t) => {
        let {
          className: r,
          orientation: s = 'horizontal',
          decorative: l = !0,
          ...o
        } = e;
        return (0, a.jsx)(n.f, {
          ref: t,
          decorative: l,
          orientation: s,
          className: (0, i.cn)(
            'shrink-0 bg-border',
            'horizontal' === s ? 'h-[1px] w-full' : 'h-full w-[1px]',
            r
          ),
          ...o,
        });
      });
      l.displayName = n.f.displayName;
    },
    2183: function (e, t, r) {
      'use strict';
      r.d(t, {
        O: function () {
          return n;
        },
      });
      var a = r(7437),
        s = r(9354);
      function n(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)('div', {
          className: (0, s.cn)('animate-pulse rounded-md bg-muted', t),
          ...r,
        });
      }
    },
    9736: function (e, t, r) {
      'use strict';
      r.d(t, {
        Tooltip: function () {
          return o;
        },
        TooltipContent: function () {
          return d;
        },
        TooltipProvider: function () {
          return l;
        },
        TooltipTrigger: function () {
          return c;
        },
      });
      var a = r(7437),
        s = r(2265),
        n = r(7171),
        i = r(9354);
      let l = n.zt,
        o = n.fC,
        c = n.xz,
        d = s.forwardRef((e, t) => {
          let { className: r, sideOffset: s = 4, ...l } = e;
          return (0, a.jsx)(n.VY, {
            ref: t,
            sideOffset: s,
            className: (0, i.cn)(
              'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              r
            ),
            ...l,
          });
        });
      d.displayName = n.VY.displayName;
    },
    9354: function (e, t, r) {
      'use strict';
      r.d(t, {
        cn: function () {
          return n;
        },
      });
      var a = r(4839),
        s = r(6164);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.m6)((0, a.W)(t));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [786, 922, 231, 868, 571, 173, 129, 123, 279, 971, 23, 744],
      function () {
        return e((e.s = 7253));
      }
    ),
      (_N_E = e.O());
  },
]);
