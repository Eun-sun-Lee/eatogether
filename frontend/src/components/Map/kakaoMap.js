const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');    // ������ ���� ������ DOM ���۷���
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // ������ �߽���ǥ
        level: 3                                              // ������ ����(Ȯ��, ��� ����)
    };
    const map = new kakao.maps.Map(container, options);

}