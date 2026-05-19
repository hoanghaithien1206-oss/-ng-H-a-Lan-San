const r = z,
  t = ["Sơ kỳ", "Trung kỳ", "Hậu kỳ", "Đại viên mãn"],
  e = [
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
  n = [1, 1.18, 1.38, 1.6],
  a = [
    100, 160, 260, 420, 680, 1100, 1780, 2880, 4660, 7540, 12200, 19740,
  ].flatMap((r) => n.map((t) => Math.round(r * t))),
  o = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2880,
    3360, 3840, 4800, 5760, 6720, 7680, 9600, 11520, 13440, 15360, 19200, 23040,
    26880, 30720, 38400, 46080, 53760, 61440, 76800, 92160, 107520, 122880,
    153600, 184320, 215040, 245760, 307200, 368640, 430080, 491520, 614400,
    737280, 860160, 983040,
  ],
  s = {
    1: [
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2400,
      2400, 2400, 4800, 4800, 4800, 4800, 9600, 9600, 9600, 9600, 19200, 19200,
      19200, 19200, 38400, 38400, 38400, 38400, 76800, 76800, 76800, 76800,
      153600, 153600, 153600, 153600, 307200, 307200, 307200, 307200, 614400,
      614400, 614400, 614400,
    ],
    2: a,
    3: o,
  },
  c = [
    100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 1e3, 1e3, 1e3,
    1e3, 2e3, 2e3, 2e3, 2e3, 5e3, 5e3, 5e3, 5e3, 1e4, 1e4, 1e4, 1e4, 5e4, 5e4,
    5e4, 5e4, 1e5, 1e5, 1e5, 1e5, 5e5, 5e5, 5e5, 5e5, 2e6, 2e6, 2e6, 2e6, 1e7,
    1e7, 1e7, 1e7,
  ];
