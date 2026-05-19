import { registerMvuSchema as r } from "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js";
const e = z,
  t = ["Sơ kỳ", "Trung kỳ", "Hậu kỳ", "Đại viên mãn"],
  n = [
    "Luyện Khí",
    "Trúc Cơ",
    "Kim Đan",
    "Nguyên Anh",
    "Hóa Thần",
    "Luyện Hư",
    "Hợp Thể",
    "Đại Thừa",
    "Độ Kiếp",
    "Chân Tiên",
    "Tiên Vương",
    "Tiên Đế",
  ],
  a = [1, 1.18, 1.38, 1.6],
  o = [
    100, 160, 260, 420, 680, 1100, 1780, 2880, 4660, 7540, 12200, 19740,
  ].flatMap((r) => a.map((e) => Math.round(r * e))),
  c = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2880,
    3360, 3840, 4800, 5760, 6720, 7680, 9600, 11520, 13440, 15360, 19200, 23040,
    26880, 30720, 38400, 46080, 53760, 61440, 76800, 92160, 107520, 122880,
    153600, 184320, 215040, 245760, 307200, 368640, 430080, 491520, 614400,
    737280, 860160, 983040,
  ],
  i = {
    1: [
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2400,
      2400, 2400, 4800, 4800, 4800, 4800, 9600, 9600, 9600, 9600, 19200, 19200,
      19200, 19200, 38400, 38400, 38400, 38400, 76800, 76800, 76800, 76800,
      153600, 153600, 153600, 153600, 307200, 307200, 307200, 307200, 614400,
      614400, 614400, 614400,
    ],
    2: o,
    3: c,
  },
  u = [
    100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 1e3, 1e3, 1e3,
    1e3, 2e3, 2e3, 2e3, 2e3, 5e3, 5e3, 5e3, 5e3, 1e4, 1e4, 1e4, 1e4, 5e4, 5e4,
    5e4, 5e4, 1e5, 1e5, 1e5, 1e5, 5e5, 5e5, 5e5, 5e5, 2e6, 2e6, 2e6, 2e6, 1e7,
    1e7, 1e7, 1e7,
  ];
const s = {
    Phàm: "Phàm",
    Phàm: "Phàm",
    Phàm: "Phàm",
    Phàm: "Phàm",
    Hoàng: "Hoàng",
    Hoàng: "Hoàng",
    Hoàng: "Hoàng",
    Hoàng: "Hoàng",
    Huyền: "Huyền",
    Huyền: "Huyền",
    Huyền: "Huyền",
    Huyền: "Huyền",
    Địa: "Địa",
    Địa: "Địa",
    Địa: "Địa",
    Địa: "Địa",
    Thiên: "Thiên",
    Thiên: "Thiên",
    Thiên: "Thiên",
    Thiên: "Thiên",
    Tiên: "Tiên",
    Tiên: "Tiên",
    Tiên: "Tiên",
    Tiên: "Tiên",
    Thánh: "Thánh",
    Thánh: "Thánh",
    Thánh: "Thánh",
    Thánh: "Thánh",
    "Tiên Thiên": "Tiên Thiên",
    "Tiên Thiên": "Tiên Thiên",
    "Tiên Thiên": "Tiên Thiên",
  },
  l = {
    "Nhập môn": "Nhập môn",
    "Sơ cấp": "Nhập môn",
    "Mới học": "Nhập môn",
    "Tân thủ": "Nhập môn",
    "Thục luyện": "Thục luyện",
    "Trung cấp": "Thục luyện",
    "Thành thục": "Thục luyện",
    "Tiểu thành": "Thục luyện",
    "Tinh thông": "Tinh thông",
    "Cao cấp": "Tinh thông",
    "Tinh trạm": "Tinh thông",
    "Đại thành": "Đại thành",
    "Đại sư": "Đại thành",
    "Tông sư": "Đại thành",
    "Viên mãn": "Viên mãn",
    "Hoàn mỹ": "Viên mãn",
    "Cực trí": "Viên mãn",
    "Hóa cảnh": "Hóa cảnh",
    "Hóa Thần": "Hóa cảnh",
    "Phản phác quy chân": "Hóa cảnh",
    "Xuất thần nhập hóa": "Hóa cảnh",
  };
const f = e.z.object({
    Tên: e.z.string().prefault(""),
    "Mô tả": e.z.string().prefault(""),
    "Phẩm Giai": e.z.string().prefault(""),
    "Số Lượng": e.z.coerce
      .number()
      .transform((r) => Math.max(0, r))
      .prefault(1),
  }),
  p = new Set(["Linh Thạch", "Hạ Phẩm Linh Thạch"]);
function m(r) {
  return String(r ?? "")
    .trim()
    .replace(/\s+/g, "");
}
function g(r, e) {
  return [m(r), m(e?.Tên)].filter(Boolean).some((r) => p.has(r));
}
function b(r, ...e) {
  let t = Number(r);
  (!Number.isFinite(t) || t < 0) && (t = 0);
  const n = e.map((r) => {
    const e = (function (r) {
      const e = {};
      let t = 0;
      for (const [n, a] of Object.entries(r ?? {}))
        if (a) {
          if (g(n, a)) {
            const r = Number(a["Số Lượng"]);
            Number.isFinite(r) && r > 0 && (t += r);
            continue;
          }
          e[n] = a;
        }
      return { inventory: e, spiritStone: t };
    })(r);
    return ((t += e.spiritStone), e.inventory);
  });
  return { spiritStone: t, inventories: n };
}
const d = {
    "Đang tu luyện": "Đang tu luyện",
    "Bế quan": "Đang tu luyện",
    "Đả tọa": "Đang tu luyện",
    "Điều tức": "Đang tu luyện",
    "Gặp bình cảnh": "Gặp bình cảnh",
    "Thời kỳ bình cảnh": "Gặp bình cảnh",
    "Kẹt ở bình cảnh": "Gặp bình cảnh",
    "Thụ trở": "Gặp bình cảnh",
    "Đang đột phá": "Đang đột phá",
    "Xung quan": "Đang đột phá",
    "Phá cảnh": "Đang đột phá",
    "Thử đột phá": "Đang đột phá",
    "Đang củng cố": "Đang củng cố",
    "Củng cố trung": "Đang củng cố",
    "Căn cơ chưa vững": "Đang củng cố",
    "Đang áp cảnh": "Đang áp cảnh",
    "Áp chế cảnh giới": "Đang áp cảnh",
    "Tàng phong dưỡng cảnh": "Đang áp cảnh",
  },
  h = {
    Không: "Không",
    "": "Không",
    "Chưa đột phá": "Không",
    "Thành công": "Thành công",
    "Phá cảnh thành công": "Thành công",
    "Độ qua": "Thành công",
    "Thất bại": "Thất bại",
    "Phá cảnh thất bại": "Thất bại",
    "Xung quan thất bại": "Thất bại",
  },
  S = e.z
    .object({
      "Giai Đoạn": e.z
        .string()
        .transform((r) => d[String(r).trim()] || "Đang tu luyện")
        .prefault("Đang tu luyện"),
      "Nguyên Nhân Bình Cảnh": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Mục Tiêu Đột Phá": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Kết Quả Lần Trước": e.z
        .string()
        .transform((r) => h[String(r).trim()] || "Không")
        .prefault("Không"),
    })
    .prefault({ "Giai Đoạn": "Đang tu luyện", "Nguyên Nhân Bình Cảnh": "", "Mục Tiêu Đột Phá": "", "Kết Quả Lần Trước": "Không" });
function j(r) {
  const e = _.clamp(Math.floor(Number(r) || 1), 1, c.length),
    a = Math.floor((e - 1) / 4);
  return `${n[a] ?? "Luyện Khí"}${t[(e - 1) % 4] ?? "Sơ kỳ"}`;
}
function M(r, e = 3) {
  const t = (function (r = 3) {
    if (!0 === r) return i[1];
    if (!1 === r) return i[3];
    const e = Math.max(1, Math.floor(Number(r) || 3));
    return i[e] ?? c;
  })(e);
  return t[_.clamp(Math.floor(Number(r) || 1), 1, t.length) - 1] ?? t[0] ?? 100;
}
function N(r, e, t = 1, n = 3) {
  const a = Number(e);
  if (!Number.isFinite(a) || a <= 0) return 0;
  const o = M(r, t),
    c = M(r, n);
  if (o <= 0 || o === c) return Math.round(a);
  const i = a / o,
    u = Math.round(i * c);
  return Math.max(0, u);
}
function y(r, e) {
  const t = S.parse(r ?? {}),
    n = M(e.level);
  let a = t["Giai Đoạn"];
  e.legacyAttemptBreakthrough || "Đang đột phá" === a
    ? (a = "Đang đột phá")
    : "Đang tu luyện" === a && e.cultivation >= n && (a = "Gặp bình cảnh");
  const o = e.level < c.length ? j(e.level + 1) : t["Mục Tiêu Đột Phá"],
    i = ["Gặp bình cảnh", "Đang đột phá", "Đang áp cảnh"].includes(a);
  return {
    "Giai Đoạn": a,
    "Nguyên Nhân Bình Cảnh": i ? t["Nguyên Nhân Bình Cảnh"] : "",
    "Mục Tiêu Đột Phá": i ? t["Mục Tiêu Đột Phá"] || o : "",
    "Kết Quả Lần Trước": t["Kết Quả Lần Trước"],
  };
}
const v = e.z
    .object({
      Tên: e.z.string().prefault(""),
      "Mô tả": e.z.string().prefault(""),
      Loại: e.z.enum(["Công Pháp", "Thần Thông", "Bí Thuật"]).prefault("Thần Thông"),
      "Phẩm Giai": e.z
        .string()
        .transform((r) => s[r] || "Phàm")
        .catch("Phàm"),
      "Độ Thuần Thục": e.z
        .string()
        .transform((r) =>
          (function (r) {
            const e = String(r ?? "")
              .trim()
              .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
            return l[e]
              ? l[e]
              : e.includes("Tiểu thành")
                ? "Thục luyện"
                : e.includes("Trung thành")
                  ? "Tinh thông"
                  : e.includes("Đại viên mãn")
                    ? "Viên mãn"
                    : "Nhập môn";
          })(r),
        )
        .catch("Nhập môn"),
      "Thời Gian Lĩnh Ngộ": e.z.coerce.number().catch(() => Date.now()),
      "Cấp Uy Lực": e.z.coerce.number().optional(),
    })
    .transform((r) => {
      if (!r["Cấp Uy Lực"] || 0 === r["Cấp Uy Lực"]) {
        const e = { "Nhập môn": 1, "Thục luyện": 2, "Tinh thông": 3, "Đại thành": 4, "Viên mãn": 5, "Hóa cảnh": 6 },
          t =
            { Phàm: 1, Hoàng: 2, Huyền: 3, Địa: 4, Thiên: 5, Tiên: 6, Thánh: 7, "Tiên Thiên": 8 }[
              r["Phẩm Giai"]
            ] || 1,
          n = e[r["Độ Thuần Thục"]] || 1;
        return { ...r, "Cấp Uy Lực": 10 * t + n };
      }
      return r;
    }),
  x = e.z
    .record(e.z.string().describe("Tên Vật Phẩm"), f)
    .prefault({})
    .transform((r) => _.pickBy(r, ({ "Số Lượng": r }) => r > 0));
