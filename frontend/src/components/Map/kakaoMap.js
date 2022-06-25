const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');    // ������ ���� ������ DOM ���۷���
    const options = {
        center: new kakao.maps.LatLng(37.610632352771624, 126.99701001706818), // ������ �߽���ǥ
        level: 3                                              // ������ ����(Ȯ��, ��� ����)
    };
    const map = new kakao.maps.Map(container, options);
    // ��Ŀ ����
    const imageSrc = 'https://cdn-icons-png.flaticon.com/512/7902/7902187.png' // ��Ŀ�̹��� �ּ�   
    const imageSize = new kakao.maps.Size(54, 59) // ��Ŀ�̹��� ũ��
    const imageOption = {offset: new kakao.maps.Point(27, 69)}; // ��Ŀ�� ��ǥ�� ��ġ��ų �̹��� �ȿ����� ��ǥ�� ����
    // ��Ŀ�� �̹��������� ������ �ִ� ��Ŀ�̹����� �����մϴ�
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition  = new kakao.maps.LatLng(37.610632352771624, 126.99701001706818);
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage 
    });
    // ������ ǥ���� �� ����(������� �ּҷκ��� ����)
    const circle = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.610632352771624, 126.99701001706818),  // ���� �߽���ǥ
    radius: 150, // ���� ����
    strokeWeight: 5, // ���� �β� 
    strokeColor: '#75B8FA', // ���� ����
    strokeOpacity: 1, // ���� ������
    strokeStyle: 'dashed', // ���� ��Ÿ��
    fillColor: '#CFE7FF', // ä��� ����
    fillOpacity: 0.5  // ä��� ������   
}); 

// ������ ���� ǥ���մϴ� 
circle.setMap(map); 

    marker.setMap(map); 

}