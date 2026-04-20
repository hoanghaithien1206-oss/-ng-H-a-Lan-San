import { registerMvuSchema as r } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

const e = z;
const t = ['Sơ kỳ', 'Trung kỳ', 'Hậu kỳ', 'Đại viên mãn'];
const n = ['Luyện Khí', 'Trúc Cơ', 'Kim Đan', 'Nguyên Anh', 'Hóa Thần', 'Luyện Hư', 'Hợp Thể', 'Đại Thừa', 'Độ Kiếp', 'Chân Tiên', 'Tiên Vương', 'Tiên Đế'];
const a = [1, 1.18, 1.38, 1.6];
const o = [100, 160, 260, 420, 680, 1100, 1780, 2880, 4660, 7540, 12200, 19740].flatMap(r => a.map(e => Math.round(r * e)));
const c = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2880, 3360, 3840, 4800, 5760, 6720, 7680, 9600, 11520, 13440, 15360, 19200, 23040, 26880, 30720, 38400, 46080, 53760, 61440, 76800, 92160, 107520, 122880, 153600, 184320, 215040, 245760, 307200, 368640, 430080, 491520, 614400, 737280, 860160, 983040];
const i = { 
    1: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2400, 2400, 2400, 4800, 4800, 4800, 4800, 9600, 9600, 9600, 9600, 19200, 19200, 19200, 19200, 38400, 38400, 38400, 38400, 76800, 76800, 76800, 76800, 153600, 153600, 153600, 153600, 307200, 307200, 307200, 307200, 614400, 614400, 614400, 614400], 
    2: o, 
    3: c 
};
const u = [100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 1e3, 1e3, 1e3, 1e3, 2e3, 2e3, 2e3, 2e3, 5e3, 5e3, 5e3, 5e3, 1e4, 1e4, 1e4, 1e4, 5e4, 5e4, 5e4, 5e4, 1e5, 1e5, 1e5, 1e5, 5e5, 5e5, 5e5, 5e5, 2e6, 2e6, 2e6, 2e6, 1e7, 1e7, 1e7, 1e7];

const s = { Phàm: 'Phàm', 'Phàm giai': 'Phàm', 'Phàm cấp': 'Phàm', 'Phàm phẩm': 'Phàm', Hoàng: 'Hoàng', 'Hoàng giai': 'Hoàng', 'Hoàng cấp': 'Hoàng', 'Hoàng phẩm': 'Hoàng', Huyền: 'Huyền', 'Huyền giai': 'Huyền', 'Huyền cấp': 'Huyền', 'Huyền phẩm': 'Huyền', Địa: 'Địa', 'Địa giai': 'Địa', 'Địa cấp': 'Địa', 'Địa phẩm': 'Địa', Thiên: 'Thiên', 'Thiên giai': 'Thiên', 'Thiên cấp': 'Thiên', 'Thiên phẩm': 'Thiên', Tiên: 'Tiên', 'Tiên giai': 'Tiên', 'Tiên cấp': 'Tiên', 'Tiên phẩm': 'Tiên', Thánh: 'Thánh', 'Thánh giai': 'Thánh', 'Thánh cấp': 'Thánh', 'Thánh phẩm': 'Thánh', 'Tiên thiên': 'Tiên thiên', 'Tiên thiên giai': 'Tiên thiên', 'Tiên thiên cấp': 'Tiên thiên' };
const l = { 'Nhập môn': 'Nhập môn', 'Sơ cấp': 'Nhập môn', 'Mới học': 'Nhập môn', 'Tân thủ': 'Nhập môn', 'Thục luyện': 'Thục luyện', 'Trung cấp': 'Thục luyện', 'Nhàn thục': 'Thục luyện', 'Tiểu thành': 'Thục luyện', 'Tinh thông': 'Tinh thông', 'Cao cấp': 'Tinh thông', 'Tinh trạm': 'Tinh thông', 'Đại thành': 'Đại thành', 'Đại sư': 'Đại thành', 'Tông sư': 'Đại thành', 'Viên mãn': 'Viên mãn', 'Hoàn mỹ': 'Viên mãn', 'Cực trí': 'Viên mãn', 'Hóa cảnh': 'Hóa cảnh', 'Hóa thần': 'Hóa cảnh', 'Phản phác quy chân': 'Hóa cảnh', 'Xuất thần nhập hóa': 'Hóa cảnh' };

const f = e.z.object({
    "Tên": e.z.string().prefault(''),
    "Mô tả": e.z.string().prefault(''),
    "Phẩm giai": e.z.string().prefault(''),
    "Số lượng": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(1)
});

const p = new Set(['Linh thạch', 'Hạ phẩm linh thạch']);

function m(r) { return String(r ?? '').trim().replace(/\s+/g, ''); }
function g(r, e) { return [m(r), m(e?.["Tên"])].filter(Boolean).some(r => p.has(r)); }

function b(r, ...e) {
    let t = Number(r);
    (!Number.isFinite(t) || t < 0) && (t = 0);
    const n = e.map(r => {
        const e = function (r) {
            const e = {};
            let t = 0;
            for (const [n, a] of Object.entries(r ?? {})) {
                if (a) {
                    if (g(n, a)) {
                        const r = Number(a["Số lượng"]);
                        Number.isFinite(r) && r > 0 && (t += r);
                        continue;
                    }
                    e[n] = a;
                }
            }
            return { inventory: e, spiritStone: t };
        }(r);
        return t += e.spiritStone, e.inventory;
    });
    return { spiritStone: t, inventories: n };
}

const d = { 'Đang tu luyện': 'Đang tu luyện', 'Bế quan': 'Đang tu luyện', 'Đả tọa': 'Đang tu luyện', 'Điều tức': 'Đang tu luyện', 'Đang bình cảnh': 'Đang bình cảnh', 'Bình cảnh kỳ': 'Đang bình cảnh', 'Kẹt ải': 'Đang bình cảnh', 'Bị cản': 'Đang bình cảnh', 'Đang đột phá': 'Đang đột phá', 'Trùng quan': 'Đang đột phá', 'Phá cảnh': 'Đang đột phá', 'Thử đột phá': 'Đang đột phá', 'Đang củng cố': 'Đang củng cố', 'Căn cơ chưa vững': 'Đang củng cố', 'Đang ép cảnh': 'Đang ép cảnh', 'Ép tu vi': 'Đang ép cảnh', 'Giấu tài dưỡng cảnh': 'Đang ép cảnh' };
const h = { 'Không': 'Không', '': 'Không', 'Chưa đột phá': 'Không', 'Thành công': 'Thành công', 'Phá cảnh thành công': 'Thành công', 'Vượt qua': 'Thành công', 'Thất bại': 'Thất bại', 'Phá cảnh thất bại': 'Thất bại', 'Trùng quan thất bại': 'Thất bại' };

const S = e.z.object({
    "Giai đoạn": e.z.string().transform(r => d[String(r).trim()] || 'Đang tu luyện').prefault('Đang tu luyện'),
    "Nguyên nhân bình cảnh": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Mục tiêu đột phá": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Kết quả lần trước": e.z.string().transform(r => h[String(r).trim()] || 'Không').prefault('Không')
}).prefault({ "Giai đoạn": 'Đang tu luyện', "Nguyên nhân bình cảnh": '', "Mục tiêu đột phá": '', "Kết quả lần trước": 'Không' });

function j(r) {
    const e = _.clamp(Math.floor(Number(r) || 1), 1, c.length), a = Math.floor((e - 1) / 4);
    return `${n[a] ?? 'Luyện Khí'}${t[(e - 1) % 4] ?? 'Sơ kỳ'}`;
}

function M(r, e = 3) {
    const t = function (r = 3) {
        if (!0 === r) return i[1];
        if (!1 === r) return i[3];
        const e = Math.max(1, Math.floor(Number(r) || 3));
        return i[e] ?? c;
    }(e);
    return t[_.clamp(Math.floor(Number(r) || 1), 1, t.length) - 1] ?? t[0] ?? 100;
}

function N(r, e, t = 1, n = 3) {
    const a = Number(e);
    if (!Number.isFinite(a) || a <= 0) return 0;
    const o = M(r, t), c = M(r, n);
    if (o <= 0 || o === c) return Math.round(a);
    const i = a / o, u = Math.round(i * c);
    return Math.max(0, u);
}

function y(r, e) {
    const t = S.parse(r ?? {}), n = M(e.level);
    let a = t["Giai đoạn"];
    e.legacyAttemptBreakthrough || 'Đang đột phá' === a ? a = 'Đang đột phá' : 'Đang tu luyện' === a && e.cultivation >= n && (a = 'Đang bình cảnh');
    const o = e.level < c.length ? j(e.level + 1) : t["Mục tiêu đột phá"], i = ['Đang bình cảnh', 'Đang đột phá', 'Đang ép cảnh'].includes(a);
    return { "Giai đoạn": a, "Nguyên nhân bình cảnh": i ? t["Nguyên nhân bình cảnh"] : '', "Mục tiêu đột phá": i ? t["Mục tiêu đột phá"] || o : '', "Kết quả lần trước": t["Kết quả lần trước"] };
}