function D(r, e = !1) {
  const t = r["Cấp Độ"],
    n = M(t),
    a = u[t - 1] ?? 100,
    o = {
      "Ngưỡng Đột Phá": n,
      "Giới Hạn Tuổi Thọ": a,
      "Mô Tả Cảnh Giới": j(t),
      "Trạng Thái Tuổi Thọ": `${r["Tuổi Thọ Đã Sống"]}/${a}`,
      "Trạng Thái": (function (r, e, t) {
        const n = r?.["Giai Đoạn"] || "Đang tu luyện";
        return "Đang đột phá" === n
          ? "Đang đột phá"
          : "Đang củng cố" === n
            ? "Đang củng cố"
            : "Đang áp cảnh" === n
              ? "Đang áp cảnh"
              : "Gặp bình cảnh" === n || e >= t
                ? "Thời kỳ bình cảnh"
                : "Đang tu luyện";
      })(r["Trạng Thái Tu Luyện"], r["Tu Vi"], n),
      "Tiến Độ": `${(100 * (n > 0 ? _.clamp(r["Tu Vi"] / n, 0, 1) : 0)).toFixed(1)}%`,
    };
  if (!e) return o;
  const c = (function (r) {
      const e = Math.floor((r - 1) / 4),
        t = (r - 1) % 4,
        n = Math.pow(10, e + 1),
        a = 0.2 * n * t;
      return Math.round(n + a);
    })(t),
    i = Object.values(r["Danh Sách Thần Thông"] || {}),
    s =
      c +
      (i.length > 0 ? Math.max(...i.map((r) => r["Cấp Uy Lực"] || 0)) : 0) +
      (() => {
        const e = r["Thể Chất"] || "";
        return e.includes("Thần")
          ? 500
          : e.includes("Thánh")
            ? 200
            : e.includes("Đạo")
              ? 100
              : e.includes("Linh")
                ? 50
                : 0;
      })();
  return { ...o, "Giá Trị Chiến Lực": s };
}
const B = e.z.object({
    Cấp: e.z.coerce.number().transform((r) => _.clamp(r, 1, 48)),
    Căn: e.z.string().describe("Linh Căn"),
    Chất: e.z.string().describe("Thể Chất"),
    Tuổi: e.z.string().describe("Độ Tuổi"),
    Hệ: e.z.string().describe("Trực Thuộc"),
    Pháp: e.z.string().describe("Công Pháp"),
    Khí: e.z.string().describe("Bản Mệnh Binh Khí"),
    Thông: e.z.array(e.z.string()).prefault([]),
  }),
  k = e.z
    .object({
      "Cảm Xúc Hiện Tại": e.z.string().prefault(""),
      "Nguyên Do Thái Độ": e.z.string().prefault(""),
      "Nhu Cầu Quan Hệ": e.z.string().prefault(""),
      "Cấm Kỵ Chung Sống": e.z.string().prefault(""),
      "Ước Hẹn Chưa Xong": e.z.string().prefault(""),
    })
    .prefault({}),
  A = e.z
    .object({
      "Cấp Độ": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      "Tu Vi": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Linh Căn": e.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      "Thể Chất": e.z.string().prefault("Phàm Thể"),
      "Công Pháp": e.z.string().prefault("Không"),
      "Bản Mệnh Binh Khí": e.z.string().prefault("Không"),
      "Danh Sách Thần Thông": e.z.record(e.z.string().describe("Tên Thần Thông"), v).prefault({}),
      "Linh Thạch": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Tuổi Thọ Đã Sống": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Thử đột phá": e.z.boolean().prefault(!1),
      "Trạng Thái Tu Luyện": S,
      "Độ Hảo Cảm": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, -200, 200))
        .prefault(0),
      "Quan Hệ": e.z.string().prefault("Người Lạ"),
      "Ngữ Cảnh Quan Hệ": k,
    })
    .prefault({
      "Cấp Độ": 1,
      "Tu Vi": 0,
      "Linh Căn": "Ngũ Hành Tạp Linh Căn",
      "Thể Chất": "Phàm Thể",
      "Công Pháp": "Không",
      "Bản Mệnh Binh Khí": "Không",
      "Danh Sách Thần Thông": {},
      "Linh Thạch": 0,
      "Tuổi Thọ Đã Sống": 0,
      "Thử đột phá": !1,
      "Trạng Thái Tu Luyện": { "Giai Đoạn": "Đang tu luyện", "Nguyên Nhân Bình Cảnh": "", "Mục Tiêu Đột Phá": "", "Kết Quả Lần Trước": "Không" },
      "Độ Hảo Cảm": 0,
      "Quan Hệ": "Người Lạ",
      "Ngữ Cảnh Quan Hệ": {},
    })
    .transform((r) => {
      ((r["Trạng Thái Tu Luyện"] = y(r["Trạng Thái Tu Luyện"], {
        legacyAttemptBreakthrough: r["Thử đột phá"],
        level: r["Cấp Độ"],
        cultivation: r["Tu Vi"],
      })),
        (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]));
      const e = D(r, !1);
      return { ...r, ...e };
    }),
  F = e.z.object({
    "Cấp Độ": e.z.coerce
      .number()
      .transform((r) => _.clamp(r, 1, 48))
      .prefault(1),
    "Tông Môn Trực Thuộc": e.z.string().prefault("Tán Tu"),
    "Ghi Chú": e.z.string().prefault(""),
  }),
  w = {
    "Không chiến đấu": "Không chiến đấu",
    "Hòa bình": "Không chiến đấu",
    "An toàn": "Không chiến đấu",
    "Thoát chiến": "Không chiến đấu",
    "Đối trĩ": "Đối trĩ",
    "Cảnh giới": "Đối trĩ",
    "Giằng co": "Đối trĩ",
    "Nhìn nhau": "Đối trĩ",
    "Kịch chiến": "Kịch chiến",
    "Chiến đấu": "Kịch chiến",
    "Giao chiến": "Kịch chiến",
    "Chém giết": "Kịch chiến",
    "Trọng thương": "Trọng thương",
    "Bị thương": "Trọng thương",
    "Thương nặng": "Trọng thương",
    "Sắp chết": "Sắp chết",
    "Sắp chết": "Sắp chết",
    "Nguy kịch": "Sắp chết",
    "Nguy cấp": "Sắp chết",
  },
  O = {
    "Không thương": "Không thương",
    Không: "Không thương",
    "Nguyên vẹn": "Không thương",
    "Khỏe mạnh": "Không thương",
    "Khinh thương": "Khinh thương",
    "Vết thương nhỏ": "Khinh thương",
    "Vết thương siêu nhỏ": "Khinh thương",
    "Trọng thương": "Trọng thương",
    "Thương nặng": "Trọng thương",
    "Vết thương lớn": "Trọng thương",
    "Sắp chết": "Sắp chết",
    "Sắp chết": "Sắp chết",
    "Nguy kịch": "Sắp chết",
  },
  V = {
    "Nghiền ép": "Nghiền ép",
    "Áp đảo": "Nghiền ép",
    "Miểu sát": "Nghiền ép",
    "Treo lên đánh": "Nghiền ép",
    "Ưu thế": "Ưu thế",
    "Chiếm ưu": "Ưu thế",
    "Thượng phong": "Ưu thế",
    "Có lợi": "Ưu thế",
    "Kẻ tám lạng người nửa cân": "Kẻ tám lạng người nửa cân",
    "Thế cân bằng": "Kẻ tám lạng người nửa cân",
    Hòa: "Kẻ tám lạng người nửa cân",
    "Tương đương": "Kẻ tám lạng người nửa cân",
    "Kỳ phùng địch thủ": "Kẻ tám lạng người nửa cân",
    "Liệt thế": "Liệt thế",
    "Hạ phong": "Liệt thế",
    "Bất lợi": "Liệt thế",
    "Lạc hậu": "Liệt thế",
    "Tuyệt vọng": "Tuyệt vọng",
    "Chắc chắn chết": "Tuyệt vọng",
    "Bị nghiền ép": "Tuyệt vọng",
    "Vô vọng": "Tuyệt vọng",
  },
  Z = {
    "Nguyên vẹn": "Nguyên vẹn",
    "Không thương": "Nguyên vẹn",
    "Khỏe mạnh": "Nguyên vẹn",
    "Toàn thịnh": "Nguyên vẹn",
    "Khinh thương": "Khinh thương",
    "Vết thương nhỏ": "Khinh thương",
    "Vết thương siêu nhỏ": "Khinh thương",
    "Trọng thương": "Trọng thương",
    "Thương nặng": "Trọng thương",
    "Vết thương lớn": "Trọng thương",
    "Sắp chết": "Sắp chết",
    "Sắp chết": "Sắp chết",
    "Nguy kịch": "Sắp chết",
    "Đã chết": "Đã chết",
    "Tử vong": "Đã chết",
    "Đánh giết": "Đã chết",
    "Trận vong": "Đã chết",
  },
  C = {
    Không: "Không",
    "": "Không",
    "Không kiếp": "Không",
    "Lôi kiếp": "Lôi kiếp",
    "Thiên lôi": "Lôi kiếp",
    Lôi: "Lôi kiếp",
    "Tâm kiếp": "Tâm kiếp",
    "Tâm ma": "Tâm kiếp",
    "Ma kiếp": "Tâm kiếp",
    "Thiên kiếp": "Thiên kiếp",
    "Đại kiếp": "Thiên kiếp",
    "Tình kiếp": "Tình kiếp",
    "Tình quan": "Tình kiếp",
    "Nhân quả kiếp": "Nhân quả kiếp",
    "Nhân quả": "Nhân quả kiếp",
    "Hồng trần kiếp": "Hồng trần kiếp",
    "Hồng trần": "Hồng trần kiếp",
    "Luân hồi kiếp": "Luân hồi kiếp",
    "Luân hồi": "Luân hồi kiếp",
  },
  P = {
    Không: "Không",
    "Không kiếp": "Không",
    "Tiểu kiếp": "Tiểu kiếp",
    Tiểu: "Tiểu kiếp",
    "Sơ cấp": "Tiểu kiếp",
    "Trung kiếp": "Trung kiếp",
    Trung: "Trung kiếp",
    "Trung cấp": "Trung kiếp",
    "Đại kiếp": "Đại kiếp",
    Đại: "Đại kiếp",
    "Cao cấp": "Đại kiếp",
    "Thiên phạt": "Thiên phạt",
    Thiên: "Thiên phạt",
    Cực: "Thiên phạt",
    "Thiên đạo": "Thiên phạt",
  },
  U = {
    Không: "Không",
    "": "Không",
    "Chưa độ kiếp": "Không",
    "Thành công": "Thành công",
    "Thông qua": "Thành công",
    "Độ qua": "Thành công",
    "Thất bại": "Thất bại",
    "Chưa qua": "Thất bại",
    "Thất bại": "Thất bại",
  },
  q = e.z
    .object({
      "Đang Chiến Đấu": e.z.boolean().prefault(!1),
      "Trạng Thái Hiện Tại": e.z
        .string()
        .transform((r) => w[r] || "Không chiến đấu")
        .prefault("Không chiến đấu"),
      "Giá Trị Linh Lực": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      "Cấp Độ Thương Thế": e.z
        .string()
        .transform((r) => O[r] || "Không thương")
        .prefault("Không thương"),
      "Ác Chủ Bài Đã Dùng": e.z.array(e.z.string()).prefault([]),
      "Hiệp Chiến Đấu": e.z.coerce.number().prefault(0),
    })
    .prefault({
      "Đang Chiến Đấu": !1,
      "Trạng Thái Hiện Tại": "Không chiến đấu",
      "Giá Trị Linh Lực": 100,
      "Cấp Độ Thương Thế": "Không thương",
      "Ác Chủ Bài Đã Dùng": [],
      "Hiệp Chiến Đấu": 0,
    }),
  I = e.z.object({
    Tên: e.z.string().prefault("Kẻ Địch Không Xác Định"),
    "Cảnh Giới": e.z.string().prefault("Không Xác Định"),
    "Đánh Giá Chiến Lực": e.z
      .string()
      .transform((r) => V[r] || "Kẻ tám lạng người nửa cân")
      .prefault("Kẻ tám lạng người nửa cân"),
    "Trạng Thái": e.z
      .string()
      .transform((r) => Z[r] || "Nguyên vẹn")
      .prefault("Nguyên vẹn"),
    "Đặc Điểm": e.z.string().prefault(""),
  }),
  E = e.z
    .object({
      "Đang Độ Kiếp": e.z.boolean().prefault(!1),
      "Loại Thiên Kiếp": e.z
        .string()
        .transform((r) => C[r] || "Không")
        .prefault("Không"),
      "Cấp Độ Thiên Kiếp": e.z
        .string()
        .transform((r) => P[r] || "Không")
        .prefault("Không"),
      "Giai Đoạn Hiện Tại": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      "Tổng Số Giai Đoạn": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      "Khả Năng Chịu Đựng": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      "Hộ Đạo Đã Dùng": e.z.array(e.z.string()).prefault([]),
      "Mô Tả Thiên Kiếp": e.z.string().prefault(""),
      "Nguyên Nhân Kích Hoạt": e.z.string().prefault(""),
      "Kết Quả Độ Kiếp Lần Trước": e.z
        .string()
        .transform((r) => U[r] || "Không")
        .prefault("Không"),
      "Thời Gian Hồi Độ Kiếp": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Ghi Chép Hình Phạt Thất Bại": e.z.string().prefault(""),
    })
    .prefault({
      "Đang Độ Kiếp": !1,
      "Loại Thiên Kiếp": "Không",
      "Cấp Độ Thiên Kiếp": "Không",
      "Giai Đoạn Hiện Tại": 0,
      "Tổng Số Giai Đoạn": 0,
      "Khả Năng Chịu Đựng": 100,
      "Hộ Đạo Đã Dùng": [],
      "Mô Tả Thiên Kiếp": "",
      "Nguyên Nhân Kích Hoạt": "",
      "Kết Quả Độ Kiếp Lần Trước": "Không",
      "Thời Gian Hồi Độ Kiếp": 0,
      "Ghi Chép Hình Phạt Thất Bại": "",
    })
    .transform((r) =>
      r["Đang Độ Kiếp"]
        ? {
            ...r,
            "Cấp Độ Thiên Kiếp": "Không" === r["Cấp Độ Thiên Kiếp"] ? "Tiểu kiếp" : r["Cấp Độ Thiên Kiếp"],
            "Giai Đoạn Hiện Tại": _.clamp(r["Giai Đoạn Hiện Tại"], 0, 9),
            "Tổng Số Giai Đoạn": _.clamp(Math.max(r["Tổng Số Giai Đoạn"] || 3, r["Giai Đoạn Hiện Tại"], 1), 1, 9),
          }
        : {
            ...r,
            "Loại Thiên Kiếp": "Không",
            "Cấp Độ Thiên Kiếp": "Không",
            "Giai Đoạn Hiện Tại": 0,
            "Tổng Số Giai Đoạn": 0,
            "Mô Tả Thiên Kiếp": "",
            "Nguyên Nhân Kích Hoạt": "",
          },
    ),
  G = e.z
    .object({
      "Khu Vực Hiện Tại": e.z.string().prefault("Vùng Đất Không Xác Định"),
      "Tầng Cấp Trực Thuộc": e.z.string().prefault("Địa Tầng"),
      "Mô Tả Môi Trường": e.z.string().prefault(""),
      "Độ Nguy Hiểm": e.z.coerce.number().prefault(10),
      "Lối Đi Khả Dụng": e.z.array(e.z.string()).prefault([]),
      "Thông Tin Điều Hướng": e.z.string().prefault(""),
    })
    .prefault({
      "Khu Vực Hiện Tại": "Vùng Đất Không Xác Định",
      "Tầng Cấp Trực Thuộc": "Địa Tầng",
      "Mô Tả Môi Trường": "",
      "Độ Nguy Hiểm": 10,
      "Lối Đi Khả Dụng": [],
      "Thông Tin Điều Hướng": "",
    }),
  H = e.z
    .object({
      "Họ Tên": e.z.string().prefault("Vô Danh Thị"),
      "Tông Môn": e.z.string().prefault("Tán Tu"),
      "Xuất Thân": e.z.string().prefault("Phàm Nhân"),
    })
    .prefault({ "Họ Tên": "Vô Danh Thị", "Tông Môn": "Tán Tu", "Xuất Thân": "Phàm Nhân" }),
  J = e.z
    .object({
      "Cấp Độ": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      "Tu Vi": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Linh Căn": e.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      "Thể Chất": e.z.string().prefault("Phàm Thể"),
      "Công Pháp": e.z.string().prefault("Không"),
      "Bản Mệnh Binh Khí": e.z.string().prefault("Không"),
      "Danh Sách Thần Thông": e.z.record(e.z.string().describe("Tên Thần Thông"), v).prefault({}),
      "Linh Thạch": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Tuổi Thọ Đã Sống": e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Thử đột phá": e.z.boolean().prefault(!1),
      "Trạng Thái Tu Luyện": S,
      "Hành Tung": G,
      "Thân Phận": H,
      "Túi Đồ": x,
      "Pháp Bảo": x,
      "Túi Tạp Vật": x,
      "Trạng Thái Chiến Đấu": q,
      "Kẻ Địch Hiện Tại": e.z.array(I).prefault([]),
      "Trạng Thái Độ Kiếp": E,
    })
    .prefault({
      "Cấp Độ": 1,
      "Tu Vi": 0,
      "Linh Căn": "Ngũ Hành Tạp Linh Căn",
      "Thể Chất": "Phàm Thể",
      "Công Pháp": "Không",
      "Bản Mệnh Binh Khí": "Không",
      "Danh Sách Thần Thông": {},
      "Linh Thạch": 0,
      "Tuổi Thọ Đã Sống": 0,
      "Thử đột phá": !1,
      "Trạng Thái Tu Luyện": { "Giai Đoạn": "Đang tu luyện", "Nguyên Nhân Bình Cảnh": "", "Mục Tiêu Đột Phá": "", "Kết Quả Lần Trước": "Không" },
      "Hành Tung": {
        "Khu Vực Hiện Tại": "Vùng Đất Không Xác Định",
        "Tầng Cấp Trực Thuộc": "Địa Tầng",
        "Mô Tả Môi Trường": "",
        "Độ Nguy Hiểm": 10,
        "Lối Đi Khả Dụng": [],
        "Thông Tin Điều Hướng": "",
      },
      "Thân Phận": { "Họ Tên": "Vô Danh Thị", "Tông Môn": "Tán Tu", "Xuất Thân": "Phàm Nhân" },
      "Túi Đồ": {},
      "Pháp Bảo": {},
      "Túi Tạp Vật": {},
      "Trạng Thái Chiến Đấu": {
        "Đang Chiến Đấu": !1,
        "Trạng Thái Hiện Tại": "Không chiến đấu",
        "Giá Trị Linh Lực": 100,
        "Cấp Độ Thương Thế": "Không thương",
        "Ác Chủ Bài Đã Dùng": [],
        "Hiệp Chiến Đấu": 0,
      },
      "Kẻ Địch Hiện Tại": [],
      "Trạng Thái Độ Kiếp": {
        "Đang Độ Kiếp": !1,
        "Loại Thiên Kiếp": "Không",
        "Cấp Độ Thiên Kiếp": "Không",
        "Giai Đoạn Hiện Tại": 0,
        "Tổng Số Giai Đoạn": 0,
        "Khả Năng Chịu Đựng": 100,
        "Hộ Đạo Đã Dùng": [],
        "Mô Tả Thiên Kiếp": "",
        "Nguyên Nhân Kích Hoạt": "",
        "Kết Quả Độ Kiếp Lần Trước": "Không",
        "Thời Gian Hồi Độ Kiếp": 0,
        "Ghi Chép Hình Phạt Thất Bại": "",
      },
    })
    .transform((r) => {
      const e = b(r["Linh Thạch"], r["Túi Đồ"], r["Túi Tạp Vật"]),
        [t, n] = e.inventories;
      ((r["Linh Thạch"] = e.spiritStone),
        (r["Túi Đồ"] = t ?? {}),
        (r["Túi Tạp Vật"] = n ?? {}),
        (r["Trạng Thái Tu Luyện"] = y(r["Trạng Thái Tu Luyện"], {
          legacyAttemptBreakthrough: r["Thử đột phá"],
          level: r["Cấp Độ"],
          cultivation: r["Tu Vi"],
        })),
        (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]));
      const a = D(r, !0);
      return { ...r, ...a };
    }),
  K = {
    "Đang tiến hành": "Đang tiến hành",
    "Tiến hành": "Đang tiến hành",
    "Đang xử lý": "Đang tiến hành",
    "Chưa hoàn thành": "Đang tiến hành",
    "Chờ hoàn thành": "Đang tiến hành",
    "Chưa bắt đầu": "Đang tiến hành",
    "Đã nhận": "Đang tiến hành",
    Nhận: "Đang tiến hành",
    active: "Đang tiến hành",
    "Đã hoàn thành": "Đã hoàn thành",
    "Hoàn thành": "Đã hoàn thành",
    "Hoàn thành": "Đã hoàn thành",
    "Đã đạt thành": "Đã hoàn thành",
    "Đạt thành": "Đã hoàn thành",
    "Đã kết thúc": "Đã hoàn thành",
    "Kết thúc": "Đã hoàn thành",
    done: "Đã hoàn thành",
    complete: "Đã hoàn thành",
    completed: "Đã hoàn thành",
    "Đã thất bại": "Đã thất bại",
    "Thất bại": "Đã thất bại",
    "Thất bại": "Đã thất bại",
    "Thất bại": "Đã thất bại",
    "Hủy bỏ": "Đã thất bại",
    "Chấm dứt": "Đã thất bại",
    "Từ bỏ": "Đã thất bại",
    "Thất bại do quá giờ": "Đã thất bại",
    failed: "Đã thất bại",
    fail: "Đã thất bại",
  },
  L = {
    "Tuyến chính": "Tuyến chính",
    "Nhiệm vụ chính": "Tuyến chính",
    "Nhiệm vụ tuyến chính": "Tuyến chính",
    main: "Tuyến chính",
    "Tuyến phụ": "Tuyến phụ",
    "Nhiệm vụ phụ": "Tuyến phụ",
    side: "Tuyến phụ",
    sidequest: "Tuyến phụ",
    "Mỗi ngày": "Mỗi ngày",
    "Thường ngày": "Mỗi ngày",
    "Nhiệm vụ mỗi ngày": "Mỗi ngày",
    daily: "Mỗi ngày",
    "Lâm nguy thụ mệnh": "Lâm nguy thụ mệnh",
    "Khẩn cấp": "Lâm nguy thụ mệnh",
    "Nhiệm vụ khẩn cấp": "Lâm nguy thụ mệnh",
    urgent: "Lâm nguy thụ mệnh",
    "Khám phá bí cảnh": "Khám phá bí cảnh",
    "Bí cảnh": "Khám phá bí cảnh",
    "Khám phá": "Khám phá bí cảnh",
    "Nhiệm vụ bí cảnh": "Khám phá bí cảnh",
    dungeon: "Khám phá bí cảnh",
    "Tu luyện": "Tuyến phụ",
    "Nhiệm vụ tu luyện": "Tuyến phụ",
  },
  Q = e.z.object({
    Tên: e.z.string().prefault(""),
    Loại: e.z
      .string()
      .transform((r) => L[String(r).trim()] || "Tuyến phụ")
      .prefault("Tuyến chính"),
    "Mục tiêu": e.z.string().prefault(""),
    "Trạng Thái": e.z
      .string()
      .transform((r) => K[String(r).trim()] || "Đang tiến hành")
      .prefault("Đang tiến hành"),
    "Thông Tin Bí Cảnh": e.z
      .object({
        Vực: e.z
          .enum([
            "Thiên Tầng",
            "Thần Châu",
            "Đông Thương",
            "Nam Viêm",
            "Tây Canh",
            "Bắc Minh",
            "Hạ Tầng",
            "Tứ Hải",
          ])
          .optional(),
        Nguy: e.z.coerce
          .number()
          .transform((r) => _.clamp(r, 0, 100))
          .optional(),
        Đặc: e.z.string().optional(),
        Thưởng: e.z
          .union([
            e.z.array(e.z.string()),
            e.z.string().transform((r) => (r ? [r] : [])),
          ])
          .prefault([]),
        Hạn: e.z.string().optional(),
      })
      .optional(),
    "Thời Gian Tạo": e.z
      .union([e.z.coerce.number(), e.z.string().transform(() => Date.now())])
      .prefault(() => Date.now()),
  }),
  R = e.z.object({
    "Giá trị": e.z.coerce
      .number()
      .transform((r) => _.clamp(r, -100, 100))
      .prefault(0),
    "Quan Hệ": e.z.string().prefault("Xa lạ"),
    "Thời Gian Cập Nhật": e.z.coerce.number().prefault(() => Date.now()),
  }),
  T = e.z
    .record(e.z.string().describe("Tên Thế Lực"), R)
    .prefault({})
    .transform((r) =>
      _(r)
        .mapValues((r) => {
          const e = r["Giá trị"];
          let t;
          t =
            e >= 80
              ? "Đồng minh"
              : e >= 60
                ? "Thân thiện"
                : e >= 30
                  ? "Hữu hảo"
                  : e >= 10
                    ? "Trung lập thiên vị"
                    : e >= -10
                      ? "Trung lập"
                      : e >= -30
                        ? "Trung lập thiên ác"
                        : e >= -60
                          ? "Địch đối"
                          : e >= -80
                            ? "Cừu hận"
                            : "Không chết không ngừng";
          const n = r["Quan Hệ"] && "Xa lạ" !== r["Quan Hệ"] ? r["Quan Hệ"] : t;
          return { ...r, "Quan Hệ": n };
        })
        .value(),
    ),
  W = {
    "Khám phá": "Khám phá",
    "Nhiệm Vụ": "Nhiệm Vụ",
    "Giao dịch": "Giao dịch",
    "Kết giao": "Kết giao",
    "Tranh đoạt": "Tranh đoạt",
    "Tu luyện": "Tu luyện",
    "Hồng nhan": "Hồng nhan",
    "Ngẫu nhiên": "Ngẫu nhiên",
    "Hành động": "Khám phá",
    "Mạo hiểm": "Khám phá",
    "Thường ngày": "Nhiệm Vụ",
    "Tương tác thường ngày": "Hồng nhan",
    "Chiến đấu": "Tranh đoạt",
    "Thách thức": "Tranh đoạt",
    "Xã giao": "Kết giao",
    "Tương tác": "Kết giao",
    "Mời mọc": "Kết giao",
    "Gặp gỡ": "Kết giao",
    "Cơ duyên": "Khám phá",
    "Cơ hội": "Khám phá",
    "Kỳ ngộ": "Khám phá",
    "Bí cảnh": "Khám phá",
    "Tầm bảo": "Khám phá",
    "Thu mua": "Giao dịch",
    "Đổi đồ": "Giao dịch",
    "Mua bán": "Giao dịch",
    "Ủy thác": "Nhiệm Vụ",
    "Treo thưởng": "Nhiệm Vụ",
    "Lâm nguy thụ mệnh": "Nhiệm Vụ",
    "Tuyến phụ": "Nhiệm Vụ",
    "Tuyến chính": "Nhiệm Vụ",
    "Song tu": "Hồng nhan",
    "Thân mật": "Hồng nhan",
    "Trêu ghẹo": "Hồng nhan",
    random: "Ngẫu nhiên",
  },
  X = [
    {
      type: "Hồng nhan",
      pattern:
        /Hồng nhan|Giai nhân|Đạo lữ|Song tu|Ôn tình|Ở một mình|Ôm ấp|Tương thủ|Trêu ghẹo|Triền miên|Ngủ chung|Đồng miên|Vong Ưu|Thính Vũ|Thanh Huyền|Vãn Đường|Vân Thường|Mộng Yểu Linh|Sóc Ly Diên|A Diên|Huyết Thủ Phi Diên|Sóc Vọng Thư|Xích Nguyệt Nữ Đế|U Ảnh Tông Chủ|Ngu Tịch|Ngu Nhan|Ngu Tịch Nhan/,
    },
    {
      type: "Tu luyện",
      pattern:
        /Tu luyện|Bế quan|Đả tọa|Thổ nạp|Xung quan|Phá cảnh|Đột phá|Áp cảnh|Củng cố|Ngộ đạo|Độ Kiếp|Căn cơ|Đan dược|Linh trận|Tham ngộ/,
    },
    {
      type: "Giao dịch",
      pattern: /Phường thị|Đổi đồ|Giao dịch|Mua bán|Thu mua|Bán đấu giá|Tiệm đan dược|Thương hội|Bổ sung|Bán ra|Thu mua|Trao đổi/,
    },
    {
      type: "Tranh đoạt",
      pattern:
        /Tranh đoạt|Đoạt lấy|Cướp đoạt|Chặn giết|Đấu pháp|Chém giết|Vây công|Truy sát|Nghênh chiến|Cường địch|Ma tu|Xung đột|Thủ lôi|Tỉ thí/,
    },
    {
      type: "Nhiệm Vụ",
      pattern:
        /Nhiệm Vụ|Ủy thác|Treo thưởng|Cầu viện|Hộ tống|Điều tra|Truy xét|Giải cứu|Lâm nguy|Cấp báo|Thu dọn|Thu xếp|Đến hẹn|Phó mệnh/,
    },
    {
      type: "Kết giao",
      pattern: /Kết giao|Bái phỏng|Mời mọc|Gặp mặt|Kết giao|Lôi kéo|Thăm dò|Xin gặp|Thăm bạn|Đến dự tiệc|Luận đạo|Cùng dạo/,
    },
    { type: "Ngẫu nhiên", pattern: /Tùy duyên|Ngẫu nhiên|Thử thời vận|Nghe thiên mệnh/ },
  ];