const i = {
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
  u = {
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
const l = r.z.object({
    Tên: r.z.string().prefault(""),
    "Mô tả": r.z.string().prefault(""),
    "Phẩm Giai": r.z.string().prefault(""),
    "Số Lượng": r.z.coerce
      .number()
      .transform((r) => Math.max(0, r))
      .prefault(1),
  }),
  f = new Set(["Linh Thạch", "Hạ Phẩm Linh Thạch"]);
function p(r) {
  return String(r ?? "")
    .trim()
    .replace(/\s+/g, "");
}
function m(r, t) {
  return [p(r), p(t?.Tên)].filter(Boolean).some((r) => f.has(r));
}
function g(r, ...t) {
  let e = Number(r);
  (!Number.isFinite(e) || e < 0) && (e = 0);
  const n = t.map((r) => {
    const t = (function (r) {
      const t = {};
      let e = 0;
      for (const [n, a] of Object.entries(r ?? {}))
        if (a) {
          if (m(n, a)) {
            const r = Number(a["Số Lượng"]);
            Number.isFinite(r) && r > 0 && (e += r);
            continue;
          }
          t[n] = a;
        }
      return { inventory: t, spiritStone: e };
    })(r);
    return ((e += t.spiritStone), t.inventory);
  });
  return { spiritStone: e, inventories: n };
}
const b = {
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
  d = {
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
  h = r.z
    .object({
      "Giai Đoạn": r.z
        .string()
        .transform((r) => b[String(r).trim()] || "Đang tu luyện")
        .prefault("Đang tu luyện"),
      "Nguyên Nhân Bình Cảnh": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Mục Tiêu Đột Phá": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Kết Quả Lần Trước": r.z
        .string()
        .transform((r) => d[String(r).trim()] || "Không")
        .prefault("Không"),
    })
    .prefault({ "Giai Đoạn": "Đang tu luyện", "Nguyên Nhân Bình Cảnh": "", "Mục Tiêu Đột Phá": "", "Kết Quả Lần Trước": "Không" });
function S(r) {
  const n = _.clamp(Math.floor(Number(r) || 1), 1, o.length),
    a = Math.floor((n - 1) / 4);
  return `${e[a] ?? "Luyện Khí"}${t[(n - 1) % 4] ?? "Sơ kỳ"}`;
}
function j(r, t = 3) {
  const e = (function (r = 3) {
    if (!0 === r) return s[1];
    if (!1 === r) return s[3];
    const t = Math.max(1, Math.floor(Number(r) || 3));
    return s[t] ?? o;
  })(t);
  return e[_.clamp(Math.floor(Number(r) || 1), 1, e.length) - 1] ?? e[0] ?? 100;
}
function y(r, t, e = 1, n = 3) {
  const a = Number(t);
  if (!Number.isFinite(a) || a <= 0) return 0;
  const o = j(r, e),
    s = j(r, n);
  if (o <= 0 || o === s) return Math.round(a);
  const c = a / o,
    i = Math.round(c * s);
  return Math.max(0, i);
}
function N(r, t) {
  const e = h.parse(r ?? {}),
    n = j(t.level);
  let a = e["Giai Đoạn"];
  t.legacyAttemptBreakthrough || "Đang đột phá" === a
    ? (a = "Đang đột phá")
    : "Đang tu luyện" === a && t.cultivation >= n && (a = "Gặp bình cảnh");
  const s = t.level < o.length ? S(t.level + 1) : e["Mục Tiêu Đột Phá"],
    c = ["Gặp bình cảnh", "Đang đột phá", "Đang áp cảnh"].includes(a);
  return {
    "Giai Đoạn": a,
    "Nguyên Nhân Bình Cảnh": c ? e["Nguyên Nhân Bình Cảnh"] : "",
    "Mục Tiêu Đột Phá": c ? e["Mục Tiêu Đột Phá"] || s : "",
    "Kết Quả Lần Trước": e["Kết Quả Lần Trước"],
  };
}
const v = r.z
    .object({
      Tên: r.z.string().prefault(""),
      "Mô tả": r.z.string().prefault(""),
      Loại: r.z.enum(["Công Pháp", "Thần Thông", "Bí Thuật"]).prefault("Thần Thông"),
      "Phẩm Giai": r.z
        .string()
        .transform((r) => i[r] || "Phàm")
        .catch("Phàm"),
      "Độ Thuần Thục": r.z
        .string()
        .transform((r) =>
          (function (r) {
            const t = String(r ?? "")
              .trim()
              .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
            return u[t]
              ? u[t]
              : t.includes("Tiểu thành")
                ? "Thục luyện"
                : t.includes("Trung thành")
                  ? "Tinh thông"
                  : t.includes("Đại viên mãn")
                    ? "Viên mãn"
                    : "Nhập môn";
          })(r),
        )
        .catch("Nhập môn"),
      "Thời Gian Lĩnh Ngộ": r.z.coerce.number().catch(() => Date.now()),
      "Cấp Uy Lực": r.z.coerce.number().optional(),
    })
    .transform((r) => {
      if (!r["Cấp Uy Lực"] || 0 === r["Cấp Uy Lực"]) {
        const t = { "Nhập môn": 1, "Thục luyện": 2, "Tinh thông": 3, "Đại thành": 4, "Viên mãn": 5, "Hóa cảnh": 6 },
          e =
            { Phàm: 1, Hoàng: 2, Huyền: 3, Địa: 4, Thiên: 5, Tiên: 6, Thánh: 7, "Tiên Thiên": 8 }[
              r["Phẩm Giai"]
            ] || 1,
          n = t[r["Độ Thuần Thục"]] || 1;
        return { ...r, "Cấp Uy Lực": 10 * e + n };
      }
      return r;
    }),
  M = r.z
    .record(r.z.string().describe("Tên Vật Phẩm"), l)
    .prefault({})
    .transform((r) => _.pickBy(r, ({ "Số Lượng": r }) => r > 0));
function A(r, t = !1) {
  const e = r["Cấp Độ"],
    n = j(e),
    a = c[e - 1] ?? 100,
    o = {
      "Ngưỡng Đột Phá": n,
      "Giới Hạn Tuổi Thọ": a,
      "Mô Tả Cảnh Giới": S(e),
      "Trạng Thái Tuổi Thọ": `${r["Tuổi Thọ Đã Sống"]}/${a}`,
      "Trạng Thái": (function (r, t, e) {
        const n = r?.["Giai Đoạn"] || "Đang tu luyện";
        return "Đang đột phá" === n
          ? "Đang đột phá"
          : "Đang củng cố" === n
            ? "Đang củng cố"
            : "Đang áp cảnh" === n
              ? "Đang áp cảnh"
              : "Gặp bình cảnh" === n || t >= e
                ? "Thời kỳ bình cảnh"
                : "Đang tu luyện";
      })(r["Trạng Thái Tu Luyện"], r["Tu Vi"], n),
      "Tiến Độ": `${(100 * (n > 0 ? _.clamp(r["Tu Vi"] / n, 0, 1) : 0)).toFixed(1)}%`,
    };
  if (!t) return o;
  const s = (function (r) {
      const t = Math.floor((r - 1) / 4),
        e = (r - 1) % 4,
        n = Math.pow(10, t + 1),
        a = 0.2 * n * e;
      return Math.round(n + a);
    })(e),
    i = Object.values(r["Danh Sách Thần Thông"] || {}),
    u =
      s +
      (i.length > 0 ? Math.max(...i.map((r) => r["Cấp Uy Lực"] || 0)) : 0) +
      (() => {
        const t = r["Thể Chất"] || "";
        return t.includes("Thần")
          ? 500
          : t.includes("Thánh")
            ? 200
            : t.includes("Đạo")
              ? 100
              : t.includes("Linh")
                ? 50
                : 0;
      })();
  return { ...o, "Giá Trị Chiến Lực": u };
}
const D = r.z.object({
    Cấp: r.z.coerce.number().transform((r) => _.clamp(r, 1, 48)),
    Căn: r.z.string().describe("Linh Căn"),
    Chất: r.z.string().describe("Thể Chất"),
    Tuổi: r.z.string().describe("Độ Tuổi"),
    Hệ: r.z.string().describe("Trực Thuộc"),
    Pháp: r.z.string().describe("Công Pháp"),
    Khí: r.z.string().describe("Bản Mệnh Binh Khí"),
    Thông: r.z.array(r.z.string()).prefault([]),
  }),
  x = r.z
    .object({
      "Cảm Xúc Hiện Tại": r.z.string().prefault(""),
      "Nguyên Do Thái Độ": r.z.string().prefault(""),
      "Nhu Cầu Quan Hệ": r.z.string().prefault(""),
      "Cấm Kỵ Chung Sống": r.z.string().prefault(""),
      "Ước Hẹn Chưa Xong": r.z.string().prefault(""),
    })
    .prefault({}),
  w = r.z
    .object({
      "Cấp Độ": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      "Tu Vi": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Linh Căn": r.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      "Thể Chất": r.z.string().prefault("Phàm Thể"),
      "Công Pháp": r.z.string().prefault("Không"),
      "Bản Mệnh Binh Khí": r.z.string().prefault("Không"),
      "Danh Sách Thần Thông": r.z.record(r.z.string().describe("Tên Thần Thông"), v).prefault({}),
      "Linh Thạch": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Tuổi Thọ Đã Sống": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Thử đột phá": r.z.boolean().prefault(!1),
      "Trạng Thái Tu Luyện": h,
      "Độ Hảo Cảm": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, -200, 200))
        .prefault(0),
      "Quan Hệ": r.z.string().prefault("Người Lạ"),
      "Ngữ Cảnh Quan Hệ": x,
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
      ((r["Trạng Thái Tu Luyện"] = N(r["Trạng Thái Tu Luyện"], {
        legacyAttemptBreakthrough: r["Thử đột phá"],
        level: r["Cấp Độ"],
        cultivation: r["Tu Vi"],
      })),
        (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]));
      const t = A(r, !1);
      return { ...r, ...t };
    }),
  B = r.z.object({
    "Cấp Độ": r.z.coerce
      .number()
      .transform((r) => _.clamp(r, 1, 48))
      .prefault(1),
    "Tông Môn Trực Thuộc": r.z.string().prefault("Tán Tu"),
    "Ghi Chú": r.z.string().prefault(""),
  }),
  O = {
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
  k = {
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
  F = {
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
  P = {
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
  E = {
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
  C = {
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
  W = {
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
  q = r.z
    .object({
      "Đang Chiến Đấu": r.z.boolean().prefault(!1),
      "Trạng Thái Hiện Tại": r.z
        .string()
        .transform((r) => O[r] || "Không chiến đấu")
        .prefault("Không chiến đấu"),
      "Giá Trị Linh Lực": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      "Cấp Độ Thương Thế": r.z
        .string()
        .transform((r) => k[r] || "Không thương")
        .prefault("Không thương"),
      "Ác Chủ Bài Đã Dùng": r.z.array(r.z.string()).prefault([]),
      "Hiệp Chiến Đấu": r.z.coerce.number().prefault(0),
    })
    .prefault({
      "Đang Chiến Đấu": !1,
      "Trạng Thái Hiện Tại": "Không chiến đấu",
      "Giá Trị Linh Lực": 100,
      "Cấp Độ Thương Thế": "Không thương",
      "Ác Chủ Bài Đã Dùng": [],
      "Hiệp Chiến Đấu": 0,
    }),
  I = r.z.object({
    Tên: r.z.string().prefault("Kẻ Địch Không Xác Định"),
    "Cảnh Giới": r.z.string().prefault("Không Xác Định"),
    "Đánh Giá Chiến Lực": r.z
      .string()
      .transform((r) => F[r] || "Kẻ tám lạng người nửa cân")
      .prefault("Kẻ tám lạng người nửa cân"),
    "Trạng Thái": r.z
      .string()
      .transform((r) => P[r] || "Nguyên vẹn")
      .prefault("Nguyên vẹn"),
    "Đặc Điểm": r.z.string().prefault(""),
  }),
  V = r.z
    .object({
      "Đang Độ Kiếp": r.z.boolean().prefault(!1),
      "Loại Thiên Kiếp": r.z
        .string()
        .transform((r) => E[r] || "Không")
        .prefault("Không"),
      "Cấp Độ Thiên Kiếp": r.z
        .string()
        .transform((r) => C[r] || "Không")
        .prefault("Không"),
      "Giai Đoạn Hiện Tại": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      "Tổng Số Giai Đoạn": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      "Khả Năng Chịu Đựng": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      "Hộ Đạo Đã Dùng": r.z.array(r.z.string()).prefault([]),
      "Mô Tả Thiên Kiếp": r.z.string().prefault(""),
      "Nguyên Nhân Kích Hoạt": r.z.string().prefault(""),
      "Kết Quả Độ Kiếp Lần Trước": r.z
        .string()
        .transform((r) => W[r] || "Không")
        .prefault("Không"),
      "Thời Gian Hồi Độ Kiếp": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Ghi Chép Hình Phạt Thất Bại": r.z.string().prefault(""),
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
  Z = r.z
    .object({
      "Khu Vực Hiện Tại": r.z.string().prefault("Vùng Đất Không Xác Định"),
      "Tầng Cấp Trực Thuộc": r.z.string().prefault("Địa Tầng"),
      "Mô Tả Môi Trường": r.z.string().prefault(""),
      "Độ Nguy Hiểm": r.z.coerce.number().prefault(10),
      "Lối Đi Khả Dụng": r.z.array(r.z.string()).prefault([]),
      "Thông Tin Điều Hướng": r.z.string().prefault(""),
    })
    .prefault({
      "Khu Vực Hiện Tại": "Vùng Đất Không Xác Định",
      "Tầng Cấp Trực Thuộc": "Địa Tầng",
      "Mô Tả Môi Trường": "",
      "Độ Nguy Hiểm": 10,
      "Lối Đi Khả Dụng": [],
      "Thông Tin Điều Hướng": "",
    }),
  R = r.z
    .object({
      "Họ Tên": r.z.string().prefault("Vô Danh Thị"),
      "Tông Môn": r.z.string().prefault("Tán Tu"),
      "Xuất Thân": r.z.string().prefault("Phàm Nhân"),
    })
    .prefault({ "Họ Tên": "Vô Danh Thị", "Tông Môn": "Tán Tu", "Xuất Thân": "Phàm Nhân" }),
  G = r.z
    .object({
      "Cấp Độ": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      "Tu Vi": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Linh Căn": r.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      "Thể Chất": r.z.string().prefault("Phàm Thể"),
      "Công Pháp": r.z.string().prefault("Không"),
      "Bản Mệnh Binh Khí": r.z.string().prefault("Không"),
      "Danh Sách Thần Thông": r.z.record(r.z.string().describe("Tên Thần Thông"), v).prefault({}),
      "Linh Thạch": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Tuổi Thọ Đã Sống": r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      "Thử đột phá": r.z.boolean().prefault(!1),
      "Trạng Thái Tu Luyện": h,
      "Hành Tung": Z,
      "Thân Phận": R,
      "Túi Đồ": M,
      "Pháp Bảo": M,
      "Túi Tạp Vật": M,
      "Trạng Thái Chiến Đấu": q,
      "Kẻ Địch Hiện Tại": r.z.array(I).prefault([]),
      "Trạng Thái Độ Kiếp": V,
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
      const t = g(r["Linh Thạch"], r["Túi Đồ"], r["Túi Tạp Vật"]),
        [e, n] = t.inventories;
      ((r["Linh Thạch"] = t.spiritStone),
        (r["Túi Đồ"] = e ?? {}),
        (r["Túi Tạp Vật"] = n ?? {}),
        (r["Trạng Thái Tu Luyện"] = N(r["Trạng Thái Tu Luyện"], {
          legacyAttemptBreakthrough: r["Thử đột phá"],
          level: r["Cấp Độ"],
          cultivation: r["Tu Vi"],
        })),
        (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]));
      const a = A(r, !0);
      return { ...r, ...a };
    }),
  J = {
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
  T = r.z.object({
    Tên: r.z.string().prefault(""),
    Loại: r.z
      .string()
      .transform((r) => L[String(r).trim()] || "Tuyến phụ")
      .prefault("Tuyến chính"),
    "Mục tiêu": r.z.string().prefault(""),
    "Trạng Thái": r.z
      .string()
      .transform((r) => J[String(r).trim()] || "Đang tiến hành")
      .prefault("Đang tiến hành"),
    "Thông Tin Bí Cảnh": r.z
      .object({
        Vực: r.z
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
        Nguy: r.z.coerce
          .number()
          .transform((r) => _.clamp(r, 0, 100))
          .optional(),
        Đặc: r.z.string().optional(),
        Thưởng: r.z
          .union([
            r.z.array(r.z.string()),
            r.z.string().transform((r) => (r ? [r] : [])),
          ])
          .prefault([]),
        Hạn: r.z.string().optional(),
      })
      .optional(),
    "Thời Gian Tạo": r.z
      .union([r.z.coerce.number(), r.z.string().transform(() => Date.now())])
      .prefault(() => Date.now()),
  }),
  U = r.z.object({
    "Giá trị": r.z.coerce
      .number()
      .transform((r) => _.clamp(r, -100, 100))
      .prefault(0),
    "Quan Hệ": r.z.string().prefault("Xa lạ"),
    "Thời Gian Cập Nhật": r.z.coerce.number().prefault(() => Date.now()),
  }),
  H = r.z
    .record(r.z.string().describe("Tên Thế Lực"), U)
    .prefault({})
    .transform((r) =>
      _(r)
        .mapValues((r) => {
          const t = r["Giá trị"];
          let e;
          e =
            t >= 80
              ? "Đồng minh"
              : t >= 60
                ? "Thân thiện"
                : t >= 30
                  ? "Hữu hảo"
                  : t >= 10
                    ? "Trung lập thiên vị"
                    : t >= -10
                      ? "Trung lập"
                      : t >= -30
                        ? "Trung lập thiên ác"
                        : t >= -60
                          ? "Địch đối"
                          : t >= -80
                            ? "Cừu hận"
                            : "Không chết không ngừng";
          const n = r["Quan Hệ"] && "Xa lạ" !== r["Quan Hệ"] ? r["Quan Hệ"] : e;
          return { ...r, "Quan Hệ": n };
        })
        .value(),
    ),
  K = {
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
  Q = [
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
function X(r, t) {
  const e = K[r];
  if (e) return e;
  const n = Object.values(t)
    .map((r) =>
      (function (r) {
        return String(r ?? "").trim();
      })(r),
    )
    .filter(Boolean)
    .join("｜");
  for (const r of Q) if (r.pattern.test(n)) return r.type;
  return "Khám phá";
}
const Y = r.z
    .object({
      Tên: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Nguồn gốc": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      Loại: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault("Khám phá"),
      "Mô tả": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Kỳ Vọng Đền Đáp": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Đánh Giá Rủi Ro": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      "Thời Hạn": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      "Sự Kiện Liên Quan": r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      "Độ Ưu Tiên": r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 5))
        .prefault(3),
    })
    .transform((r) => {
      const t = {
        Tên: r.Tên,
        "Nguồn gốc": r["Nguồn gốc"],
        "Mô tả": r["Mô tả"],
        "Kỳ Vọng Đền Đáp": r["Kỳ Vọng Đền Đáp"],
        "Đánh Giá Rủi Ro": r["Đánh Giá Rủi Ro"],
        "Thời Hạn": r["Thời Hạn"] ?? "",
        "Sự Kiện Liên Quan": r["Sự Kiện Liên Quan"] ?? "",
      };
      return { ...r, Loại: X(r.Loại, t) };
    }),
  rr = r.z
    .object({
      "Bật Nhắc Nhở Hành Động": r.z.boolean().prefault(!0),
      "Phiên Bản Hệ Thống Tu Luyện": r.z.coerce.number().prefault(1),
      "_Chữ ký ghi đè trạng thái thủ công": r.z.string().prefault(""),
    })
    .prefault({}),
  tr =
    (r.z.object({ "Bật Nhắc Nhở Hành Động": r.z.boolean().prefault(!0) }).prefault({}),
    {
      "Suôn sẻ": "Suôn sẻ",
      "Trắc trở": "Trắc trở",
      "Ổn định": "Ổn định",
      "Thuận lợi": "Suôn sẻ",
      "Thụ trở": "Trắc trở",
      "Bình thường": "Ổn định",
    }),
  er = r.z
    .object({
      "Thiên đạo cảm ứng": r.z
        .string()
        .transform((r) => tr[String(r).trim()] || "Ổn định")
        .prefault("Ổn định"),
      "Cảnh báo áp lực môi trường cao": r.z.string().prefault("Thiên đạo vận chuyển bình thường，Vạn vật tuần hoàn。"),
      "_Dữ liệu nội bộ hệ thống độ khó": r.z
        .object({
          "Số Phiên Bản": r.z.coerce.number().prefault(1),
          "Bảo vệ cân bằng": r.z
            .object({
              "Bộ đếm liên tục trắc trở": r.z.coerce.number().prefault(0),
              "Ngưỡng kích hoạt": r.z.coerce.number().prefault(3),
              "Số hiệp còn hiệu lực": r.z.coerce.number().prefault(0),
              "Số hiệp hồi chiêu": r.z.coerce.number().prefault(0),
            })
            .prefault({}),
          "Chiến lược động": r.z
            .object({
              "Giới hạn thay đổi mỗi hiệp": r.z.coerce.number().prefault(0.15),
              "Tốc độ giảm tự nhiên": r.z.coerce.number().prefault(0.03),
              "Hiệp hồi chiêu tăng trưởng": r.z.coerce.number().prefault(2),
            })
            .prefault({}),
          "Snapshot độ khó": r.z
            .object({
              "Hệ số hiệp cơ bản": r.z.coerce.number().prefault(1),
              "Hệ số hiệp cuối cùng": r.z.coerce.number().prefault(1),
              "Nguồn phân tầng": r.z
                .object({
                  "Tầng tường thuật thế giới": r.z.coerce.number().prefault(1),
                  "Tầng sở thích người chơi": r.z.coerce.number().prefault(1),
                  "Tầng trạng thái ngắn hạn": r.z.coerce.number().prefault(1),
                })
                .prefault({}),
            })
            .prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
  nr = r.z.object({
    Địa: r.z.string().describe("Nơi ở"),
    Đặc: r.z.string().describe("Đặc điểm cốt lõi"),
    Lực: r.z.string().describe("Chiến lực cao nhất"),
    Doanh: r.z.enum(["Chính", "Ma", "Trung"]),
    Mô: r.z.enum(["Siêu đại", "Đại", "Tiểu", "Vi", "Đặc"]),
  }),
  ar = r.z.object({
    Giai: r.z
      .string()
      .transform((r) => i[r] || "Phàm")
      .catch("Phàm"),
    Tính: r.z.string().describe("Thuộc tính"),
    Hiệu: r.z.string().describe("Hiệu quả"),
  }),
  or = r.z
    .object({
      Giai: r.z.enum([
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
      Loại: r.z.string().describe("Loại"),
      "Đặc tính bản mệnh": r.z.string().optional().describe("Đặc tính riêng pháp bảo bản mệnh"),
      "Khí linh": r.z.string().optional().describe("Tên Khí Linh"),
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
  sr = r.z.object({
    Vực: r.z.enum([
      "Thiên Tầng",
      "Thần Châu",
      "Đông Thương",
      "Nam Viêm",
      "Tây Canh",
      "Bắc Minh",
      "Hạ Tầng",
      "Tứ Hải",
    ]),
    Loại: r.z.enum(["Bí cảnh", "Thành trấn", "Tông Môn", "Cấm địa", "Di tích", "Địa hình"]),
    Nguy: r.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
    Đặc: r.z.string().describe("Đặc Điểm"),
    Tư: r.z
      .union([
        r.z.array(r.z.string()),
        r.z.string().transform((r) => (r ? [r] : [])),
      ])
      .prefault([]),
  }),
  cr = r.z
    .object({
      Chất: r.z.enum(["Liệt", "Hạ", "Trung", "Thượng", "Cực", "Thiên", "Dị"]),
      Tính: r.z.string().describe("Thuộc tính"),
      Hi: r.z.enum(["Thường", "Thiểu", "Hãn", "Hi", "Truyền"]),
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
  ir = r.z
    .object({
      Chất: r.z.enum(["Phàm", "Linh", "Đạo", "Thánh", "Thần"]),
      Đặc: r.z.string().describe("Đặc tính"),
      Hi: r.z.enum(["Thường", "Thiểu", "Hãn", "Hi", "Truyền"]),
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
  ur = [
    { canonical: "Ngu Tịch Nhan", aliases: ["Ngu Tịch", "Ngu Nhan"] },
    { canonical: "Sóc Ly Diên", aliases: ["A Diên", "Huyết Thủ Phi Diên"] },
    { canonical: "Sóc Vọng Thư", aliases: ["Xích Nguyệt Nữ Đế", "U Ảnh Tông Chủ"] },
  ],
  lr = w.parse({}),
  fr = /[\u3400-\u4dbf\u4e00-\u9fff]/;
function pr(r, t, e) {
  const n = String(r ?? "").trim();
  return n && n !== e ? n : t;
}
function mr(r) {
  const t = String(r ?? "").trim();
  if (!t) return "";
  const e =
      t
        .replace(
          /^(?:[A-Za-z][A-Za-z0-9]*)(?:[._:\-/\\\s]+[A-Za-z0-9]+)*[._:\-/\\\s]*/u,
          "",
        )
        .trim() || t,
    n = e.search(fr);
  return n < 0 ? "" : e.slice(n).trim();
}
function zr(r, t) {
  if (!r) return _.cloneDeep(t);
  const e = _.cloneDeep(r),
    n = _.cloneDeep(lr["Ngữ Cảnh Quan Hệ"]);
  ((e["Cấp Độ"] = Math.max(Number(r["Cấp Độ"] ?? lr["Cấp Độ"]), Number(t["Cấp Độ"] ?? lr["Cấp Độ"]))),
    (e["Tu Vi"] = Math.max(Number(r["Tu Vi"] ?? lr["Tu Vi"]), Number(t["Tu Vi"] ?? lr["Tu Vi"]))),
    (e["Linh Thạch"] = Math.max(Number(r["Linh Thạch"] ?? lr["Linh Thạch"]), Number(t["Linh Thạch"] ?? lr["Linh Thạch"]))),
    (e["Tuổi Thọ Đã Sống"] = Math.max(
      Number(r["Tuổi Thọ Đã Sống"] ?? lr["Tuổi Thọ Đã Sống"]),
      Number(t["Tuổi Thọ Đã Sống"] ?? lr["Tuổi Thọ Đã Sống"]),
    )),
    (e["Thử đột phá"] = Boolean(r["Thử đột phá"] || t["Thử đột phá"])));
  const a = _.cloneDeep(lr["Trạng Thái Tu Luyện"]);
  return (
    (e["Trạng Thái Tu Luyện"] = N(
      {
        "Giai Đoạn": pr(t["Trạng Thái Tu Luyện"]?.["Giai Đoạn"], String(r["Trạng Thái Tu Luyện"]?.["Giai Đoạn"] ?? a["Giai Đoạn"]), a["Giai Đoạn"]),
        "Nguyên Nhân Bình Cảnh": pr(
          t["Trạng Thái Tu Luyện"]?.["Nguyên Nhân Bình Cảnh"],
          String(r["Trạng Thái Tu Luyện"]?.["Nguyên Nhân Bình Cảnh"] ?? a["Nguyên Nhân Bình Cảnh"]),
          a["Nguyên Nhân Bình Cảnh"],
        ),
        "Mục Tiêu Đột Phá": pr(
          t["Trạng Thái Tu Luyện"]?.["Mục Tiêu Đột Phá"],
          String(r["Trạng Thái Tu Luyện"]?.["Mục Tiêu Đột Phá"] ?? a["Mục Tiêu Đột Phá"]),
          a["Mục Tiêu Đột Phá"],
        ),
        "Kết Quả Lần Trước": pr(
          t["Trạng Thái Tu Luyện"]?.["Kết Quả Lần Trước"],
          String(r["Trạng Thái Tu Luyện"]?.["Kết Quả Lần Trước"] ?? a["Kết Quả Lần Trước"]),
          a["Kết Quả Lần Trước"],
        ),
      },
      {
        legacyAttemptBreakthrough: e["Thử đột phá"],
        level: e["Cấp Độ"],
        cultivation: e["Tu Vi"],
      },
    )),
    (e["Độ Hảo Cảm"] = Number.isFinite(Number(t["Độ Hảo Cảm"]))
      ? Number(t["Độ Hảo Cảm"])
      : Number(r["Độ Hảo Cảm"] ?? lr["Độ Hảo Cảm"])),
    (e["Quan Hệ"] = pr(t["Quan Hệ"], String(r["Quan Hệ"] ?? lr["Quan Hệ"]), lr["Quan Hệ"])),
    (e["Ngữ Cảnh Quan Hệ"] = {
      "Cảm Xúc Hiện Tại": pr(
        t["Ngữ Cảnh Quan Hệ"]?.["Cảm Xúc Hiện Tại"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Cảm Xúc Hiện Tại"] ?? n["Cảm Xúc Hiện Tại"]),
        n["Cảm Xúc Hiện Tại"],
      ),
      "Nguyên Do Thái Độ": pr(
        t["Ngữ Cảnh Quan Hệ"]?.["Nguyên Do Thái Độ"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Nguyên Do Thái Độ"] ?? n["Nguyên Do Thái Độ"]),
        n["Nguyên Do Thái Độ"],
      ),
      "Nhu Cầu Quan Hệ": pr(
        t["Ngữ Cảnh Quan Hệ"]?.["Nhu Cầu Quan Hệ"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Nhu Cầu Quan Hệ"] ?? n["Nhu Cầu Quan Hệ"]),
        n["Nhu Cầu Quan Hệ"],
      ),
      "Cấm Kỵ Chung Sống": pr(
        t["Ngữ Cảnh Quan Hệ"]?.["Cấm Kỵ Chung Sống"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Cấm Kỵ Chung Sống"] ?? n["Cấm Kỵ Chung Sống"]),
        n["Cấm Kỵ Chung Sống"],
      ),
      "Ước Hẹn Chưa Xong": pr(
        t["Ngữ Cảnh Quan Hệ"]?.["Ước Hẹn Chưa Xong"],
        String(r["Ngữ Cảnh Quan Hệ"]?.["Ước Hẹn Chưa Xong"] ?? n["Ước Hẹn Chưa Xong"]),
        n["Ước Hẹn Chưa Xong"],
      ),
    }),
    String(r["Linh Căn"] ?? lr["Linh Căn"]) === lr["Linh Căn"] &&
      String(t["Linh Căn"] ?? "").trim() &&
      (e["Linh Căn"] = t["Linh Căn"]),
    String(r["Thể Chất"] ?? lr["Thể Chất"]) === lr["Thể Chất"] &&
      String(t["Thể Chất"] ?? "").trim() &&
      (e["Thể Chất"] = t["Thể Chất"]),
    String(r["Công Pháp"] ?? lr["Công Pháp"]) === lr["Công Pháp"] &&
      String(t["Công Pháp"] ?? "").trim() &&
      (e["Công Pháp"] = t["Công Pháp"]),
    String(r["Bản Mệnh Binh Khí"] ?? lr["Bản Mệnh Binh Khí"]) === lr["Bản Mệnh Binh Khí"] &&
      String(t["Bản Mệnh Binh Khí"] ?? "").trim() &&
      (e["Bản Mệnh Binh Khí"] = t["Bản Mệnh Binh Khí"]),
    (e["Danh Sách Thần Thông"] = { ...(r["Danh Sách Thần Thông"] ?? {}), ...(t["Danh Sách Thần Thông"] ?? {}) }),
    e
  );
}
function gr(r, t) {
  return r
    ? {
        Cấp: Math.max(Number(r.Cấp ?? 1), Number(t.Cấp ?? 1)),
        Căn: pr(t.Căn, String(r.Căn ?? ""), ""),
        Chất: pr(t.Chất, String(r.Chất ?? ""), ""),
        Tuổi: pr(t.Tuổi, String(r.Tuổi ?? ""), ""),
        Hệ: pr(t.Hệ, String(r.Hệ ?? ""), ""),
        Pháp: pr(t.Pháp, String(r.Pháp ?? ""), ""),
        Khí: pr(t.Khí, String(r.Khí ?? ""), ""),
        Thông: Array.from(
          new Set(
            [...(r.Thông ?? []), ...(t.Thông ?? [])]
              .map((r) => String(r).trim())
              .filter(Boolean),
          ),
        ),
      }
    : _.cloneDeep(t);
}
function br(r) {
  const t = Math.max(0, Number.isFinite(r) ? r : 0);
  return t <= 20 ? 6 : t <= 60 ? 4 : t <= 120 ? 3 : 2;
}
function dr(r, t) {
  (t < 3 && (r["Tu Vi"] = y(r["Cấp Độ"], r["Tu Vi"], t, 3)),
    (r["Trạng Thái Tu Luyện"] = N(r["Trạng Thái Tu Luyện"], {
      legacyAttemptBreakthrough: r["Thử đột phá"],
      level: r["Cấp Độ"],
      cultivation: r["Tu Vi"],
    })),
    (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]),
    Object.assign(r, A(r, !1)));
}
const _r = r.z
    .object({
      "Đồng Hồ Thế Giới": r.z
        .object({
          "Kỷ nguyên": r.z.string().prefault("Thời đại Mạt Pháp"),
          Năm: r.z.coerce.number().prefault(1),
          Tháng: r.z.coerce
            .number()
            .transform((r) => _.clamp(r, 1, 12))
            .prefault(1),
          Ngày: r.z.coerce
            .number()
            .transform((r) => _.clamp(r, 1, 30))
            .prefault(1),
          Giờ: r.z.string().prefault("Giờ Tý"),
        })
        .prefault({
          "Kỷ nguyên": "Thời đại Mạt Pháp",
          Năm: 1,
          Tháng: 1,
          Ngày: 1,
          Giờ: "Giờ Tý",
        }),
      "Bản Đồ Thế Giới": r.z
        .record(
          r.z.string().describe("Tên Khu Vực"),
          r.z.object({
            layer: r.z.enum(["Thiên Tầng", "Địa Tầng", "Hạ Tầng"]).prefault("Địa Tầng"),
            danger: r.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
            desc: r.z.string().prefault(""),
            connections: r.z.array(r.z.string()).prefault([]),
          }),
        )
        .prefault({}),
      "Địa Chí Thế Giới": r.z
        .record(
          r.z.string().describe("Tên Sự Kiện"),
          r.z.object({
            "Trạng Thái": r.z.string().prefault(""),
            "Sự kiện": r.z.string().prefault(""),
          }),
        )
        .prefault({}),
      "Kho Thế Lực Tông Môn": r.z.record(r.z.string().describe("Tên Tông Môn"), nr).prefault({}),
      "Kho Công Pháp": r.z.record(r.z.string().describe("Tên Công Pháp"), ar).prefault({}),
      "Kho Pháp Bảo": r.z.record(r.z.string().describe("Tên Pháp Bảo"), or).prefault({
        "Trấn Uyên Kiếm": { Giai: "Tiên khí", Loại: "Kiếm" },
        "Song Ngư Bội": {
          Giai: "Bản mệnh",
          Loại: "Ngọc Bội",
          "Đặc tính bản mệnh":
            "Nguyên Huyết Khế Ước、Âm Dương Song Sinh、Khí Linh Hóa Hình、Dữ Chủ Cộng Tu、Sinh Tử Tương Y、Tỏa Huyết Hộ Chủ",
          "Khí linh": "Ngu Tịch Nhan",
        },
      }),
      "Kho Địa Điểm": r.z.record(r.z.string().describe("Tên Địa Điểm"), sr).prefault({
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
        "Huyền Băng Sơn": {
          Vực: "Bắc Minh",
          Loại: "Tông Môn",
          Nguy: 50,
          Đặc: "Huyền Vũ Tông",
          Tư: ["Huyền Băng"],
        },
        "Quy Khư Nhãn": {
          Vực: "Bắc Minh",
          Loại: "Cấm địa",
          Nguy: 99,
          Đặc: "Quy Khư",
          Tư: ["Quy Khư Cảm Ngộ"],
        },
        "Hoàng Tuyền Tích": {
          Vực: "Hạ Tầng",
          Loại: "Di tích",
          Nguy: 90,
          Đặc: "U Minh",
          Tư: ["Hoàng Tuyền Thủy"],
        },
        "Viêm Uyên": {
          Vực: "Hạ Tầng",
          Loại: "Cấm địa",
          Nguy: 95,
          Đặc: "Địa Tâm Hỏa",
          Tư: ["Địa Tâm Hỏa"],
        },
      }),
      "$Tông Môn Suy Đoán": r.z
        .object({
          "Vực Hiện Tại": r.z.string().prefault(""),
          "Thế Lực Chính Hiện Tại": r.z.string().prefault(""),
        })
        .prefault({ "Vực Hiện Tại": "", "Thế Lực Chính Hiện Tại": "" }),
      "Kho Linh Căn": r.z.record(r.z.string().describe("Tên Linh Căn"), cr).prefault({}),
      "Kho Thể Chất": r.z.record(r.z.string().describe("Tên Thể Chất"), ir).prefault({}),
      "Bản Tôn": G,
      "Kho Nhân Vật Hồng Nhan": r.z.record(r.z.string().describe("Tên Nhân Vật"), D).prefault({
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
      "Hồng nhan": r.z.record(r.z.string().describe("Tên Hồng Nhan"), w).prefault({}),
      "NPCĐồ Giám": r.z.record(r.z.string().describe("NPCTên"), B).prefault({}),
      "Danh Sách Nhiệm Vụ": r.z
        .record(r.z.string().describe("Nhiệm VụID"), T)
        .prefault({})
        .transform((r) =>
          _(r)
            .pickBy((r, t) => !!r && !!String(t).trim())
            .mapValues((r, t) => {
              return {
                ...r,
                Tên:
                  mr(r.Tên) ||
                  mr(t) ||
                  ((e = r.Loại),
                  {
                    "Tuyến chính": "Nhiệm vụ tuyến chính",
                    "Tuyến phụ": "Nhiệm vụ phụ",
                    "Mỗi ngày": "Nhiệm vụ mỗi ngày",
                    "Lâm nguy thụ mệnh": "Lâm nguy thụ mệnh",
                    "Khám phá bí cảnh": "Khám phá bí cảnh",
                  }[String(e ?? "").trim()] || "Nhiệm Vụ Chưa Đặt Tên"),
              };
              var e;
            })
            .pickBy((r) => "Đang tiến hành" === r["Trạng Thái"])
            .value(),
        ),
      "Hệ Thống Danh Vọng": H,
      "Hệ Thống Độ Khó": er,
      "Cơ Ngộ Có Thể Tham Gia": r.z
        .array(Y)
        .prefault([])
        .transform((r) => r.filter((r) => !!r.Tên)),
      "Hoàn Cảnh Hiện Tại": r.z.string().prefault(""),
      "_Cài Đặt Hệ Thống": rr,
      "_Độ Hảo CảmSnapshot": r.z
        .record(
          r.z.string().describe("Tên Hồng Nhan"),
          r.z.coerce.number().transform((r) => _.clamp(r, -200, 200)),
        )
        .prefault({}),
    })
    .transform((r) => {
      r["Kho Nhân Vật Hồng Nhan"] = (function (r) {
        const t = _.cloneDeep(r ?? {});
        for (const { canonical: r, aliases: e } of ur) {
          let n = t[r] ? _.cloneDeep(t[r]) : void 0;
          for (const r of e) {
            const e = t[r];
            e && ((n = gr(n, e)), delete t[r]);
          }
          n && (t[r] = n);
        }
        return t;
      })(r["Kho Nhân Vật Hồng Nhan"] ?? {});
      const t = (function (r, t) {
        const e = _.cloneDeep(r ?? {}),
          n = _.cloneDeep(t ?? {});
        for (const { canonical: r, aliases: t } of ur) {
          let a = e[r] ? _.cloneDeep(e[r]) : void 0;
          for (const r of t) {
            const t = e[r];
            t && ((a = zr(a, t)), delete e[r]);
          }
          a && (e[r] = a);
          const o = [n[r], ...t.map((r) => n[r])]
            .map((r) => Number(r))
            .filter((r) => Number.isFinite(r));
          for (const r of t) delete n[r];
          o.length > 0 && (n[r] = o[o.length - 1]);
        }
        return { companions: e, snapshot: n };
      })(r["Hồng nhan"] ?? {}, r["_Độ Hảo CảmSnapshot"] ?? {});
      ((r["Hồng nhan"] = t.companions), (r["_Độ Hảo CảmSnapshot"] = t.snapshot));
      const e = Math.max(
        1,
        Math.floor(Number(r["_Cài Đặt Hệ Thống"]?.["Phiên Bản Hệ Thống Tu Luyện"] ?? 1) || 1),
      );
      !(function (r, t) {
        (t < 3 && (r["Tu Vi"] = y(r["Cấp Độ"], r["Tu Vi"], t, 3)),
          (r["Trạng Thái Tu Luyện"] = N(r["Trạng Thái Tu Luyện"], {
            legacyAttemptBreakthrough: r["Thử đột phá"],
            level: r["Cấp Độ"],
            cultivation: r["Tu Vi"],
          })),
          (r["Thử đột phá"] = "Đang đột phá" === r["Trạng Thái Tu Luyện"]["Giai Đoạn"]),
          Object.assign(r, A(r, !0)));
      })(r["Bản Tôn"], e);
      for (const t of Object.values(r["Hồng nhan"] ?? {})) dr(t, e);
      r["_Cài Đặt Hệ Thống"] = {
        ...(r["_Cài Đặt Hệ Thống"] ?? {}),
        "Phiên Bản Hệ Thống Tu Luyện": 3,
        "_Chữ ký ghi đè trạng thái thủ công": String(r["_Cài Đặt Hệ Thống"]?.["_Chữ ký ghi đè trạng thái thủ công"] ?? ""),
      };
      const n = _.cloneDeep(r["_Độ Hảo CảmSnapshot"] ?? {});
      for (const [t, e] of Object.entries(r["Hồng nhan"] ?? {})) {
        const r = Number(e?.["Độ Hảo Cảm"]);
        if (!Number.isFinite(r)) continue;
        const a = Number(n[t]);
        if (Number.isFinite(a)) {
          const t = br(a);
          e["Độ Hảo Cảm"] = _.clamp(r, a - t, a + t);
        } else e["Độ Hảo Cảm"] = _.clamp(r, -200, 200);
        n[t] = e["Độ Hảo Cảm"];
      }
      return ((r["_Độ Hảo CảmSnapshot"] = _.pickBy(n, (t, e) => _.has(r["Hồng nhan"], e))), r);
    }),
  hr = "__Đạp Nguyệt TầmTiên_mvu_guard_installed__",
  Sr = new Set([
    "Ngưỡng Đột Phá",
    "Giới Hạn Tuổi Thọ",
    "Mô Tả Cảnh Giới",
    "Trạng Thái Tuổi Thọ",
    "Trạng Thái",
    "Tiến Độ",
  ]),
  jr = new Set(["Ngu Tịch", "Ngu Nhan"]),
  yr = new Map(),
  Nr = new Map(),
  vr = [
    "Đồng Hồ Thế Giới",
    "Bản Đồ Thế Giới",
    "Địa Chí Thế Giới",
    "Kho Thế Lực Tông Môn",
    "Kho Công Pháp",
    "Kho Pháp Bảo",
    "Kho Địa Điểm",
    "$Tông Môn Suy Đoán",
    "Kho Linh Căn",
    "Kho Thể Chất",
    "Bản Tôn",
    "Kho Nhân Vật Hồng Nhan",
    "Hồng nhan",
    "NPCĐồ Giám",
    "Danh Sách Nhiệm Vụ",
    "Hệ Thống Danh Vọng",
    "Hệ Thống Độ Khó",
    "Cơ Ngộ Có Thể Tham Gia",
    "Hoàn Cảnh Hiện Tại",
    "_Cài Đặt Hệ Thống",
    "_Độ Hảo CảmSnapshot",
  ];
function Mr(r) {
  let t = String(r || "").trim();
  if (!t) return t;
  (t.startsWith("./") && (t = t.slice(1)),
    t.startsWith("/") && (t = t.replace(/^\/+/, "").replaceAll("/", ".")),
    (t = t
      .replaceAll("：", ":")
      .replaceAll("。", ".")
      .replace(/\s+/g, "")
      .replace(/\.\.+/g, ".")));
  const e = {
    "Đồng Hồ Thế Giới": "Đồng Hồ Thế Giới",
    "Thế GiớiĐịaĐồ": "Bản Đồ Thế Giới",
    "Địa Chí Thế Giới": "Địa Chí Thế Giới",
    "Thế Lực Tông MônLựcKho": "Kho Thế Lực Tông Môn",
    "Công PhápKho": "Kho Công Pháp",
    "PhápKho Pháp Bảo": "Kho Pháp Bảo",
    "ĐịaKho Địa Điểm": "Kho Địa Điểm",
    LinhCănKho: "Kho Linh Căn",
    "Kho Thể Chất": "Kho Thể Chất",
    "Kho Nhân Vật Hồng Nhan": "Kho Nhân Vật Hồng Nhan",
    "Hồng Nhan": "Hồng nhan",
    "Hệ Thống Danh Vọng": "Hệ Thống Danh Vọng",
    "Hệ Thống Độ Khó": "Hệ Thống Độ Khó",
    Nguy險度: "Độ Nguy Hiểm",
    當前區Vực: "Khu Vực Hiện Tại",
    "Tầng Cấp Trực Thuộc": "Tầng Cấp Trực Thuộc",
    "Hoàn Cảnh Hiện Tại": "Hoàn Cảnh Hiện Tại",
    "Cơ Ngộ Có Thể Tham Gia": "Cơ Ngộ Có Thể Tham Gia",
    "Danh Sách Nhiệm Vụ": "Danh Sách Nhiệm Vụ",
  };
  for (const [r, n] of Object.entries(e)) t = t.replaceAll(r, n);
  return (
    t.startsWith("stat_data.") ||
      (vr.some((r) => t === r || t.startsWith(`${r}.`)) &&
        (t = `stat_data.${t}`)),
    t
  );
}
function Ar(r) {
  const t = r.match(/^stat_data\["Hồng nhan"]\.([^./]+)(?=\.|$)/);
  if (t && jr.has(t[1]))
    return r.replace(`stat_data["Hồng nhan"].${t[1]}`, 'stat_data["Hồng nhan"]["Ngu Tịch Nhan"]');
  const e = r.match(/^stat_data\["Kho Nhân Vật Hồng Nhan"]\.([^./]+)(?=\.|$)/);
  return e && jr.has(e[1])
    ? r.replace(`stat_data["Kho Nhân Vật Hồng Nhan"].${e[1]}`, 'stat_data["Kho Nhân Vật Hồng Nhan"]["Ngu Tịch Nhan"]')
    : r;
}
function $r(r, t) {
  if (r.endsWith("Độ Thuần Thục") && "string" == typeof t) {
    const r = t.trim().replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
    if (r.includes("Tiểu thành")) return "Thục luyện";
    if (r.includes("Trung thành")) return "Tinh thông";
    if (r.includes("Đại viên mãn")) return "Viên mãn";
  }
  return t;
}
function Dr(r, t, e) {
  if (
    !(function (r) {
      const t = r.match(
        /^stat_data\.(?:Bản Tôn|Hồng nhan\.[^./]+|NPCĐồ Giám\.[^./]+)\.([^./]+)$/,
      );
      return !!t && Sr.has(t[1]);
    })(t)
  )
    return !1;
  const n = (function (r, t) {
    const e = _.get(t, r);
    if (void 0 !== e) return _.cloneDeep(e);
    const n = _r.safeParse(_.get(t, "stat_data"));
    return n.success ? _.get({ stat_data: n.data }, r) : void 0;
  })(t, e);
  return (
    void 0 !== n &&
    ((r.type = "set"),
    (r.args = [t, JSON.stringify(n)]),
    (r.reason = "Trường dẫn xuất chỉ đọc bị guard ghi đè thànhno-op"),
    !0)
  );
}
function xr(r) {
  if (!Array.isArray(r.args)) return null;
  switch (r.type) {
    case "set":
    case "insert":
      return r.args.length >= 3 ? 2 : r.args.length >= 2 ? 1 : null;
    case "add":
      return r.args.length >= 2 ? 1 : null;
    default:
      return null;
  }
}
function wr(r, t) {
  const e = Number(t);
  if (!Number.isFinite(e) || e < 1) return;
  const n = Math.floor(e),
    a = r.match(/^stat_data\["Hồng nhan"]\.([^./]+)\["Cấp Độ"]$/);
  if (a) return void yr.set(a[1], n);
  const o = r.match(/^stat_data\["Kho Nhân Vật Hồng Nhan"]\.([^./]+)\.Cấp$/);
  o && Nr.set(o[1], n);
}
function Br() {
  const r = window;
  r[hr] ||
    ((r[hr] = !0),
    eventOn(Mvu.events.COMMAND_PARSED, (r, t) => {
      for (const e of t) {
        if (!Array.isArray(e.args) || 0 === e.args.length) continue;
        const t = String(e.args[0] ?? ""),
          n = Ar(Mr(t));
        if ((n && n !== t && (e.args[0] = n), n && Dr(e, n, r))) continue;
        const a = xr(e);
        if (null !== a && e.args.length > a && n) {
          const r = e.args[a],
            t = $r(n, r);
          (_.isEqual(r, t) || (e.args[a] = t), wr(n, t));
        }
      }
    }),
    eventOn(Mvu.events.VARIABLE_UPDATE_ENDED, (r) => {
      !(function (r) {
        for (const [t, e] of yr.entries())
          _.has(r, `stat_data["Hồng nhan"].${t}`) &&
            _.set(r, `stat_data["Hồng nhan"].${t}["Cấp Độ"]`, e);
        for (const [t, e] of Nr.entries())
          _.has(r, `stat_data["Kho Nhân Vật Hồng Nhan"].${t}`) &&
            _.set(r, `stat_data["Kho Nhân Vật Hồng Nhan"].${t}.Cấp`, e);
      })(r);
      const t = _.get(r, "stat_data"),
        e = _r.safeParse(t);
      (yr.clear(),
        Nr.clear(),
        e.success && (_.isEqual(t, e.data) || _.set(r, "stat_data", e.data)));
    }),
    console.info("[Đạp Nguyệt TầmTiên] Guard biến độc lập đã được bật"));
}
$(() => {
  waitGlobalInitialized("Mvu")
    .then(() => Br())
    .catch((r) => console.warn("[Đạp Nguyệt TầmTiên] Đang tải guard biến độc lậpThất bại", r));
});
//# sourceMappingURL=index.js.map
