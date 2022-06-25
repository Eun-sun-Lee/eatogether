const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');    // ������ ���� ������ DOM ���۷���
    const options = {
        center: new kakao.maps.LatLng(37.610632352771624, 126.99701001706818), // ������ �߽���ǥ
        level: 3                                              // ������ ����(Ȯ��, ��� ����)
    };
    const map = new kakao.maps.Map(container, options);

}