function Y(r, e) {
  const t = W[r];
  if (t) return t;
  const n = Object.values(e)
    .map((r) =>
      (function (r) {
        return String(r ?? "").trim();
      })(r),
    )
    .filter(Boolean)
    .join("｜");
  for (const r of X) if (r.pattern.test(n)) return r.type;
  return "Khám phá";
}
const rr = e.z
    .object({
      Tên: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Nguồn gốc": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      Loại: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault("Khám phá"),
      "Mô tả": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Kỳ Vọng Đền Đáp": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Đánh Giá Rủi Ro": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Thời Hạn": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      "Sự Kiện Liên Quan": e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      "Độ Ưu Tiên": e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 5))
        .prefault(3),
    })
    .transform((r) => {
      const e = {
        Tên: r.Tên,
        "Nguồn gốc": r["Nguồn gốc"],
        "Mô tả": r["Mô tả"],
        "Kỳ Vọng Đền Đáp": r["Kỳ Vọng Đền Đáp"],
        "Đánh Giá Rủi Ro": r["Đánh Giá Rủi Ro"],
        "Thời Hạn": r["Thời Hạn"] ?? "",
        "Sự Kiện Liên Quan": r["Sự Kiện Liên Quan"] ?? "",
      };
      return { ...r, Loại: Y(r.Loại, e) };
    }),
  er = e.z
    .object({
      "Bật Nhắc Nhở Hành Động": e.z.boolean().prefault(!0),
      "Phiên Bản Hệ Thống Tu Luyện": e.z.coerce.number().prefault(1),
      "_Chữ ký ghi đè trạng thái thủ công": e.z.string().prefault(""),
    })
    .prefault({}),
  tr =
    (e.z.object({ "Bật Nhắc Nhở Hành Động": e.z.boolean().prefault(!0) }).prefault({}),
    {
      "Suôn sẻ": "Suôn sẻ",
      "Trắc trở": "Trắc trở",
      "Ổn định": "Ổn định",
      "Thuận lợi": "Suôn sẻ",
      "Thụ trở": "Trắc trở",
      "Bình thường": "Ổn định",
    }),
  nr = e.z
    .object({
      "Thiên đạo cảm ứng": e.z
        .string()
        .transform((r) => tr[String(r).trim()] || "Ổn định")
        .prefault("Ổn định"),
      "Cảnh báo áp lực môi trường cao": e.z.string().prefault("Thiên đạo vận chuyển bình thường，Vạn vật tuần hoàn。"),
      "_Dữ liệu nội bộ hệ thống độ khó": e.z
        .object({
          "Số Phiên Bản": e.z.coerce.number().prefault(1),
          "Bảo vệ cân bằng": e.z
            .object({
              "Bộ đếm liên tục trắc trở": e.z.coerce.number().prefault(0),
              "Ngưỡng kích hoạt": e.z.coerce.number().prefault(3),
              "Số hiệp còn hiệu lực": e.z.coerce.number().prefault(0),
              "Số hiệp hồi chiêu": e.z.coerce.number().prefault(0),
            })
            .prefault({}),
          "Chiến lược động": e.z
            .object({
              "Giới hạn thay đổi mỗi hiệp": e.z.coerce.number().prefault(0.15),
              "Tốc độ giảm tự nhiên": e.z.coerce.number().prefault(0.03),
              "Hiệp hồi chiêu tăng trưởng": e.z.coerce.number().prefault(2),
            })
            .prefault({}),
          "Snapshot độ khó": e.z
            .object({
              "Hệ số hiệp cơ bản": e.z.coerce.number().prefault(1),
              "Hệ số hiệp cuối cùng": e.z.coerce.number().prefault(1),
              "Nguồn phân tầng": e.z
                .object({
                  "Tầng tường thuật thế giới": e.z.coerce.number().prefault(1),
                  "Tầng sở thích người chơi": e.z.coerce.number().prefault(1),
                  "Tầng trạng thái ngắn hạn": e.z.coerce.number().prefault(1),
                })
                .prefault({}),
            })
            .prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
  ar = e.z.object({
    Địa: e.z.string().describe("Nơi ở"),
    Đặc: e.z.string().describe("Đặc điểm cốt lõi"),
    Lực: e.z.string().describe("Chiến lực cao nhất"),
    Doanh: e.z.enum(["Chính", "Ma", "Trung"]),
    Mô: e.z.enum(["Siêu đại", "Đại", "Tiểu", "Vi", "Đặc"]),
  }),
  or = e.z.object({
    Giai: e.z
      .string()
      .transform((r) => s[r] || "Phàm")
      .catch("Phàm"),
    Tính: e.z.string().describe("Thuộc tính"),
    Hiệu: e.z.string().describe("Hiệu quả"),
  }),
  cr = e.z
    .object({
      Giai: e.z.enum([
        "Phàm khí",
        "Pháp khí",
        "Linh khí",
        "Pháp Bảo",
        "Linh bảo",
        "Tiên khí",
        "Thánh khí",
        "Đạo khí",
        "Bản mệnh",
      ]),
      Loại: e.z.string().describe("Loại"),
      "Đặc tính bản mệnh": e.z.string().optional().describe("Đặc tính riêng pháp bảo bản mệnh"),
      "Khí linh": e.z.string().optional().describe("Tên Khí Linh"),
    })
    .transform((r) => ({
      ...r,
      Đặc:
        "Bản mệnh" === r.Giai
          ? "Chí tôn"
          : "Đạo khí" === r.Giai
            ? "Siêu phàm"
            : "Thánh khí" === r.Giai
              ? "Cực phẩm"
              : "Tiên khí" === r.Giai
                ? "Đỉnh cấp"
                : "Linh bảo" === r.Giai
                  ? "Cường"
                  : "Pháp Bảo" === r.Giai
                    ? "Trung"
                    : "Phổ thông",
    })),
  ir = e.z.object({
    Vực: e.z.enum([
      "Thiên Tầng",
      "Thần Châu",
      "Đông Thương",
      "Nam Viêm",
      "Tây Canh",
      "Bắc Minh",
      "Hạ Tầng",
      "Tứ Hải",
    ]),
    Loại: e.z.enum(["Bí cảnh", "Thành trấn", "Tông Môn", "Cấm địa", "Di tích", "Địa hình"]),
    Nguy: e.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
    Đặc: e.z.string().describe("Đặc Điểm"),
    Tư: e.z
      .union([
        e.z.array(e.z.string()),
        e.z.string().transform((r) => (r ? [r] : [])),
      ])
      .prefault([]),
  }),
  ur = e.z
    .object({
      Chất: e.z.enum(["Liệt", "Hạ", "Trung", "Thượng", "Cực", "Thiên", "Dị"]),
      Tính: e.z.string().describe("Thuộc tính"),
      Hi: e.z.enum(["Thường", "Thiểu", "Hãn", "Hi", "Truyền"]),
    })
    .transform((r) => ({
      ...r,
      Tốc:
        {
          Liệt: "0.3Bội",
          Hạ: "0.5Bội",
          Trung: "1Bội",
          Thượng: "2Bội",
          Cực: "3Bội",
          Thiên: "5Bội",
          Dị: "4Bội",
        }[r.Chất] || "1Bội",
      Đặc:
        "Thiên" === r.Chất
          ? "Đơn hệ đỉnh cấp"
          : "Dị" === r.Chất
            ? "Biến dị hi hữu"
            : "Cực" === r.Chất
              ? "Song hệ ưu tú"
              : "Thông thường",
    })),
  sr = e.z
    .object({
      Chất: e.z.enum(["Phàm", "Linh", "Đạo", "Thánh", "Thần"]),
      Đặc: e.z.string().describe("Đặc tính"),
      Hi: e.z.enum(["Thường", "Thiểu", "Hãn", "Hi", "Truyền"]),
    })
    .transform((r) => ({
      ...r,
      Ưu:
        "Thần" === r.Chất
          ? "Chí cao"
          : "Thánh" === r.Chất
            ? "Cực cường"
            : "Đạo" === r.Chất
              ? "Cường"
              : "Linh" === r.Chất
                ? "Trung"
                : "Không",
    })),
  lr = [
    { canonical: "Ngu Tịch Nhan", aliases: ["Ngu Tịch", "Ngu Nhan"] },
    { canonical: "Sóc Ly Diên", aliases: ["A Diên", "Huyết Thủ Phi Diên"] },
    { canonical: "Sóc Vọng Thư", aliases: ["Xích Nguyệt Nữ Đế", "U Ảnh Tông Chủ"] },
  ],
  fr = A.parse({}),
  pr = /[\u3400-\u4dbf\u4e00-\u9fff]/;
function mr(r, e, t) {
  const n = String(r ?? "").trim();
  return n && n !== t ? n : e;
}
function zr(r) {
  const e = String(r ?? "").trim();
  if (!e) return "";
  const t =
      e
        .replace(
          /^(?:[A-Za-z][A-Za-z0-9]*)(?:[._:\-/\\\s]+[A-Za-z0-9]+)*[._:\-/\\\s]*/u,
          "",
        )
        .trim() || e,
    n = t.search(pr);
  return n < 0 ? "" : t.slice(n).trim();
}
function gr(r, e) {
  if (!r) return _.cloneDeep(e);
  const t = _.cloneDeep(r),
    n = _.cloneDeep(fr["Ngữ Cảnh Quan Hệ"]);
  ((t["Cấp Độ"] = Math.max(Number(r["Cấp Độ"] ?? fr["Cấp Độ"]), Number(e["Cấp Độ"] ?? fr["Cấp Độ"]))),
    (t["Tu Vi"] = Math.max(Number(r["Tu Vi"] ?? fr["Tu Vi"]), Number(e["Tu Vi"] ?? fr["Tu Vi"]))),
    (t["Linh Thạch"] = Math.max(Number(r["Linh Thạch"] ?? fr["Linh Thạch"]), Number(e["Linh Thạch"] ?? fr["Linh Thạch"]))),
    (t["Tuổi Thọ Đã Sống"] = Math.max(
      Number(r["Tuổi Thọ Đã Sống"] ?? fr["Tuổi Thọ Đã Sống"]),
      Number(e["Tuổi Thọ Đã Sống"] ?? fr["Tuổi Thọ Đã Sống"]),
    )),
    (t["Thử đột phá"] = Boolean(r["Thử đột phá"] || e["Thử đột phá"])));
  const a = _.cloneDeep(fr["Trạng Thái Tu Luyện"]);
  return (
    (t["Trạng Thái Tu Luyện"] = y(
      {
        "Giai Đoạn": mr(e["Trạng Thái Tu Luyện"]?.["Giai Đoạn"], String(r["Trạng Thái Tu Luyện"]?.["Giai Đoạn"] ?? a["Giai Đoạn"]), a["Giai Đoạn"]),
        "Nguyên Nhân Bình Cảnh": mr(
          e["Trạng Thái Tu Luyện"]?.["Nguyên Nhân Bình Cảnh"],
          String(r["Trạng Thái Tu Luyện"]?.["Nguyên Nhân Bình Cảnh"] ?? a["Nguyên Nhân Bình Cảnh"]),
          a["Nguyên Nhân Bình Cảnh"],
        ),
        "Mục Tiêu Đột Phá": mr(
          e["Trạng Thái Tu Luyện"]?.["Mục Tiêu Đột Phá"],
          String(r["Trạng Thái Tu Luyện"]?.["Mục Tiêu Đột Phá"] ?? a["Mục Tiêu Đột Phá"]),
          a["Mục Tiêu Đột Phá"],
        ),
        "Kết Quả Lần Trước": mr(
          e["Trạng Thái Tu Luyện"]?.["Kết Quả Lần Trước"],
          String(r["Trạng Thái Tu Luyện"]?.["Kết Quả Lần Trước"] ?? a["Kết Quả Lần Trước"]),
          a["Kết Quả Lần Trước"],
        ),
      },
      {
        legacyAttemptBreakthrough: t["Thử đột phá"],
        level: t["Cấp Độ"],
        cultivation: t["Tu Vi"],
      },
    )),
    (t["Độ Hảo Cảm"] = Number.isFinite(Number(e["Độ Hảo Cảm"]))
      ? Number(e["Độ Hảo Cảm"])
      : Number(r["Độ Hảo Cảm"] ?? fr["Độ Hảo Cảm"])),
    (t["Quan Hệ"] = mr(e["Quan Hệ"], String(r["Quan Hệ"] ?? fr["Quan Hệ"]), fr["Quan Hệ"])),
    (t["Ngữ Cảnh Quan Hệ"] = {
      "Cảm Xúc Hiện Tại": mr(
        e["Ngữ Cảnh Quan Hệ"]?.["Cảm Xúc Hiện Tại"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Cảm Xúc Hiện Tại"] ?? n["Cảm Xúc Hiện Tại"]),
        n["Cảm Xúc Hiện Tại"],
      ),
      "Nguyên Do Thái Độ": mr(
        e["Ngữ Cảnh Quan Hệ"]?.["Nguyên Do Thái Độ"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Nguyên Do Thái Độ"] ?? n["Nguyên Do Thái Độ"]),
        n["Nguyên Do Thái Độ"],
      ),
      "Nhu Cầu Quan Hệ": mr(
        e["Ngữ Cảnh Quan Hệ"]?.["Nhu Cầu Quan Hệ"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Nhu Cầu Quan Hệ"] ?? n["Nhu Cầu Quan Hệ"]),
        n["Nhu Cầu Quan Hệ"],
      ),
      "Cấm Kỵ Chung Sống": mr(
        e["Ngữ Cảnh Quan Hệ"]?.["Cấm Kỵ Chung Sống"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Cấm Kỵ Chung Sống"] ?? n["Cấm Kỵ Chung Sống"]),
        n["Cấm Kỵ Chung Sống"],
      ),
      "Ước Hẹn Chưa Xong": mr(
        e["Ngữ Cảnh Quan Hệ"]?.["Ước Hẹn Chưa Xong"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Ước Hẹn Chưa Xong"] ?? n["Ước Hẹn Chưa Xong"]),
        n["Ước Hẹn Chưa Xong"],
      ),
    }),
    String(r["Linh Căn"] ?? fr["Linh Căn"]) === fr["Linh Căn"] &&
      String(e["Linh Căn"] ?? "").trim() &&
      (t["Linh Căn"] = e["Linh Căn"]),
    String(r["Thể Chất"] ?? fr["Thể Chất"]) === fr["Thể Chất"] &&
      String(e["Thể Chất"] ?? "").trim() &&
      (t["Thể Chất"] = e["Thể Chất"]),
    String(r["Công Pháp"] ?? fr["Công Pháp"]) === fr["Công Pháp"] &&
      String(e["Công Pháp"] ?? "").trim() &&
      (t["Công Pháp"] = e["Công Pháp"]),
    String(r["Bản Mệnh Binh Khí"] ?? fr["Bản Mệnh Binh Khí"]) === fr["Bản Mệnh Binh Khí"] &&
      String(e["Bản Mệnh Binh Khí"] ?? "").trim() &&
      (t["Bản Mệnh Binh Khí"] = e["Bản Mệnh Binh Khí"]),
    (t["Danh Sách Thần Thông"] = { ...(r["Danh Sách Thần Thông"] ?? {}), ...(e["Danh Sách Thần Thông"] ?? {}) }),
    t
  );
}
function br(r, e) {
  return r
    ? {
        Cấp: Math.max(Number(r.Cấp ?? 1), Number(e.Cấp ?? 1)),
        Căn: mr(e.Căn, String(r.Căn ?? ""), ""),
        Chất: mr(e.Chất, String(r.Chất ?? ""), ""),
        Tuổi: mr(e.Tuổi, String(r.Tuổi ?? ""), ""),
        Hệ: mr(e.Hệ, String(r.Hệ ?? ""), ""),
        Pháp: mr(e.Pháp, String(r.Pháp ?? ""), ""),
        Khí: mr(e.Khí, String(r.Khí ?? ""), ""),
        Thông: Array.from(
          new Set(
            [...(r.Thông ?? []), ...(e.Thông ?? [])]
              .map((r) => String(r).trim())
              .filter(Boolean),
          ),
        ),
      }
    : _.cloneDeep(e);
}
function dr(r) {
  const e = Math.max(0, Number.isFinite(r) ? r : 0);
  return e <= 20 ? 6 : e <= 60 ? 4 : e <= 120 ? 3 : 2;
}
function hr(r, e) {
  (e < 3 && (r["Tu Vi"] = N(r["Cấp Độ"], r["Tu Vi"], e, 3)),
    (r["Trạng Thái Tu Luyện"] = y(r["Trạng Thái Tu Luyện"], {
      legacyAttemptBreakthrough: r["Thử đột phá"],
      level: r["Cấp Độ"],
      cultivation: r["Tu Vi"],
    })),
    (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]),
    Object.assign(r, D(r, !1)));
}
const _r = e.z
  .object({
    "Đồng Hồ Thế Giới": e.z
      .object({
        "Kỷ nguyên": e.z.string().prefault("Thời đại Mạt Pháp"),
        Năm: e.z.coerce.number().prefault(1),
        Tháng: e.z.coerce
          .number()
          .transform((r) => _.clamp(r, 1, 12))
          .prefault(1),
        Ngày: e.z.coerce
          .number()
          .transform((r) => _.clamp(r, 1, 30))
          .prefault(1),
        Giờ: e.z.string().prefault("Giờ Tý"),
      })
      .prefault({ "Kỷ nguyên": "Thời đại Mạt Pháp", Năm: 1, Tháng: 1, Ngày: 1, Giờ: "Giờ Tý" }),
    "Bản Đồ Thế Giới": e.z
      .record(
        e.z.string().describe("Tên Khu Vực"),
        e.z.object({
          layer: e.z.enum(["Thiên Tầng", "Địa Tầng", "Hạ Tầng"]).prefault("Địa Tầng"),
          danger: e.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
          desc: e.z.string().prefault(""),
          connections: e.z.array(e.z.string()).prefault([]),
        }),
      )
      .prefault({}),
    "Địa Chí Thế Giới": e.z
      .record(
        e.z.string().describe("Tên Sự Kiện"),
        e.z.object({
          "Trạng Thái": e.z.string().prefault(""),
          "Sự kiện": e.z.string().prefault(""),
        }),
      )
      .prefault({}),
    "Kho Thế Lực Tông Môn": e.z.record(e.z.string().describe("Tên Tông Môn"), ar).prefault({}),
    "Kho Công Pháp": e.z.record(e.z.string().describe("Tên Công Pháp"), or).prefault({}),
    "Kho Pháp Bảo": e.z.record(e.z.string().describe("Tên Pháp Bảo"), cr).prefault({
      "Trấn Uyên Kiếm": { Giai: "Tiên khí", Loại: "Kiếm" },
      "Song Ngư Bội": {
        Giai: "Bản mệnh",
        Loại: "Ngọc Bội",
        "Đặc tính bản mệnh": "Nguyên Huyết Khế Ước、Âm Dương Song Sinh、Khí Linh Hóa Hình、Dữ Chủ Cộng Tu、Sinh Tử Tương Y、Tỏa Huyết Hộ Chủ",
        "Khí linh": "Ngu Tịch Nhan",
      },
    }),
    "Kho Địa Điểm": e.z.record(e.z.string().describe("Tên Địa Điểm"), ir).prefault({
      "Thiên Uyên": {
        Vực: "Thiên Tầng",
        Loại: "Cấm địa",
        Nguy: 95,
        Đặc: "Tinh Thần Liệt Khích",
        Tư: ["Tinh Thần Toái Phiến", "Vẫn Thiết"],
      },
      "Cương Phong Đái": {
        Vực: "Thiên Tầng",
        Loại: "Cấm địa",
        Nguy: 90,
        Đặc: "Cương Phong Bình Chướng",
        Tư: ["Cương Phong Tinh Hoa"],
      },
      "Vấn Đạo Phong": {
        Vực: "Thần Châu",
        Loại: "Tông Môn",
        Nguy: 10,
        Đặc: "Vạn Pháp Tông",
        Tư: ["Công Pháp", "Linh Dược"],
      },
      "Kiếm Môn Quan": {
        Vực: "Thần Châu",
        Loại: "Tông Môn",
        Nguy: 15,
        Đặc: "Kiếm Các",
        Tư: ["Kiếm Ý", "Phi Kiếm"],
      },
      "Tàng Thư Các": {
        Vực: "Thần Châu",
        Loại: "Tông Môn",
        Nguy: 5,
        Đặc: "Cổ Tịch",
        Tư: ["Công Pháp", "Bí Thuật"],
      },
      "Phong Đô Thành": {
        Vực: "Thần Châu",
        Loại: "Thành trấn",
        Nguy: 30,
        Đặc: "Quỷ Thị",
        Tư: ["U Minh Tài Liệu"],
      },
      "Long Môn Bộc": { Vực: "Thần Châu", Loại: "Bí cảnh", Nguy: 40, Đặc: "Hóa Long", Tư: ["Long Khí"] },
      "Kiến Mộc Lâm": {
        Vực: "Đông Thương",
        Loại: "Địa hình",
        Nguy: 50,
        Đặc: "Cổ Thụ Tinh",
        Tư: ["Linh Mộc", "Yêu Đan"],
      },
      "Thanh Đế Lăng": {
        Vực: "Đông Thương",
        Loại: "Di tích",
        Nguy: 85,
        Đặc: "Thanh Đế Truyền Thừa",
        Tư: ["Thanh Đế Truyền Thừa"],
      },
      "Bách Hoa Cảnh": { Vực: "Đông Thương", Loại: "Bí cảnh", Nguy: 20, Đặc: "Hoa Hải", Tư: ["Linh Hoa"] },
      "Bất Diệt Hỏa Sơn": {
        Vực: "Nam Viêm",
        Loại: "Địa hình",
        Nguy: 80,
        Đặc: "Chu Tước Niết Bàn",
        Tư: ["Chu Tước Hỏa"],
      },
      "Niết Bàn Đài": {
        Vực: "Nam Viêm",
        Loại: "Di tích",
        Nguy: 70,
        Đặc: "Niết Bàn",
        Tư: ["Niết Bàn Cảm Ngộ"],
      },
      "Vạn Kiếm Trủng": {
        Vực: "Tây Canh",
        Loại: "Cấm địa",
        Nguy: 85,
        Đặc: "Kiếm Ý",
        Tư: ["Kiếm Ý", "Cổ Kiếm"],
      },
      "Huyền Băng Sơn": { Vực: "Bắc Minh", Loại: "Tông Môn", Nguy: 50, Đặc: "Huyền Vũ Tông", Tư: ["Huyền Băng"] },
      "Quy Khư Nhãn": {
        Vực: "Bắc Minh",
        Loại: "Cấm địa",
        Nguy: 99,
        Đặc: "Quy Khư",
        Tư: ["Quy Khư Cảm Ngộ"],
      },
      "Hoàng Tuyền Tích": { Vực: "Hạ Tầng", Loại: "Di tích", Nguy: 90, Đặc: "U Minh", Tư: ["Hoàng Tuyền Thủy"] },
      "Viêm Uyên": { Vực: "Hạ Tầng", Loại: "Cấm địa", Nguy: 95, Đặc: "Địa Tâm Hỏa", Tư: ["Địa Tâm Hỏa"] },
    }),
    "$Tông Môn Suy Đoán": e.z
      .object({
        "Vực Hiện Tại": e.z.string().prefault(""),
        "Thế Lực Chính Hiện Tại": e.z.string().prefault(""),
      })
      .prefault({ "Vực Hiện Tại": "", "Thế Lực Chính Hiện Tại": "" }),
    "Kho Linh Căn": e.z.record(e.z.string().describe("Tên Linh Căn"), ur).prefault({}),
    "Kho Thể Chất": e.z.record(e.z.string().describe("Tên Thể Chất"), sr).prefault({}),
    "Bản Tôn": J,
    "Kho Nhân Vật Hồng Nhan": e.z.record(e.z.string().describe("Tên Nhân Vật"), B).prefault({
      "Hứa Thính Vũ": {
        Cấp: 33,
        Căn: "Thủy Bản Nguyên Thiên",
        Chất: "Quy Khư Thần Thể",
        Tuổi: "Ngoại26Thực12000",
        Hệ: "Quy Khư Chi Chủ",
        Pháp: "Vạn Thủy Quy Nguyên Tiên Thiên",
        Khí: "Thương Hải Di Châu Tiên Thiên",
        Thông: ["Quy Khư Ca", "Nghịch Lưu Hư Vọng", "Tịch Diệt Hải Vực", "Vạn Thủy Đồng Nguyên"],
      },
      "Ngu Tịch Nhan": {
        Cấp: 12,
        Căn: "Thủy Âm Dương Dị",
        Chất: "Song Ngư Thể",
        Tuổi: "Hóa hình0Năm",
        Hệ: "{{user}}Ngọc Bội",
        Pháp: "Song Sinh Thiên Cực/Âm Dương",
        Khí: "Song Ngư Bội Bản Thể",
        Thông: ["Khô Mộc Xuân", "Đoạt Mệnh Trang", "Song Ngư Mộng"],
      },
      "Bạch Thanh Huyền": {
        Cấp: 29,
        Căn: "Kim Thiên Căn",
        Chất: "Kiếm Thể",
        Tuổi: "Ngoại30Thực1000+",
        Hệ: "Tán Tu Kiếm Tông Sư",
        Pháp: "Kiếm Ý Tiên/Thiên Âm Thiên",
        Khí: "Thanh Huyền Cầm Kiếm Linh Bảo",
        Thông: ["Cầm Kiếm Sát", "Kiếm Ý Ca", "Vạn Kiếm Tâm"],
      },
      "Nam Cung Vân Thường": {
        Cấp: 16,
        Căn: "Hỏa Thiên Căn",
        Chất: "Thần Hoàng Đạo Thể",
        Tuổi: "Ngoại10Thực118",
        Hệ: "Đại Hạ Tê Phượng Cung Chủ",
        Pháp: "Cửu Chuyển Niết Bàn Tiên",
        Khí: "Tê Ngô Trâm Linh Bảo",
        Thông: ["Nam Minh Ly Hỏa", "Hoàng Uy Trấn Thế", "Vũ Hóa Hư Không"],
      },
      "Mộng Yểu Linh": {
        Cấp: 23,
        Căn: "Thụy Thú Dị Căn",
        Chất: "Thừa Hoàng Thánh Thể",
        Tuổi: "Ngoại8Thực Vạn Năm+",
        Hệ: "Không(Mạt Đại Thừa Hoàng)",
        Pháp: "Thừa Hoàng Bản Nguyên Thiên",
        Khí: "Không",
        Thông: ["Thụy Quang Tí Hữu", "Linh Giác Thông Minh", "Bản Nguyên Bạo Phát"],
      },
      "Nguyễn Vong Ưu": {
        Cấp: 44,
        Căn: "Nhân Quả Đại Đạo Bản Nguyên",
        Chất: "Vạn Pháp Bất Xâm Chi Thể",
        Tuổi: "Nhị Bát Phương Hoa/Lịch Kiếp Vạn Tải",
        Hệ: "Tiên Giới Tiên Vương（Phàm Giới Ngụy Trang）",
        Pháp: "Nhân Quả Đại Đạo",
        Khí: "Không（Vạn Vật Giai Binh）",
        Thông: ["Khái Niệm Mạt Trừ", "Nhân Quả Soán Cải", "Tiên Vương Uy Áp", "Trùng Tố Kỷ Nguyên"],
      },
      "Vãn Đường": {
        Cấp: 15,
        Căn: "U Minh Linh Căn",
        Chất: "Phệ Hồn Chi Thể",
        Tuổi: "Không Xác Định",
        Hệ: "Tán Tu",
        Pháp: "U Minh Quy Hồn Kinh Thiên",
        Khí: "Dẫn Hồn Linh Linh Bảo",
        Thông: ["Minh Hà Chỉ Dẫn", "Minh Liên Trầm Mộng", "Quy Hồn Bãi Chu"],
      },
      "Sóc Ly Diên": {
        Cấp: 4,
        Căn: "Dị Biến Phong Linh Căn",
        Chất: "Quế Phách Linh Lung Thể",
        Tuổi: "Ngoại16Thực16",
        Hệ: "Tây Canh Quỳnh Luân Thùy Diệu Cung Ly Tông Thiên Kim",
        Pháp: "Toái Tinh U Ảnh Quyết Tàn Thiên",
        Khí: "Toái Tinh Song Nhận",
        Thông: ["Yến Hồi Thiểm"],
      },
      "Sóc Vọng Thư": {
        Cấp: 32,
        Căn: "Hạo Nguyệt Dị Linh Căn",
        Chất: "Hạo Nguyệt U Vi Thể",
        Tuổi: "Ngoại20Thực2000+",
        Hệ: "Tây Canh Quỳnh Luân Thùy Diệu Cung Cung Chủ",
        Pháp: "Xích Uyên Trấn Thế Huyết Nguyệt Quyết",
        Khí: "Sương Phách Cực Phẩm Linh Bảo",
        Thông: ["Nguyệt Ánh Thiên Cơ", "Xích Nguyệt Chiêu Tâm", "Nguyệt Hoa Phong Cấm", "Huyết Nguyệt Trấn Hồn", "Vạn Ảnh Quy Tông"],
      },
    }),
    "Hồng nhan": e.z.record(e.z.string().describe("Tên Hồng Nhan"), A).prefault({}),
    "NPCĐồ Giám": e.z.record(e.z.string().describe("NPCTên"), F).prefault({}),
    "Danh Sách Nhiệm Vụ": e.z
      .record(e.z.string().describe("Nhiệm VụID"), Q)
      .prefault({})
      .transform((r) =>
        _(r)
          .pickBy((r, e) => !!r && !!String(e).trim())
          .mapValues((r, e) => {
            return {
              ...r,
              Tên:
                zr(r.Tên) ||
                zr(e) ||
                ((t = r.Loại),
                {
                  "Tuyến chính": "Nhiệm vụ tuyến chính",
                  "Tuyến phụ": "Nhiệm vụ phụ",
                  "Mỗi ngày": "Nhiệm vụ mỗi ngày",
                  "Lâm nguy thụ mệnh": "Lâm nguy thụ mệnh",
                  "Khám phá bí cảnh": "Khám phá bí cảnh",
                }[String(t ?? "").trim()] || "Nhiệm Vụ Chưa Đặt Tên"),
            };
            var t;
          })
          .pickBy((r) => "Đang tiến hành" === r["Trạng Thái"])
          .value(),
      ),
    "Hệ Thống Danh Vọng": T,
    "Hệ Thống Độ Khó": nr,
    "Cơ Ngộ Có Thể Tham Gia": e.z
      .array(rr)
      .prefault([])
      .transform((r) => r.filter((r) => !!r.Tên)),
    "Hoàn Cảnh Hiện Tại": e.z.string().prefault(""),
    "_Cài Đặt Hệ Thống": er,
    "_Độ Hảo CảmSnapshot": e.z
      .record(
        e.z.string().describe("Tên Hồng Nhan"),
        e.z.coerce.number().transform((r) => _.clamp(r, -200, 200)),
      )
      .prefault({}),
  })
  .transform((r) => {
    r["Kho Nhân Vật Hồng Nhan"] = (function (r) {
      const e = _.cloneDeep(r ?? {});
      for (const { canonical: r, aliases: t } of lr) {
        let n = e[r] ? _.cloneDeep(e[r]) : void 0;
        for (const r of t) {
          const t = e[r];
          t && ((n = br(n, t)), delete e[r]);
        }
        n && (e[r] = n);
      }
      return e;
    })(r["Kho Nhân Vật Hồng Nhan"] ?? {});
    const e = (function (r, e) {
      const t = _.cloneDeep(r ?? {}),
        n = _.cloneDeep(e ?? {});
      for (const { canonical: r, aliases: e } of lr) {
        let a = t[r] ? _.cloneDeep(t[r]) : void 0;
        for (const r of e) {
          const e = t[r];
          e && ((a = gr(a, e)), delete t[r]);
        }
        a && (t[r] = a);
        const o = [n[r], ...e.map((r) => n[r])]
          .map((r) => Number(r))
          .filter((r) => Number.isFinite(r));
        for (const r of e) delete n[r];
        o.length > 0 && (n[r] = o[o.length - 1]);
      }
      return { companions: t, snapshot: n };
    })(r["Hồng nhan"] ?? {}, r["_Độ Hảo CảmSnapshot"] ?? {});
    ((r["Hồng nhan"] = e.companions), (r["_Độ Hảo CảmSnapshot"] = e.snapshot));
    const t = Math.max(
      1,
      Math.floor(Number(r["_Cài Đặt Hệ Thống"]?.["Phiên Bản Hệ Thống Tu Luyện"] ?? 1) || 1),
    );
    !(function (r, e) {
      (e < 3 && (r["Tu Vi"] = N(r["Cấp Độ"], r["Tu Vi"], e, 3)),
        (r["Trạng Thái Tu Luyện"] = y(r["Trạng Thái Tu Luyện"], {
          legacyAttemptBreakthrough: r["Thử đột phá"],
          level: r["Cấp Độ"],
          cultivation: r["Tu Vi"],
        })),
        (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]),
        Object.assign(r, D(r, !0)));
    })(r["Bản Tôn"], t);
    for (const e of Object.values(r["Hồng nhan"] ?? {})) hr(e, t);
    r["_Cài Đặt Hệ Thống"] = {
      ...(r["_Cài Đặt Hệ Thống"] ?? {}),
      "Phiên Bản Hệ Thống Tu Luyện": 3,
      "_Chữ ký ghi đè trạng thái thủ công": String(r["_Cài Đặt Hệ Thống"]?.["_Chữ ký ghi đè trạng thái thủ công"] ?? ""),
    };
    const n = _.cloneDeep(r["_Độ Hảo CảmSnapshot"] ?? {});
    for (const [e, t] of Object.entries(r["Hồng nhan"] ?? {})) {
      const r = Number(t?.["Độ Hảo Cảm"]);
      if (!Number.isFinite(r)) continue;
      const a = Number(n[e]);
      if (Number.isFinite(a)) {
        const e = dr(a);
        t["Độ Hảo Cảm"] = _.clamp(r, a - e, a + e);
      } else t["Độ Hảo Cảm"] = _.clamp(r, -200, 200);
      n[e] = t["Độ Hảo Cảm"];
    }
    return ((r["_Độ Hảo CảmSnapshot"] = _.pickBy(n, (e, t) => _.has(r["Hồng nhan"], t))), r);
  });
$(() => {
  (r(_r),
    console.info("[Đăng Hỏa Lan San·Cựu Mộng Tân Tài] MVU Cấu trúc biến đã đăng ký"),
    toastr.success("MVU Cấu trúc biến đã được đăng ký thành công", "Đăng Hỏa Lan San·Cựu Mộng Tân Tài"));
});
//# sourceMappingURL=index.js.map
