google.maps.__gjsload__('overlay', function(_) {
    var Yv = function(a) {
            this.g = a
        },
        boa = function() {},
        Zv = function(a) {
            a.On = a.On || new boa;
            return a.On
        },
        coa = function(a) {
            this.Ba = new _.kj(() => {
                const b = a.On;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Em && a.onAdd) a.onAdd();
                        b.Em = !0;
                        a.draw()
                    }
                } else {
                    if (b.Em)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Em = !1
                }
            }, 0)
        },
        doa = function(a, b) {
            const c = Zv(a);
            let d = c.Rl;
            d || (d = c.Rl = new coa(a));
            _.hb(c.Na || [], _.qh);
            var e = c.ab = c.ab || new _.tka;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.mr = c.mr || new Yv(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.lj(d.Ba);
            c.Na = [_.K(a, "panes_changed", e), _.K(f, "zoom_changed", e), _.K(f, "offset_changed", e), _.K(b, "projection_changed", e), _.K(f, "projectioncenterq_changed", e)];
            _.lj(d.Ba);
            b instanceof _.Fh ? (_.O(b, "Ox"), _.N(b, 148440)) : b instanceof _.Ai && (_.O(b, "Oxs"), _.N(b, 181451))
        },
        ioa = function(a) {
            if (a) {
                var b = a.getMap();
                if (eoa(a) !== b && b && b instanceof _.Fh) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new foa(b, a, c.overlayLayer) : c.h.then(({
                        ha: d
                    }) => {
                        const e = new goa(b, d);
                        d.xb(e);
                        c.overlayLayer = e;
                        hoa(a);
                        ioa(a)
                    })
                }
            }
        },
        hoa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Cd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        eoa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        joa = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.y(Yv, _.M);
    Yv.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.wg(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var $v = {};
    _.y(coa, _.M);
    $v.nd = function(a) {
        if (a) {
            var b = a.getMap();
            (Zv(a).Uq || null) !== b && (b && doa(a, b), Zv(a).Uq = b)
        }
    };
    $v.Cd = function(a) {
        const b = Zv(a);
        var c = b.ab;
        c && c.unbindAll();
        (c = b.mr) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Na && _.hb(b.Na, _.qh);
        b.Na = null;
        b.Rl && (b.Rl.Ba.Dc(), b.Rl = null);
        delete Zv(a).Uq
    };
    var aw = {},
        foa = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.j = c;
                this.h = !1;
                _.O(this.map, "Ox");
                _.N(this.map, 148440);
                c.nd(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        goa = class {
            constructor(a, b) {
                this.o = a;
                this.j = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            Lb(a, b, c, d, e, f, g, h) {
                const k = this.g = this.g || new _.ms(this.o, this.j, () => {});
                k.Lb(a, b, c, d, e, f, g, h);
                for (const l of this.h) joa(l, k), l.draw()
            }
            nd(a) {
                this.h.push(a);
                this.g && joa(a, this.g);
                this.j.refresh()
            }
            Cd(a) {
                _.pb(this.h,
                    a)
            }
        };
    aw.nd = ioa;
    aw.Cd = hoa;
    _.ih("overlay", {
        np: function(a) {
            if (a) {
                (0, $v.Cd)(a);
                (0, aw.Cd)(a);
                var b = a.getMap();
                b && (b instanceof _.Fh ? (0, aw.nd)(a) : (0, $v.nd)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.xo(a, {
                wd: ({
                    event: b
                }) => {
                    _.on(b.Ga)
                },
                Ec: b => _.jo(b),
                Mg: b => _.ko(b),
                fd: b => _.ko(b),
                Oc: b => _.lo(b)
            }).Uh(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.nh);
            a.addEventListener("contextmenu", _.nh);
            a.addEventListener("dblclick", _.nh);
            a.addEventListener("mousedown", _.nh);
            a.addEventListener("mousemove", _.nh);
            a.addEventListener("MSPointerDown",
                _.nh);
            a.addEventListener("pointerdown", _.nh);
            a.addEventListener("touchstart", _.nh);
            a.addEventListener("wheel", _.nh)
        }
    });
});