const v = e.z.object({
    "Tên": e.z.string().prefault(''),
    "Mô tả": e.z.string().prefault(''),
    "Loại": e.z.enum(['Công pháp', 'Thần thông', 'Bí thuật']).prefault('Thần thông'),
    "Phẩm giai": e.z.string().transform(r => s[r] || 'Phàm').catch('Phàm'),
    "Độ thuần thục": e.z.string().transform(r => function (r) {
        const e = String(r ?? '').trim().replace(/^["'“”‘’]+|["'“”‘’]+$/g, '');
        return l[e] ? l[e] : e.includes('Tiểu thành') ? 'Thục luyện' : e.includes('Trung thành') ? 'Tinh thông' : e.includes('Đại viên mãn') ? 'Viên mãn' : 'Nhập môn';
    }(r)).catch('Nhập môn'),
    "Thời gian lĩnh ngộ": e.z.coerce.number().catch(() => Date.now()),
    "Cấp độ uy lực": e.z.coerce.number().optional()
}).transform(r => {
    if (!r["Cấp độ uy lực"] || 0 === r["Cấp độ uy lực"]) {
        const e = { 'Nhập môn': 1, 'Thục luyện': 2, 'Tinh thông': 3, 'Đại thành': 4, 'Viên mãn': 5, 'Hóa cảnh': 6 },
            t = { 'Phàm': 1, 'Hoàng': 2, 'Huyền': 3, 'Địa': 4, 'Thiên': 5, 'Tiên': 6, 'Thánh': 7, 'Tiên thiên': 8 }[r["Phẩm giai"]] || 1,
            n = e[r["Độ thuần thục"]] || 1;
        return { ...r, "Cấp độ uy lực": 10 * t + n };
    }
    return r;
});

const x = e.z.record(e.z.string().describe('Tên vật phẩm'), f).prefault({}).transform(r => _.pickBy(r, ({ "Số lượng": r }) => r > 0));

function D(r, e = !1) {
    const t = r["Cấp độ"], n = M(t), a = u[t - 1] ?? 100, o = {
        "Ngưỡng đột phá": n, "Giới hạn thọ nguyên": a, "Mô tả cảnh giới": j(t), "Trạng thái thọ nguyên": `${r["Số năm đã sống"]}/${a}`,
        "Trạng thái": function (r, e, t) {
            const n = r?.["Giai đoạn"] || 'Đang tu luyện';
            return 'Đang đột phá' === n ? 'Đang đột phá' : 'Đang củng cố' === n ? 'Đang củng cố' : 'Đang ép cảnh' === n ? 'Đang ép cảnh' : 'Đang bình cảnh' === n || e >= t ? 'Bình cảnh kỳ' : 'Đang tu luyện';
        }(r["Trạng thái tu luyện"], r["Tu vi"], n),
        "Tiến độ": `${(100 * (n > 0 ? _.clamp(r["Tu vi"] / n, 0, 1) : 0)).toFixed(1)}%`
    };
    if (!e) return o;
    const c = function (r) {
        const e = Math.floor((r - 1) / 4), t = (r - 1) % 4, n = Math.pow(10, e + 1), a = .2 * n * t;
        return Math.round(n + a);
    }(t), i = Object.values(r["Danh sách thần thông"] || {}), s = c + (i.length > 0 ? Math.max(...i.map(r => r["Cấp độ uy lực"] || 0)) : 0) + (() => {
        const e = r["Thể chất"] || '';
        return e.includes('Thần') ? 500 : e.includes('Thánh') ? 200 : e.includes('Đạo') ? 100 : e.includes('Linh') ? 50 : 0;
    })();
    return { ...o, "Giá trị chiến lực": s };
}

const B = e.z.object({
    "Cấp": e.z.coerce.number().transform(r => _.clamp(r, 1, 48)),
    "Căn": e.z.string().describe('Linh căn'),
    "Chất": e.z.string().describe('Thể chất'),
    "Tuổi": e.z.string().describe('Tuổi tác'),
    "Thuộc": e.z.string().describe('Trực thuộc'),
    "Pháp": e.z.string().describe('Công pháp'),
    "Khí": e.z.string().describe('Bản mệnh binh khí'),
    "Thông": e.z.array(e.z.string()).prefault([])
});

const k = e.z.object({
    "Cảm xúc hiện tại": e.z.string().prefault(''),
    "Lý do thái độ": e.z.string().prefault(''),
    "Mong muốn quan hệ": e.z.string().prefault(''),
    "Cấm kỵ chung sống": e.z.string().prefault(''),
    "Hẹn ước chưa dứt": e.z.string().prefault('')
}).prefault({});

const A = e.z.object({
    "Cấp độ": e.z.coerce.number().transform(r => _.clamp(r, 1, 48)).prefault(1),
    "Tu vi": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Linh căn": e.z.string().prefault('Ngũ hành tạp linh căn'),
    "Thể chất": e.z.string().prefault('Phàm thể'),
    "Công pháp": e.z.string().prefault('Không'),
    "Bản mệnh binh khí": e.z.string().prefault('Không'),
    "Danh sách thần thông": e.z.record(e.z.string().describe('Tên thần thông'), v).prefault({}),
    "Linh thạch": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Số năm đã sống": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Thử đột phá": e.z.boolean().prefault(!1),
    "Trạng thái tu luyện": S,
    "Độ hảo cảm": e.z.coerce.number().transform(r => _.clamp(r, -200, 200)).prefault(0),
    "Quan hệ": e.z.string().prefault('Người lạ'),
    "Ngữ cảnh quan hệ": k
}).prefault({ "Cấp độ": 1, "Tu vi": 0, "Linh căn": 'Ngũ hành tạp linh căn', "Thể chất": 'Phàm thể', "Công pháp": 'Không', "Bản mệnh binh khí": 'Không', "Danh sách thần thông": {}, "Linh thạch": 0, "Số năm đã sống": 0, "Thử đột phá": !1, "Trạng thái tu luyện": { "Giai đoạn": 'Đang tu luyện', "Nguyên nhân bình cảnh": '', "Mục tiêu đột phá": '', "Kết quả lần trước": 'Không' }, "Độ hảo cảm": 0, "Quan hệ": 'Người lạ', "Ngữ cảnh quan hệ": {} }).transform(r => {
    r["Trạng thái tu luyện"] = y(r["Trạng thái tu luyện"], { legacyAttemptBreakthrough: r["Thử đột phá"], level: r["Cấp độ"], cultivation: r["Tu vi"] }), r["Thử đột phá"] = 'Đang đột phá' === r["Trạng thái tu luyện"]["Giai đoạn"];
    const e = D(r, !1);
    return { ...r, ...e };
});

const F = e.z.object({
    "Cấp độ": e.z.coerce.number().transform(r => _.clamp(r, 1, 48)).prefault(1),
    "Tông môn hiện tại": e.z.string().prefault('Tán tu'),
    "Ghi chú": e.z.string().prefault('')
});

const w = { 'Phi chiến đấu': 'Phi chiến đấu', 'Hòa bình': 'Phi chiến đấu', 'An toàn': 'Phi chiến đấu', 'Thoát chiến': 'Phi chiến đấu', 'Đối trĩ': 'Đối trĩ', 'Cảnh giác': 'Đối trĩ', 'Giằng co': 'Đối trĩ', 'Nhìn nhau': 'Đối trĩ', 'Ác chiến': 'Ác chiến', 'Chiến đấu': 'Ác chiến', 'Giao chiến': 'Ác chiến', 'Chém giết': 'Ác chiến', 'Trọng thương': 'Trọng thương', 'Bị thương': 'Trọng thương', 'Thương nặng': 'Trọng thương', 'Sắp chết': 'Sắp chết', 'Hấp hối': 'Sắp chết', 'Nguy kịch': 'Sắp chết' };
const O = { 'Không thương': 'Không thương', 'Không': 'Không thương', 'Hoàn hảo': 'Không thương', 'Khỏe mạnh': 'Không thương', 'Thương nhẹ': 'Thương nhẹ', 'Hơi xước': 'Thương nhẹ', 'Trọng thương': 'Trọng thương', 'Thương nặng': 'Trọng thương', 'Sắp chết': 'Sắp chết', 'Hấp hối': 'Sắp chết', 'Nguy kịch': 'Sắp chết' };
const V = { 'Nghiền ép': 'Nghiền ép', 'Áp đảo': 'Nghiền ép', 'Miểu sát': 'Nghiền ép', 'Bón hành': 'Nghiền ép', 'Ưu thế': 'Ưu thế', 'Chiếm ưu': 'Ưu thế', 'Thượng phong': 'Ưu thế', 'Có lợi': 'Ưu thế', 'Ngang tài ngang sức': 'Ngang tài ngang sức', 'Cân bằng': 'Ngang tài ngang sức', 'Hòa nhau': 'Ngang tài ngang sức', 'Kẻ tám lạng người nửa cân': 'Ngang tài ngang sức', 'Lạc hậu': 'Lạc hậu', 'Yếu thế': 'Yếu thế', 'Hạ phong': 'Yếu thế', 'Bất lợi': 'Yếu thế', 'Tuyệt vọng': 'Tuyệt vọng', 'Chắc chắn chết': 'Tuyệt vọng', 'Bị nghiền ép': 'Tuyệt vọng' };
const Z = { 'Hoàn hảo': 'Hoàn hảo', 'Không thương': 'Hoàn hảo', 'Khỏe mạnh': 'Hoàn hảo', 'Toàn thịnh': 'Hoàn hảo', 'Thương nhẹ': 'Thương nhẹ', 'Trọng thương': 'Trọng thương', 'Sắp chết': 'Sắp chết', 'Đã chết': 'Đã chết', 'Tử vong': 'Đã chết', 'Bị giết': 'Đã chết', 'Trận vong': 'Đã chết' };
const C = { 'Không': 'Không', '': 'Không', 'Không kiếp': 'Không', 'Lôi kiếp': 'Lôi kiếp', 'Thiên lôi': 'Lôi kiếp', 'Lôi': 'Lôi kiếp', 'Tâm kiếp': 'Tâm kiếp', 'Tâm ma': 'Tâm kiếp', 'Ma kiếp': 'Tâm kiếp', 'Thiên kiếp': 'Thiên kiếp', 'Đại kiếp': 'Thiên kiếp', 'Tình kiếp': 'Tình kiếp', 'Tình quan': 'Tình kiếp', 'Nhân quả kiếp': 'Nhân quả kiếp', 'Nhân quả': 'Nhân quả kiếp', 'Hồng trần kiếp': 'Hồng trần kiếp', 'Hồng trần': 'Hồng trần kiếp', 'Luân hồi kiếp': 'Luân hồi kiếp', 'Luân hồi': 'Luân hồi kiếp' };
const P = { 'Không': 'Không', 'Không kiếp': 'Không', 'Tiểu kiếp': 'Tiểu kiếp', 'Nhỏ': 'Tiểu kiếp', 'Sơ cấp': 'Tiểu kiếp', 'Trung kiếp': 'Trung kiếp', 'Trung': 'Trung kiếp', 'Trung cấp': 'Trung kiếp', 'Đại kiếp': 'Đại kiếp', 'Lớn': 'Đại kiếp', 'Cao cấp': 'Đại kiếp', 'Thiên phạt': 'Thiên phạt', 'Thiên': 'Thiên phạt', 'Cực': 'Thiên phạt', 'Thiên đạo': 'Thiên phạt' };
const U = { 'Không': 'Không', '': 'Không', 'Chưa độ kiếp': 'Không', 'Thành công': 'Thành công', 'Vượt qua': 'Thành công', 'Độ qua': 'Thành công', 'Thất bại': 'Thất bại', 'Chưa qua': 'Thất bại' };

const q = e.z.object({
    "Đang chiến đấu": e.z.boolean().prefault(!1),
    "Trạng thái hiện tại": e.z.string().transform(r => w[r] || 'Phi chiến đấu').prefault('Phi chiến đấu'),
    "Giá trị linh lực": e.z.coerce.number().transform(r => _.clamp(r, 0, 100)).prefault(100),
    "Cấp độ thương thế": e.z.string().transform(r => O[r] || 'Không thương').prefault('Không thương'),
    "Ác chủ bài đã dùng": e.z.array(e.z.string()).prefault([]),
    "Hiệp chiến đấu": e.z.coerce.number().prefault(0)
}).prefault({ "Đang chiến đấu": !1, "Trạng thái hiện tại": 'Phi chiến đấu', "Giá trị linh lực": 100, "Cấp độ thương thế": 'Không thương', "Ác chủ bài đã dùng": [], "Hiệp chiến đấu": 0 });

const I = e.z.object({
    "Tên": e.z.string().prefault('Kẻ địch chưa biết'),
    "Cảnh giới": e.z.string().prefault('Chưa biết'),
    "Đánh giá chiến lực": e.z.string().transform(r => V[r] || 'Ngang tài ngang sức').prefault('Ngang tài ngang sức'),
    "Trạng thái": e.z.string().transform(r => Z[r] || 'Hoàn hảo').prefault('Hoàn hảo'),
    "Đặc điểm": e.z.string().prefault('')
});

const E = e.z.object({
    "Đang độ kiếp": e.z.boolean().prefault(!1),
    "Loại kiếp": e.z.string().transform(r => C[r] || 'Không').prefault('Không'),
    "Cấp độ kiếp nạn": e.z.string().transform(r => P[r] || 'Không').prefault('Không'),
    "Giai đoạn hiện tại": e.z.coerce.number().transform(r => _.clamp(r, 0, 9)).prefault(0),
    "Tổng số giai đoạn": e.z.coerce.number().transform(r => _.clamp(r, 0, 9)).prefault(0),
    "Chịu đựng kiếp lực": e.z.coerce.number().transform(r => _.clamp(r, 0, 100)).prefault(100),
    "Đã dùng hộ đạo": e.z.array(e.z.string()).prefault([]),
    "Mô tả kiếp nạn": e.z.string().prefault(''),
    "Nguyên nhân kích hoạt": e.z.string().prefault(''),
    "Kết quả độ kiếp lần trước": e.z.string().transform(r => U[r] || 'Không').prefault('Không'),
    "Hồi chiêu độ kiếp": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Kỷ lục trừng phạt thất bại": e.z.string().prefault('')
}).prefault({ "Đang độ kiếp": !1, "Loại kiếp": 'Không', "Cấp độ kiếp nạn": 'Không', "Giai đoạn hiện tại": 0, "Tổng số giai đoạn": 0, "Chịu đựng kiếp lực": 100, "Đã dùng hộ đạo": [], "Mô tả kiếp nạn": '', "Nguyên nhân kích hoạt": '', "Kết quả độ kiếp lần trước": 'Không', "Hồi chiêu độ kiếp": 0, "Kỷ lục trừng phạt thất bại": '' }).transform(r => r["Đang độ kiếp"] ? { ...r, "Cấp độ kiếp nạn": 'Không' === r["Cấp độ kiếp nạn"] ? 'Tiểu kiếp' : r["Cấp độ kiếp nạn"], "Giai đoạn hiện tại": _.clamp(r["Giai đoạn hiện tại"], 0, 9), "Tổng số giai đoạn": _.clamp(Math.max(r["Tổng số giai đoạn"] || 3, r["Giai đoạn hiện tại"], 1), 1, 9) } : { ...r, "Loại kiếp": 'Không', "Cấp độ kiếp nạn": 'Không', "Giai đoạn hiện tại": 0, "Tổng số giai đoạn": 0, "Mô tả kiếp nạn": '', "Nguyên nhân kích hoạt": '' });

const G = e.z.object({
    "Khu vực hiện tại": e.z.string().prefault('Vùng đất chưa biết'),
    "Tầng trực thuộc": e.z.string().prefault('Địa tầng'),
    "Mô tả môi trường": e.z.string().prefault(''),
    "Độ nguy hiểm": e.z.coerce.number().prefault(10),
    "Lối đi khả dụng": e.z.array(e.z.string()).prefault([]),
    "Thông tin điều hướng": e.z.string().prefault('')
}).prefault({ "Khu vực hiện tại": 'Vùng đất chưa biết', "Tầng trực thuộc": 'Địa tầng', "Mô tả môi trường": '', "Độ nguy hiểm": 10, "Lối đi khả dụng": [], "Thông tin điều hướng": '' });

const H = e.z.object({
    "Họ tên": e.z.string().prefault('Vô danh thị'),
    "Tông môn": e.z.string().prefault('Tán tu'),
    "Xuất thân": e.z.string().prefault('Phàm nhân')
}).prefault({ "Họ tên": 'Vô danh thị', "Tông môn": 'Tán tu', "Xuất thân": 'Phàm nhân' });

const J = e.z.object({
    "Cấp độ": e.z.coerce.number().transform(r => _.clamp(r, 1, 48)).prefault(1),
    "Tu vi": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Linh căn": e.z.string().prefault('Ngũ hành tạp linh căn'),
    "Thể chất": e.z.string().prefault('Phàm thể'),
    "Công pháp": e.z.string().prefault('Không'),
    "Bản mệnh binh khí": e.z.string().prefault('Không'),
    "Danh sách thần thông": e.z.record(e.z.string().describe('Tên thần thông'), v).prefault({}),
    "Linh thạch": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Số năm đã sống": e.z.coerce.number().transform(r => Math.max(0, r)).prefault(0),
    "Thử đột phá": e.z.boolean().prefault(!1),
    "Trạng thái tu luyện": S,
    "Hành tung": G,
    "Danh tính": H,
    "Ba lô": x,
    "Pháp bảo": x,
    "Túi tạp vật": x,
    "Trạng thái chiến đấu": q,
    "Kẻ địch hiện tại": e.z.array(I).prefault([]),
    "Trạng thái độ kiếp": E
}).prefault({ "Cấp độ": 1, "Tu vi": 0, "Linh căn": 'Ngũ hành tạp linh căn', "Thể chất": 'Phàm thể', "Công pháp": 'Không', "Bản mệnh binh khí": 'Không', "Danh sách thần thông": {}, "Linh thạch": 0, "Số năm đã sống": 0, "Thử đột phá": !1, "Trạng thái tu luyện": { "Giai đoạn": 'Đang tu luyện', "Nguyên nhân bình cảnh": '', "Mục tiêu đột phá": '', "Kết quả lần trước": 'Không' }, "Hành tung": { "Khu vực hiện tại": 'Vùng đất chưa biết', "Tầng trực thuộc": 'Địa tầng', "Mô tả môi trường": '', "Độ nguy hiểm": 10, "Lối đi khả dụng": [], "Thông tin điều hướng": '' }, "Danh tính": { "Họ tên": 'Vô danh thị', "Tông môn": 'Tán tu', "Xuất thân": 'Phàm nhân' }, "Ba lô": {}, "Pháp bảo": {}, "Túi tạp vật": {}, "Trạng thái chiến đấu": { "Đang chiến đấu": !1, "Trạng thái hiện tại": 'Phi chiến đấu', "Giá trị linh lực": 100, "Cấp độ thương thế": 'Không thương', "Ác chủ bài đã dùng": [], "Hiệp chiến đấu": 0 }, "Kẻ địch hiện tại": [], "Trạng thái độ kiếp": { "Đang độ kiếp": !1, "Loại kiếp": 'Không', "Cấp độ kiếp nạn": 'Không', "Giai đoạn hiện tại": 0, "Tổng số giai đoạn": 0, "Chịu đựng kiếp lực": 100, "Đã dùng hộ đạo": [], "Mô tả kiếp nạn": '', "Nguyên nhân kích hoạt": '', "Kết quả độ kiếp lần trước": 'Không', "Hồi chiêu độ kiếp": 0, "Kỷ lục trừng phạt thất bại": '' } }).transform(r => {
    const e = b(r["Linh thạch"], r["Ba lô"], r["Túi tạp vật"]), [t, n] = e.inventories;
    r["Linh thạch"] = e.spiritStone, r["Ba lô"] = t ?? {}, r["Túi tạp vật"] = n ?? {}, r["Trạng thái tu luyện"] = y(r["Trạng thái tu luyện"], { legacyAttemptBreakthrough: r["Thử đột phá"], level: r["Cấp độ"], cultivation: r["Tu vi"] }), r["Thử đột phá"] = 'Đang đột phá' === r["Trạng thái tu luyện"]["Giai đoạn"];
    const a = D(r, !0);
    return { ...r, ...a };
});

const K = { 'Đang tiến hành': 'Đang tiến hành', 'Xử lý': 'Đang tiến hành', 'Chưa hoàn thành': 'Đang tiến hành', 'Chờ hoàn thành': 'Đang tiến hành', 'Chưa bắt đầu': 'Đang tiến hành', 'Đã nhận': 'Đang tiến hành', 'Tiếp nhận': 'Đang tiến hành', active: 'Đang tiến hành', 'Đã hoàn thành': 'Đã hoàn thành', 'Hoàn thành': 'Đã hoàn thành', 'Đạt được': 'Đã hoàn thành', 'Đã kết thúc': 'Đã hoàn thành', 'Kết thúc': 'Đã hoàn thành', done: 'Đã hoàn thành', complete: 'Đã hoàn thành', completed: 'Đã hoàn thành', 'Đã thất bại': 'Đã thất bại', 'Thất bại': 'Đã thất bại', 'Hủy bỏ': 'Đã thất bại', 'Chấm dứt': 'Đã thất bại', 'Từ bỏ': 'Đã thất bại', 'Quá giờ thất bại': 'Đã thất bại', failed: 'Đã thất bại', fail: 'Đã thất bại' };
const L = { 'Tuyến chính': 'Tuyến chính', 'Nhiệm vụ chính': 'Tuyến chính', main: 'Tuyến chính', 'Tuyến phụ': 'Tuyến phụ', 'Nhiệm vụ phụ': 'Tuyến phụ', side: 'Tuyến phụ', sidequest: 'Tuyến phụ', 'Hằng ngày': 'Hằng ngày', 'Thường ngày': 'Hằng ngày', 'Nhiệm vụ hằng ngày': 'Hằng ngày', daily: 'Hằng ngày', 'Cứu nguy': 'Cứu nguy', 'Khẩn cấp': 'Cứu nguy', 'Nhiệm vụ khẩn cấp': 'Cứu nguy', urgent: 'Cứu nguy', 'Khám phá bí cảnh': 'Khám phá bí cảnh', 'Bí cảnh': 'Khám phá bí cảnh', 'Khám phá': 'Khám phá bí cảnh', 'Nhiệm vụ bí cảnh': 'Khám phá bí cảnh', dungeon: 'Khám phá bí cảnh', 'Tu luyện': 'Tuyến phụ', 'Nhiệm vụ tu luyện': 'Tuyến phụ' };

const Q = e.z.object({
    "Tên": e.z.string().prefault(''),
    "Loại": e.z.string().transform(r => L[String(r).trim()] || 'Tuyến phụ').prefault('Tuyến chính'),
    "Mục tiêu": e.z.string().prefault(''),
    "Trạng thái": e.z.string().transform(r => K[String(r).trim()] || 'Đang tiến hành').prefault('Đang tiến hành'),
    "Thông tin bí cảnh": e.z.object({
        "Vực": e.z.enum(['Thiên tầng', 'Thần Châu', 'Đông Thương', 'Nam Viêm', 'Tây Canh', 'Bắc Minh', 'Hạ tầng', 'Tứ Hải']).optional(),
        "Nguy": e.z.coerce.number().transform(r => _.clamp(r, 0, 100)).optional(),
        "Đặc": e.z.string().optional(),
        "Thưởng": e.z.union([e.z.array(e.z.string()), e.z.string().transform(r => r ? [r] : [])]).prefault([]),
        "Hạn": e.z.string().optional()
    }).optional(),
    "Thời gian tạo": e.z.union([e.z.coerce.number(), e.z.string().transform(() => Date.now())]).prefault(() => Date.now())
});

const R = e.z.object({
    "Giá trị": e.z.coerce.number().transform(r => _.clamp(r, -100, 100)).prefault(0),
    "Quan hệ": e.z.string().prefault('Xa lạ'),
    "Thời gian cập nhật": e.z.coerce.number().prefault(() => Date.now())
});

const T = e.z.record(e.z.string().describe('Tên thế lực'), R).prefault({}).transform(r => _(r).mapValues(r => {
    const e = r["Giá trị"];
    let t;
    t = e >= 80 ? 'Đồng minh' : e >= 60 ? 'Hữu thiện' : e >= 30 ? 'Hữu hảo' : e >= 10 ? 'Trung lập thiên vị' : e >= -10 ? 'Trung lập' : e >= -30 ? 'Trung lập chán ghét' : e >= -60 ? 'Địch đối' : e >= -80 ? 'Cừu hận' : 'Bất tử bất hưu';
    const n = r["Quan hệ"] && 'Xa lạ' !== r["Quan hệ"] ? r["Quan hệ"] : t;
    return { ...r, "Quan hệ": n };
}).value());

const W = { 'Khám phá': 'Khám phá', 'Nhiệm vụ': 'Nhiệm vụ', 'Giao dịch': 'Giao dịch', 'Kết giao': 'Kết giao', 'Tranh đoạt': 'Tranh đoạt', 'Tu luyện': 'Tu luyện', 'Hồng nhan': 'Hồng nhan', 'Ngẫu nhiên': 'Ngẫu nhiên', 'Hành động': 'Khám phá', 'Mạo hiểm': 'Khám phá', 'Hằng ngày': 'Nhiệm vụ', 'Tương tác hằng ngày': 'Hồng nhan', 'Chiến đấu': 'Tranh đoạt', 'Khiêu chiến': 'Tranh đoạt', 'Xã giao': 'Kết giao', 'Tương tác': 'Kết giao', 'Mời mọc': 'Kết giao', 'Kỳ ngộ': 'Khám phá', 'Bí cảnh': 'Khám phá', 'Tầm bảo': 'Khám phá', 'Thu mua': 'Giao dịch', 'Đổi vật': 'Giao dịch', 'Mua bán': 'Giao dịch', 'Ủy thác': 'Nhiệm vụ', 'Treo thưởng': 'Nhiệm vụ', 'Cứu nguy': 'Nhiệm vụ', 'Tuyến phụ': 'Nhiệm vụ', 'Tuyến chính': 'Nhiệm vụ', 'Song tu': 'Hồng nhan', 'Thân mật': 'Hồng nhan', 'Trêu ghẹo': 'Hồng nhan', random: 'Ngẫu nhiên' };

const X = [
    { type: 'Hồng nhan', pattern: /Hồng nhan|Giai nhân|Đạo lữ|Song tu|Ôn tình|Riêng tư|Ôm nhau|Làm bạn|Trêu ghẹo|Triền miên|Chung chăn|Đồng miên|Vong ưu|Thính vũ|Thanh huyền|Vãn đường|Vân thường|Mộng yểu lãnh|Sóc ly diên|A diên|Huyết thủ phi diên|Ngu tịch|Ngu nhan|Ngu tịch nhan/i },
    { type: 'Tu luyện', pattern: /Tu luyện|Bế quan|Đả tọa|Thổ nạp|Xung quan|Phá cảnh|Đột phá|Ép cảnh|Củng cố|Ngộ đạo|Độ kiếp|Căn cơ|Đan dược|Linh trận|Tham ngộ/i },
    { type: 'Giao dịch', pattern: /Phường thị|Giao dịch|Mua bán|Thu mua|Đấu giá|Tiệm đan dược|Thương hội|Tiếp tế|Bán ra|Đổi lấy/i },
    { type: 'Tranh đoạt', pattern: /Tranh đoạt|Đoạt lấy|Cướp đoạt|Chặn giết|Đấu pháp|Chém giết|Vây công|Truy sát|Nghênh chiến|Cường địch|Ma tu|Xung đột|Thủ lôi|Tỷ thí/i },
    { type: 'Nhiệm vụ', pattern: /Nhiệm vụ|Ủy thác|Treo thưởng|Cầu viện|Hộ tống|Điều tra|Truy xét|Nghiên cứu|Giải cứu|Lâm nguy|Cấp báo|Thu dọn|Hậu sự|Phó ước|Phục mệnh/i },
    { type: 'Kết giao', pattern: /Kết giao|Bái phỏng|Mời mọc|Gặp mặt|Quen biết|Lôi kéo|Thăm dò|Cầu kiến|Thăm bạn|Dự tiệc|Luận đạo|Cùng dạo/i },
    { type: 'Ngẫu nhiên', pattern: /Tùy duyên|Ngẫu nhiên|Thử vận may|Phó mặc cho trời/i }
];

function Y(r, e) {
    const t = W[r];
    if (t) return t;
    const n = Object.values(e).map(r => function (r) { return String(r ?? '').trim(); }(r)).filter(Boolean).join('｜');
    for (const r of X) if (r.pattern.test(n)) return r.type;
    return 'Khám phá';
}

const rr = e.z.object({
    "Tên": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Nguồn gốc": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Loại": e.z.coerce.string().transform(r => String(r).trim()).prefault('Khám phá'),
    "Mô tả": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Kỳ vọng phần thưởng": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Đánh giá rủi ro": e.z.coerce.string().transform(r => String(r).trim()).prefault(''),
    "Thời hạn": e.z.coerce.string().transform(r => String(r).trim()).optional(),
    "Sự kiện liên quan": e.z.coerce.string().transform(r => String(r).trim()).optional(),
    "Độ ưu tiên": e.z.coerce.number().transform(r => _.clamp(r, 1, 5)).prefault(3)
}).transform(r => {
    const e = { "Tên": r["Tên"], "Nguồn gốc": r["Nguồn gốc"], "Mô tả": r["Mô tả"], "Kỳ vọng phần thưởng": r["Kỳ vọng phần thưởng"], "Đánh giá rủi ro": r["Đánh giá rủi ro"], "Thời hạn": r["Thời hạn"] ?? '', "Sự kiện liên quan": r["Sự kiện liên quan"] ?? '' };
    return { ...r, "Loại": Y(r["Loại"], e) };
});

const er = e.z.object({
    "Bật gợi ý hành động": e.z.boolean().prefault(!0),
    "Phiên bản hệ thống tu luyện": e.z.coerce.number().prefault(1),
    "_Chữ ký ghi đè trạng thái tạm thời": e.z.string().prefault('')
}).prefault({});

const tr = { 'Suôn sẻ': 'Suôn sẻ', 'Gặp khó': 'Gặp khó', 'Bình ổn': 'Bình ổn', 'Thuận lợi': 'Suôn sẻ', 'Bị cản': 'Gặp khó', 'Bình thường': 'Bình ổn' };

const nr = e.z.object({
    "Thiên đạo cảm ứng": e.z.string().transform(r => tr[String(r).trim()] || 'Bình ổn').prefault('Bình ổn'),
    "Cảnh báo áp lực môi trường": e.z.string().prefault('Thiên đạo vận chuyển bình thường, vạn vật theo lý.'),
    "_Dữ liệu nội bộ hệ thống độ khó": e.z.object({
        "Số phiên bản": e.z.coerce.number().prefault(1),
        "Bảo vệ cân bằng": e.z.object({
            "Số lần thất bại liên tiếp": e.z.coerce.number().prefault(0),
            "Ngưỡng kích hoạt": e.z.coerce.number().prefault(3),
            "Hiệp hiệu lực còn lại": e.z.coerce.number().prefault(0),
            "Hiệp hồi chiêu còn lại": e.z.coerce.number().prefault(0)
        }).prefault({}),
        "Chiến lược động": e.z.object({
            "Giới hạn thay đổi mỗi hiệp": e.z.coerce.number().prefault(.15),
            "Tốc độ giảm tự nhiên": e.z.coerce.number().prefault(.03),
            "Hiệp hồi chiêu tăng trưởng": e.z.coerce.number().prefault(2)
        }).prefault({}),
        "Snapshot kết toán độ khó": e.z.object({
            "Hệ số cơ sở hiệp": e.z.coerce.number().prefault(1),
            "Hệ số cuối hiệp này": e.z.coerce.number().prefault(1),
            "Nguồn phân tầng": e.z.object({
                "Tầng tự sự thế giới": e.z.coerce.number().prefault(1),
                "Tầng sở thích người chơi": e.z.coerce.number().prefault(1),
                "Tầng trạng thái ngắn hạn": e.z.coerce.number().prefault(1)
            }).prefault({})
        }).prefault({})
    }).prefault({})
}).prefault({});

const ar = e.z.object({
    "Địa": e.z.string().describe('Nơi tọa lạc'),
    "Đặc": e.z.string().describe('Đặc điểm cốt lõi'),
    "Lực": e.z.string().describe('Chiến lực tối cao'),
    "Doanh": e.z.enum(['Chính', 'Ma', 'Trung']),
    "Mô": e.z.enum(['Siêu lớn', 'Lớn', 'Nhỏ', 'Vi mô', 'Đặc'])
});

const or = e.z.object({
    "Giai": e.z.string().transform(r => s[r] || 'Phàm').catch('Phàm'),
    "Tính": e.z.string().describe('Thuộc tính'),
    "Hiệu": e.z.string().describe('Hiệu quả')
});

const cr = e.z.object({
    "Giai": e.z.enum(['Phàm khí', 'Pháp khí', 'Linh khí', 'Pháp bảo', 'Linh bảo', 'Tiên khí', 'Thánh khí', 'Đạo khí', 'Bản mệnh']),
    "Loại": e.z.string().describe('Loại'),
    "Đặc tính bản mệnh": e.z.string().optional().describe('Đặc tính bản mệnh'),
    "Khí linh": e.z.string().optional().describe('Tên khí linh')
}).transform(r => ({ ...r, "Đặc": 'Bản mệnh' === r["Giai"] ? 'Chí tôn' : 'Đạo khí' === r["Giai"] ? 'Siêu phàm' : 'Thánh khí' === r["Giai"] ? 'Cực phẩm' : 'Tiên khí' === r["Giai"] ? 'Đỉnh cấp' : 'Linh bảo' === r["Giai"] ? 'Mạnh' : 'Pháp bảo' === r["Giai"] ? 'Trung' : 'Bình thường' }));

const ir = e.z.object({
    "Vực": e.z.enum(['Thiên tầng', 'Thần Châu', 'Đông Thương', 'Nam Viêm', 'Tây Canh', 'Bắc Minh', 'Hạ tầng', 'Tứ Hải']),
    "Loại": e.z.enum(['Bí cảnh', 'Thị trấn', 'Tông môn', 'Cấm địa', 'Di tích', 'Địa hình']),
    "Nguy": e.z.coerce.number().transform(r => _.clamp(r, 0, 100)),
    "Đặc": e.z.string().describe('Đặc điểm'),
    "Tài": e.z.union([e.z.array(e.z.string()), e.z.string().transform(r => r ? [r] : [])]).prefault([])
});

const ur = e.z.object({
    "Chất": e.z.enum(['Kém', 'Hạ', 'Trung', 'Thượng', 'Cực', 'Thiên', 'Dị']),
    "Tính": e.z.string().describe('Thuộc tính'),
    "Hiếm": e.z.enum(['Thường', 'Ít', 'Hiếm', 'Rất hiếm', 'Truyền thuyết'])
}).transform(r => ({ ...r, "Tốc": { 'Kém': '0.3x', 'Hạ': '0.5x', 'Trung': '1x', 'Thượng': '2x', 'Cực': '3x', 'Thiên': '5x', 'Dị': '4x' }[r["Chất"]] || '1x', "Đặc": 'Thiên' === r["Chất"] ? 'Đơn hệ đỉnh cấp' : 'Dị' === r["Chất"] ? 'Biến dị hiếm có' : 'Cực' === r["Chất"] ? 'Song hệ ưu tú' : 'Thông thường' }));

const sr = e.z.object({
    "Chất": e.z.enum(['Phàm', 'Linh', 'Đạo', 'Thánh', 'Thần']),
    "Đặc": e.z.string().describe('Đặc tính'),
    "Hiếm": e.z.enum(['Thường', 'Ít', 'Hiếm', 'Rất hiếm', 'Truyền thuyết'])
}).transform(r => ({ ...r, "Ưu": 'Thần' === r["Chất"] ? 'Chí cao' : 'Thánh' === r["Chất"] ? 'Cực mạnh' : 'Đạo' === r["Chất"] ? 'Mạnh' : 'Linh' === r["Chất"] ? 'Trung' : 'Không' }));

const lr = [{ canonical: 'Ngu Tịch Nhan', aliases: ['Ngu Tịch', 'Ngu Nhan'] }, { canonical: 'Sóc Ly Diên', aliases: ['A Diên', 'Huyết Thủ Phi Diên'] }];
const fr = A.parse({});
const pr = /[\u3400-\u4dbf\u4e00-\u9fff]/;

function mr(r, e, t) { const n = String(r ?? '').trim(); return n && n !== t ? n : e; }
function zr(r) { const e = String(r ?? '').trim(); if (!e) return ''; const t = e.replace(/^(?:[A-Za-z][A-Za-z0-9]*)(?:[._:\-/\\\s]+[A-Za-z0-9]+)*[._:\-/\\\s]*/u, '').trim() || e, n = t.search(pr); return n < 0 ? '' : t.slice(n).trim(); }

function gr(r, e) {
    if (!r) return _.cloneDeep(e);
    const t = _.cloneDeep(r), n = _.cloneDeep(fr["Ngữ cảnh quan hệ"]);
    t["Cấp độ"] = Math.max(Number(r["Cấp độ"] ?? fr["Cấp độ"]), Number(e["Cấp độ"] ?? fr["Cấp độ"]));
    t["Tu vi"] = Math.max(Number(r["Tu vi"] ?? fr["Tu vi"]), Number(e["Tu vi"] ?? fr["Tu vi"]));
    t["Linh thạch"] = Math.max(Number(r["Linh thạch"] ?? fr["Linh thạch"]), Number(e["Linh thạch"] ?? fr["Linh thạch"]));
    t["Số năm đã sống"] = Math.max(Number(r["Số năm đã sống"] ?? fr["Số năm đã sống"]), Number(e["Số năm đã sống"] ?? fr["Số năm đã sống"]));
    t["Thử đột phá"] = Boolean(r["Thử đột phá"] || e["Thử đột phá"]);
    const a = _.cloneDeep(fr["Trạng thái tu luyện"]);
    return t["Trạng thái tu luyện"] = y({
        "Giai đoạn": mr(e["Trạng thái tu luyện"]?.["Giai đoạn"], String(r["Trạng thái tu luyện"]?.["Giai đoạn"] ?? a["Giai đoạn"]), a["Giai đoạn"]),
        "Nguyên nhân bình cảnh": mr(e["Trạng thái tu luyện"]?.["Nguyên nhân bình cảnh"], String(r["Trạng thái tu luyện"]?.["Nguyên nhân bình cảnh"] ?? a["Nguyên nhân bình cảnh"]), a["Nguyên nhân bình cảnh"]),
        "Mục tiêu đột phá": mr(e["Trạng thái tu luyện"]?.["Mục tiêu đột phá"], String(r["Trạng thái tu luyện"]?.["Mục tiêu đột phá"] ?? a["Mục tiêu đột phá"]), a["Mục tiêu đột phá"]),
        "Kết quả lần trước": mr(e["Trạng thái tu luyện"]?.["Kết quả lần trước"], String(r["Trạng thái tu luyện"]?.["Kết quả lần trước"] ?? a["Kết quả lần trước"]), a["Kết quả lần trước"])
    }, { legacyAttemptBreakthrough: t["Thử đột phá"], level: t["Cấp độ"], cultivation: t["Tu vi"] }),
    t["Độ hảo cảm"] = Number.isFinite(Number(e["Độ hảo cảm"])) ? Number(e["Độ hảo cảm"]) : Number(r["Độ hảo cảm"] ?? fr["Độ hảo cảm"]),
    t["Quan hệ"] = mr(e["Quan hệ"], String(r["Quan hệ"] ?? fr["Quan hệ"]), fr["Quan hệ"]),
    t["Ngữ cảnh quan hệ"] = {
        "Cảm xúc hiện tại": mr(e["Ngữ cảnh quan hệ"]?.["Cảm xúc hiện tại"], String(r["Ngữ cảnh quan hệ"]?.["Cảm xúc hiện tại"] ?? n["Cảm xúc hiện tại"]), n["Cảm xúc hiện tại"]),
        "Lý do thái độ": mr(e["Ngữ cảnh quan hệ"]?.["Lý do thái độ"], String(r["Ngữ cảnh quan hệ"]?.["Lý do thái độ"] ?? n["Lý do thái độ"]), n["Lý do thái độ"]),
        "Mong muốn quan hệ": mr(e["Ngữ cảnh quan hệ"]?.["Mong muốn quan hệ"], String(r["Ngữ cảnh quan hệ"]?.["Mong muốn quan hệ"] ?? n["Mong muốn quan hệ"]), n["Mong muốn quan hệ"]),
        "Cấm kỵ chung sống": mr(e["Ngữ cảnh quan hệ"]?.["Cấm kỵ chung sống"], String(r["Ngữ cảnh quan hệ"]?.["Cấm kỵ chung sống"] ?? n["Cấm kỵ chung sống"]), n["Cấm kỵ chung sống"]),
        "Hẹn ước chưa dứt": mr(e["Ngữ cảnh quan hệ"]?.["Hẹn ước chưa dứt"], String(r["Ngữ cảnh quan hệ"]?.["Hẹn ước chưa dứt"] ?? n["Hẹn ước chưa dứt"]), n["Hẹn ước chưa dứt"])
    },
    String(r["Linh căn"] ?? fr["Linh căn"]) === fr["Linh căn"] && String(e["Linh căn"] ?? '').trim() && (t["Linh căn"] = e["Linh căn"]),
    String(r["Thể chất"] ?? fr["Thể chất"]) === fr["Thể chất"] && String(e["Thể chất"] ?? '').trim() && (t["Thể chất"] = e["Thể chất"]),
    String(r["Công pháp"] ?? fr["Công pháp"]) === fr["Công pháp"] && String(e["Công pháp"] ?? '').trim() && (t["Công pháp"] = e["Công pháp"]),
    String(r["Bản mệnh binh khí"] ?? fr["Bản mệnh binh khí"]) === fr["Bản mệnh binh khí"] && String(e["Bản mệnh binh khí"] ?? '').trim() && (t["Bản mệnh binh khí"] = e["Bản mệnh binh khí"]),
    t["Danh sách thần thông"] = { ...r["Danh sách thần thông"] ?? {}, ...e["Danh sách thần thông"] ?? {} }, t;
}

function br(r, e) {
    return r ? { "Cấp": Math.max(Number(r["Cấp"] ?? 1), Number(e["Cấp"] ?? 1)), "Căn": mr(e["Căn"], String(r["Căn"] ?? ''), ''), "Chất": mr(e["Chất"], String(r["Chất"] ?? ''), ''), "Tuổi": mr(e["Tuổi"], String(r["Tuổi"] ?? ''), ''), "Thuộc": mr(e["Thuộc"], String(r["Thuộc"] ?? ''), ''), "Pháp": mr(e["Pháp"], String(r["Pháp"] ?? ''), ''), "Khí": mr(e["Khí"], String(r["Khí"] ?? ''), ''), "Thông": Array.from(new Set([...r["Thông"] ?? [], ...e["Thông"] ?? []].map(r => String(r).trim()).filter(Boolean))) } : _.cloneDeep(e);
}

function dr(r) { const e = Math.max(0, Number.isFinite(r) ? r : 0); return e <= 20 ? 6 : e <= 60 ? 4 : e <= 120 ? 3 : 2; }

function hr(r, e) {
    e < 3 && (r["Tu vi"] = N(r["Cấp độ"], r["Tu vi"], e, 3)), r["Trạng thái tu luyện"] = y(r["Trạng thái tu luyện"], { legacyAttemptBreakthrough: r["Thử đột phá"], level: r["Cấp độ"], cultivation: r["Tu vi"] }), r["Thử đột phá"] = 'Đang đột phá' === r["Trạng thái tu luyện"]["Giai đoạn"], Object.assign(r, D(r, !1));
}

const _r = e.z.object({
    "Đồng hồ thế giới": e.z.object({ "Kỷ nguyên": e.z.string().prefault('Thời đại mạt pháp'), "Năm": e.z.coerce.number().prefault(1), "Tháng": e.z.coerce.number().transform(r => _.clamp(r, 1, 12)).prefault(1), "Ngày": e.z.coerce.number().transform(r => _.clamp(r, 1, 30)).prefault(1), "Giờ": e.z.string().prefault('Tý thời') }).prefault({ "Kỷ nguyên": 'Thời đại mạt pháp', "Năm": 1, "Tháng": 1, "Ngày": 1, "Giờ": 'Tý thời' }),
    "Bản đồ thế giới": e.z.record(e.z.string().describe('Tên khu vực'), e.z.object({ layer: e.z.enum(['Thiên tầng', 'Địa tầng', 'Hạ tầng']).prefault('Địa tầng'), danger: e.z.coerce.number().transform(r => _.clamp(r, 0, 100)), desc: e.z.string().prefault(''), connections: e.z.array(e.z.string()).prefault([]) })).prefault({}),
    "Đồ chí thế giới": e.z.record(e.z.string().describe('Tên sự kiện'), e.z.object({ "Trạng thái": e.z.string().prefault(''), "Sự kiện": e.z.string().prefault('') })).prefault({}),
    "Kho thế lực tông môn": e.z.record(e.z.string().describe('Tên tông môn'), ar).prefault({}),
    "Kho công pháp": e.z.record(e.z.string().describe('Tên công pháp'), or).prefault({}),
    "Kho pháp bảo": e.z.record(e.z.string().describe('Tên pháp bảo'), cr).prefault({
        "Trấn Uyên Kiếm": { "Giai": 'Tiên khí', "Loại": 'Kiếm' },
        "Song Ngư Bội": { "Giai": 'Bản mệnh', "Loại": 'Ngọc bội', "Đặc tính bản mệnh": 'Nguyên huyết khế ước, Âm dương song sinh, Khí linh hóa hình, Cùng chủ đồng tu, Sinh tử tương y, Khóa máu hộ chủ', "Khí linh": 'Ngu Tịch Nhan' }
    }),
    "Kho địa điểm": e.z.record(e.z.string().describe('Tên địa điểm'), ir).prefault({
        "Thiên Uyên": { "Vực": 'Thiên tầng', "Loại": 'Cấm địa', "Nguy": 95, "Đặc": 'Tinh thần liệt khích', "Tài": ['Tinh thần toái phiến', 'Vẫn thiết'] },
        "Cương Phong Đái": { "Vực": 'Thiên tầng', "Loại": 'Cấm địa', "Nguy": 90, "Đặc": 'Cương phong bình chướng', "Tài": ['Cương phong tinh hoa'] },
        "Vấn Đạo Phong": { "Vực": 'Thần Châu', "Loại": 'Tông môn', "Nguy": 10, "Đặc": 'Vạn Pháp Tông', "Tài": ['Công pháp', 'Linh dược'] },
        "Kiếm Môn Quan": { "Vực": 'Thần Châu', "Loại": 'Tông môn', "Nguy": 15, "Đặc": 'Kiếm các', "Tài": ['Kiếm ý', 'Phi kiếm'] },
        "Tàng Thư Các": { "Vực": 'Thần Châu', "Loại": 'Tông môn', "Nguy": 5, "Đặc": 'Cổ tịch', "Tài": ['Công pháp', 'Bí thuật'] },
        "Phong Đô Thành": { "Vực": 'Thần Châu', "Loại": 'Thị trấn', "Nguy": 30, "Đặc": 'Quỷ thị', "Tài": ['U minh tài liệu'] },
        "Long Môn Bộc": { "Vực": 'Thần Châu', "Loại": 'Bí cảnh', "Nguy": 40, "Đặc": 'Hóa long', "Tài": ['Long khí'] },
        "Kiến Mộc Lâm": { "Vực": 'Đông Thương', "Loại": 'Địa hình', "Nguy": 50, "Đặc": 'Cổ thụ tinh', "Tài": ['Linh mộc', 'Yêu đan'] },
        "Thanh Đế Lăng": { "Vực": 'Đông Thương', "Loại": 'Di tích', "Nguy": 85, "Đặc": 'Thanh Đế truyền thừa', "Tài": ['Thanh Đế truyền thừa'] },
        "Bách Hoa Cảnh": { "Vực": 'Đông Thương', "Loại": 'Bí cảnh', "Nguy": 20, "Đặc": 'Hoa hải', "Tài": ['Linh hoa'] },
        "Bất Diệt Hỏa Sơn": { "Vực": 'Nam Viêm', "Loại": 'Địa hình', "Nguy": 80, "Đặc": 'Chu Tước niết bàn', "Tài": ['Chu Tước hỏa'] },
        "Niết Bàn Đài": { "Vực": 'Nam Viêm', "Loại": 'Di tích', "Nguy": 70, "Đặc": 'Niết bàn', "Tài": ['Niết bàn cảm ngộ'] },
        "Vạn Kiếm Trủng": { "Vực": 'Tây Canh', "Loại": 'Cấm địa', "Nguy": 85, "Đặc": 'Kiếm ý', "Tài": ['Kiếm ý', 'Cổ kiếm'] },
        "Huyền Băng Sơn": { "Vực": 'Bắc Minh', "Loại": 'Tông môn', "Nguy": 50, "Đặc": 'Huyền Vũ Tông', "Tài": ['Huyền băng'] },
        "Quy Khư Nhãn": { "Vực": 'Bắc Minh', "Loại": 'Cấm địa', "Nguy": 99, "Đặc": 'Quy Khư', "Tài": ['Quy Khư cảm ngộ'] },
        "Hoàng Tuyền Tích": { "Vực": 'Hạ tầng', "Loại": 'Di tích', "Nguy": 90, "Đặc": 'U Minh', "Tài": ['Hoàng Tuyền thủy'] },
        "Viêm Uyên": { "Vực": 'Hạ tầng', "Loại": 'Cấm địa', "Nguy": 95, "Đặc": 'Địa tâm hỏa', "Tài": ['Địa tâm hỏa'] }
    }),
    "$Suy đoán tông môn": e.z.object({ "Vực hiện tại": e.z.string().prefault(''), "Thế lực chính hiện tại": e.z.string().prefault('') }).prefault({ "Vực hiện tại": '', "Thế lực chính hiện tại": '' }),
    "Kho linh căn": e.z.record(e.z.string().describe('Tên linh căn'), ur).prefault({}),
    "Kho thể chất": e.z.record(e.z.string().describe('Tên thể chất'), sr).prefault({}),
    "Bản tôn": J,
    "Kho nhân vật hồng nhan": e.z.record(e.z.string().describe('Tên nhân vật'), B).prefault({
        "Hứa Thính Vũ": { "Cấp": 33, "Căn": 'Thủy bản nguyên thiên', "Chất": 'Quy khư thần thể', "Tuổi": 'Ngoài 26 thực 12000', "Thuộc": 'Chủ nhân Quy Khư', "Pháp": 'Vạn thủy quy nguyên tiên thiên', "Khí": 'Thương hải di châu tiên thiên', "Thông": ['Quy khư ca', 'Nghịch lưu hư vọng', 'Tịch diệt hải vực', 'Vạn thủy đồng nguyên'] },
        "Ngu Tịch Nhan": { "Cấp": 12, "Căn": 'Thủy âm dương dị', "Chất": 'Song ngư thể', "Tuổi": 'Hóa hình 0 năm', "Thuộc": 'Ngọc bội của {{user}}', "Pháp": 'Song sinh thiên cực/âm dương', "Khí": 'Bản thể Song Ngư Bội', "Thông": ['Khô mộc xuân', 'Đoạt mệnh trang', 'Song ngư mộng'] },
        "Bạch Thanh Huyền": { "Cấp": 29, "Căn": 'Kim thiên căn', "Chất": 'Kiếm thể', "Tuổi": 'Ngoài 30 thực 1000+', "Thuộc": 'Tán tu Kiếm tông sư', "Pháp": 'Kiếm ý tiên/Thiên âm thiên', "Khí": 'Thanh Huyền cầm kiếm linh bảo', "Thông": ['Cầm kiếm sát', 'Kiếm ý ca', 'Vạn kiếm tâm'] },
        "Nam Cung Vân Thường": { "Cấp": 16, "Căn": 'Hỏa thiên căn', "Chất": 'Thần hoàng đạo thể', "Tuổi": 'Ngoài 10 thực 118', "Thuộc": 'Cung chủ Thê Phượng Cung Đại Hạ', "Pháp": 'Cửu chuyển niết bàn tiên', "Khí": 'Thê ngô trâm linh bảo', "Thông": ['Nam minh ly hỏa', 'Hoàng uy trấn thế', 'Vũ hóa hư không'] },
        "Mộng Yểu Lãnh": { "Cấp": 23, "Căn": 'Thụy thú dị căn', "Chất": 'Thừa hoàng thánh thể', "Tuổi": 'Ngoài 8 thực vạn năm+', "Thuộc": 'Không (Thừa Hoàng đời cuối)', "Pháp": 'Thừa hoàng bản nguyên thiên', "Khí": 'Không', "Thông": ['Thụy quang tỳ hựu', 'Linh giác thông minh', 'Bản nguyên bạo phát'] },
        "Nguyễn Vong Ưu": { "Cấp": 44, "Căn": 'Nhân quả đại đạo bản nguyên', "Chất": 'Vạn pháp bất xâm chi thể', "Tuổi": 'Hương sắc mười sáu/Lịch kiếp vạn năm', "Thuộc": 'Tiên Vương Tiên Giới (ngụy trang)', "Pháp": 'Nhân quả đại đạo', "Khí": 'Không (Vạn vật giai binh)', "Thông": ['Xóa bỏ khái niệm', 'Sửa đổi nhân quả', 'Tiên vương uy áp', 'Tái tạo kỷ nguyên'] },
        "Vãn Đường": { "Cấp": 15, "Căn": 'U minh linh căn', "Chất": 'Phệ hồn chi thể', "Tuổi": 'Chưa biết', "Thuộc": 'Tán tu', "Pháp": 'U minh quy hồn kinh thiên', "Khí": 'Dẫn hồn linh linh bảo', "Thông": ['Minh hà chỉ dẫn', 'Minh liên trầm mộng', 'Quy hồn bãi chu'] },
        "Sóc Ly Diên": { "Cấp": 4, "Căn": 'Dị biến phong linh căn', "Chất": 'Quế phách linh lung thể', "Tuổi": 'Ngoài 16 thực 16', "Thuộc": 'Thiên kim Ly tông Toái Tinh U Ảnh Tông', "Pháp": 'Toái tinh u ảnh quyết tàn thiên', "Khí": 'Toái tinh song nhận', "Thông": ['Yến hồi thiểm'] }
    }),
    "Hồng nhan": e.z.record(e.z.string().describe('Tên hồng nhan'), A).prefault({}),
    "Danh sách NPC": e.z.record(e.z.string().describe('Tên NPC'), F).prefault({}),
    "Danh sách nhiệm vụ": e.z.record(e.z.string().describe('ID nhiệm vụ'), Q).prefault({}).transform(r => _(r).pickBy((r, e) => !!r && !!String(e).trim()).mapValues((r, e) => {
        let t;
        return { ...r, "Tên": zr(r["Tên"]) || zr(e) || (t = r["Loại"], { 'Tuyến chính': 'Nhiệm vụ chính', 'Tuyến phụ': 'Nhiệm vụ phụ', 'Hằng ngày': 'Nhiệm vụ hằng ngày', 'Cứu nguy': 'Lâm nguy thụ mệnh', 'Khám phá bí cảnh': 'Khám phá bí cảnh' }[String(t ?? '').trim()] || 'Nhiệm vụ chưa đặt tên') };
    }).pickBy(r => 'Đang tiến hành' === r["Trạng thái"]).value()),
    "Hệ thống danh vọng": T,
    "Hệ thống độ khó": nr,
    "Cơ hội có thể tham gia": e.z.array(rr).prefault([]).transform(r => r.filter(r => !!r["Tên"])),
    "Tình cảnh hiện tại": e.z.string().prefault(''),
    "_Cài đặt hệ thống": er,
    "_Snapshot độ hảo cảm": e.z.record(e.z.string().describe('Tên hồng nhan'), e.z.coerce.number().transform(r => _.clamp(r, -200, 200))).prefault({})
}).transform(r => {
    r["Kho nhân vật hồng nhan"] = function (r) {
        const e = _.cloneDeep(r ?? {});
        for (const { canonical: r, aliases: t } of lr) {
            let n = e[r] ? _.cloneDeep(e[r]) : void 0;
            for (const r of t) { const t = e[r]; t && (n = br(n, t), delete e[r]); }
            n && (e[r] = n);
        }
        return e;
    }(r["Kho nhân vật hồng nhan"] ?? {});
    const e = function (r, e) {
        const t = _.cloneDeep(r ?? {}), n = _.cloneDeep(e ?? {});
        for (const { canonical: r, aliases: e } of lr) {
            let a = t[r] ? _.cloneDeep(t[r]) : void 0;
            for (const r of e) { const e = t[r]; e && (a = gr(a, e), delete t[r]); }
            a && (t[r] = a);
            const o = [n[r], ...e.map(r => n[r])].map(r => Number(r)).filter(r => Number.isFinite(r));
            for (const r of e) delete n[r];
            o.length > 0 && (n[r] = o[o.length - 1]);
        }
        return { companions: t, snapshot: n };
    }(r["Hồng nhan"] ?? {}, r["_Snapshot độ hảo cảm"] ?? {});
    r["Hồng nhan"] = e.companions, r["_Snapshot độ hảo cảm"] = e.snapshot;
    const t = Math.max(1, Math.floor(Number(r["_Cài đặt hệ thống"]?.["Phiên bản hệ thống tu luyện"] ?? 1) || 1));
    !function (r, e) {
        e < 3 && (r["Tu vi"] = N(r["Cấp độ"], r["Tu vi"], e, 3)), r["Trạng thái tu luyện"] = y(r["Trạng thái tu luyện"], { legacyAttemptBreakthrough: r["Thử đột phá"], level: r["Cấp độ"], cultivation: r["Tu vi"] }), r["Thử đột phá"] = 'Đang đột phá' === r["Trạng thái tu luyện"]["Giai đoạn"], Object.assign(r, D(r, !0));
    }(r["Bản tôn"], t);
    for (const e of Object.values(r["Hồng nhan"] ?? {})) hr(e, t);
    r["_Cài đặt hệ thống"] = { ...r["_Cài đặt hệ thống"] ?? {}, "Phiên bản hệ thống tu luyện": 3, "_Chữ ký ghi đè trạng thái tạm thời": String(r["_Cài đặt hệ thống"]?.["_Chữ ký ghi đè trạng thái tạm thời"] ?? '') };
    const n = _.cloneDeep(r["_Snapshot độ hảo cảm"] ?? {});
    for (const [e, t] of Object.entries(r["Hồng nhan"] ?? {})) {
        const r = Number(t?.["Độ hảo cảm"]);
        if (!Number.isFinite(r)) continue;
        const a = Number(n[e]);
        if (Number.isFinite(a)) { const e = dr(a); t["Độ hảo cảm"] = _.clamp(r, a - e, a + e); } else t["Độ hảo cảm"] = _.clamp(r, -200, 200);
        n[e] = t["Độ hảo cảm"];
    }
    return r["_Snapshot độ hảo cảm"] = _.pickBy(n, (e, t) => _.has(r["Hồng nhan"], t)), r;
});

$(() => { 
    r(_r); 
    console.info('[Đăng Hỏa Lan San·Cựu Mộng Tân Tài] Cấu trúc biến MVU đã đăng ký'); 
    toastr.success('Cấu trúc biến MVU đã đăng ký thành công', 'Đăng Hỏa Lan San·Cựu Mộng Tân Tài'); 
});
//# sourceMappingURL=index.js.map