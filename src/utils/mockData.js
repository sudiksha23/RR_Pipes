


const PipeObj= [
    {
        id:1,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"LMS",
        size:"20mm",
        costPerPipe:"10",
        ppb:150,
        costPerBundle:100,
        image:"https://3.imimg.com/data3/CG/FY/MY-3193522/electrical-pipes-500x500.jpg"
    },
    {
        id:2,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"MMS",
        size:"20mm",
        costPerPipe:"10",
        ppb:150,
        costPerBundle:100,
        image:"https://pipewale.com/wp-content/uploads/2016/01/pvc-electrical-conduit-pipe.jpg"
    },
    {
        id:3,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"HMS",
        size:"20mm",
        costPerPipe:"10",
        ppb:150,
        costPerBundle:100,
        image:"https://2.wlimg.com/product_images/bc-full/2022/2/2038102/2--1644036-1644036529_6188097_1504427.jpg"
    },
    {
        id:4,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"LMS",
        size:"25mm",
        costPerPipe:"10",
        ppb:100,
        costPerBundle:150,
        image:"https://cpimg.tistatic.com/07595383/b/4/20mm-HMS-PVC-Electrical-Conduit-Pipe-3Mtrs.jpg"
    },
    {
        id:5,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"MMS",
        size:"25mm",
        costPerPipe:"10",
        ppb:100,
        costPerBundle:150,
        image:"https://www.cantexinc.com/portals/0/Images/Homepage/pipe.jpg"
    },
    {
        id:6,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"HMS",
        size:"25mm",
        costPerPipe:"10",
        ppb:100,
        costPerBundle:150,
        image:"https://i0.wp.com/www.theprojectestimate.com/wp-content/uploads/2020/05/32.-PVC-Conduit.png?fit=1000%2C1000&ssl=1"
    },
    {
        id:7,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"0.8mm",
        size:"25mm",
        costPerPipe:"10",
        ppb:100,
        costPerBundle:150,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf_CESJgByxWE_ivyYnNviptoQAmGv1nazAIeDbzXmJZW86MSU7HFgzCNq6n0bjeCDlQmvo1uoTE&usqp=CAU&ec=48665699"
    },
    {
        id:8,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"LMS",
        size:"32mm",
        costPerPipe:"10",
        ppb:50,
        costPerBundle:200,
        image:"https://5.imimg.com/data5/SU/SV/BA/SELLER-39844513/pvc-electrical-conduit-pipes-500x500.jpg"
    },
    {
        id:9,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"MMS",
        size:"32mm",
        costPerPipe:"10",
        ppb:50,
        costPerBundle:200,
        image:"https://5.imimg.com/data5/SK/TV/MY-6414870/32mm-pvc-conduit-pipe-250x250.jpg"
    },
    {
        id:10,
        name:"PVC Electric Conduit Pipe and Fittings",
        desc:"PVC Electric Conduit Pipe and Fittings",
        category:"PVC",
        class:"HMS",
        size:"32mm",
        costPerPipe:"10",
        ppb:50,
        costPerBundle:200,
        image:"https://4.imimg.com/data4/XV/FQ/MY-3237503/conduit-pipe-500x500.jpg"
    },
    {
        id:12,
        name:"SWR Pipes and Fittings",
        desc:"SWR Pipes and Fittings",
        category:"PVC",
        class:"LMS",
        size:"10mm",
        costPerPipe:"10",
        ppb:150,
        costPerBundle:100,
        image:"https://pipewale.com/wp-content/uploads/2016/01/swr-pipes.jpg"
    },
    {
        id:13,
        name:"PVC Agri Pipes",
        desc:"PVC Agri Pipes",
        category:"PVC",
        class:"LMS",
        size:"10mm",
        costPerPipe:"10",
        ppb:150,
        costPerBundle:100,
        image:"https://aakashpipes.com/images/agri.jpg"
    },
    {
        id:14,
        name:"UPVC Plumbing Pipes",
        desc:"UPVC Plumbing Pipes",
        category:"PVC",
        class:"LMS",
        size:"12mm",
        costPerPipe:"10",
        ppb:150,
        costPerBundle:100,
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEg8QEBAVEA8VEA0QEBcVEBAPFQ4VFREWFhUYFRUYHSghGBolGxYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALIBGwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFAwQGBwj/xABEEAABAwICBgcFBQUGBwAAAAABAAIDBBEFEgYhMUFRoQcTYXGBkbEiMjNykhRissHRQkNSgqIVFiM0wvAkU2Nzk9Lh/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADMRAAIBAgIIBQQCAgMBAAAAAAABAgMRBDESITJBcZGhsRMUUYHBUmHR8CJCorKC4fEk/9oADAMBAAIRAxEAPwDzdJNJeoeMSCAgICCRqYUFIKkIkgIQEySSAhMJkkgmEk1SENCFJBIISTTETCaQQmIEIQmIaEIQAIQhAAhCEACELNT0r5DaNjnn7rXO9EAYUK/pNDq2TZAWDi9zWcr35K7o+jWZ3xZ2M7GtdJzNlk61NZs3jh6ssos4VC9Yo+jemb8Rz5e92QeTdfNXtFotSxWyU7L8SwPPm65WTxcFkmbxwE3m0up4lS0UsuqOJ8nysc70V1SaFVsn7kRj77g3kLnkvaWUwGoCw7NSyCJYvGS3L5No4CC2m30/J5dR9Gkht1tQ1vEMYXcyR6K2Z0bU9heSS/ez/wBV34YnlWTxNR7zdYWkv6nywkmEl2HCSCAgIQSNTCgFMKkIaAhATJJJhJATJJphJNUhDUlFSQQJNJNMCYQEBbFDRSTvEcMbpHnYGtLj/wDB2pha+RroXWU/R3iDwCYmx/NKy48G3VjTdGcx+LO1vENY53M2Wbr01vNVhqr/AKnBoXqlL0awD35HyeLWDkL81d0WhlHFa1O1x4vvJ+K6yeLgsjaOBqPNpfvA8Uhgc82Yxzzwa0uPJXFJonWy2y07mji8tjHM35L2yChYwWa0NHAAAeQWwIQsZYx7kbxwEf7S+Dyaj6N6h3xJY4/lzSH0AV7RdG1O34kkkh36wwctfNd+GJhqyliaj3m8cLSju56znKHRCjitlp2Eje4dYfN11cxUjWiwAA4AABbmVKyxcm8zeMVHLUYmxDgphinZCQ7EQxPKmhAWCyE7J5UDEkpiMqXVIA+UQkmkvTPIJBAQEwgkAphQCmFSENAQgJkkkBCAmSTCaQTCpCGmkpBBIgmkmqEZ6WB0j2RsGZ7nNa0DeSbBe46O4RDhsAbq6wgda+3tSO3gb8o3BeddGGH56l0zh7ETCWk/xu9kcs/Jd9WtklcSGnLsbuXBiqmvQPSwVJKOmywOkEYOsOA42HpdWlLUMmbmY4OHEbR3jcuSdhDzrc4NHi4rLhlMYH52SE7nCwAeOBC5NZ3nV5E8qcUge0OH++ITSGKyLJp2QAkKQYVIRIAxoWYRKYjSA1wE8hWzkVfV4zTQ6pKiNh4GRub6RrTV27JXB6tbNkRKQiXNVXSBQsvle6U/djI5vsqw6fyy6qSidJwJL3+bWD810LB13r0bcdXc5njcOtWknw19rndiNSyLgDVY1Ue6wUzDvtG231lzuSg7RGsm11WIOtva0ySDyJaOSflorbqRXC8n01dSfMyexTk+No93fodrVYtTw/FnjYeBe0HyvdVTtN8PB/zQ/wDHOf8ASqml0ApGa3ullPa4MHk0X5qzj0ToQB/wzfF8p/1I0cNHNyfBJdwcsW8lBcXJ9rHzeEk0l1HGSCYSCAgkYUwoKYVIQ0BCAmSSTCSYTJJBWcGAVb7ZaSYg7D1MgB/mIsvTejXRdkELKuZoNRI3OzMB/gRn3bX2OI1k9tl2QxSK+XrG32azqPidS5p4nRdkdlPB6SvJnjNH0f10liY2xj78jfRt1e0fRY82MtSB2MYTzJ/Jeq5BuTyLF4io950RwlJbjhaPoypGe+XynteGjyaAr2j0To4rZKdgPEtDj5uur6yFm6k3mzeNKEdlI1o6Jo1AADsACn9mC2ELO5djXNKFUYlRFntN2b1fqE0OYEEJ3AqMFq/ayHYdY7wrxsd1x814ZO5wcPAq00gxaphZCaOn+0F5cD7L35NQLTZttRudZO5VGDm1FddREpqEXJ9NfQvxGpWA1nYuBIxuoOtzaZnfG30zOUToPNMb1de5/EAPf5FzrDyW3l4LbqL2vLsYeYm9ilJ8bR7u/Q6+rx2liuJKiNpG7O1zvpFyqSr6Q6JnuGSX5Yy0eb7LFS6CUUfvCSU/ekLR5MAVxS4VTQ/Dp4mnjlDj9RuUWw0fqlyiH/0y+mP+X4Ob/v5UzaqSgc/gT1j/ADDQPVPrMbqP4KZp/wC231u4LsTIVHMjzEFsU4+/8u/4F4E5bdWT4Wj2V+pxh0NqptdVXl3EASSfiIA8luUugVGz3+slP3n5B5MAPNdPdK6HjKzVlK3Cy7AsHQvdxu/vd9zSpcEpYvh00YPEsDz5uuVYZrahqHZqWO6My55Nyd2dMUoqyVuBPMldQzJF6QyZKV1iL0s6dgPmAJJpL0jySQQEgmgljUwtikw6ab4UL5PlY5w8wFe0WgdfL+56scXva3kLnkhyjHNjUJSyRzaAvRKHoqmNjNUNZxDIy/mSPRdBRdF1I34jpJT2uDB5NH5qHXgjRYao9x46t7BaAzzRRhpLXSRtcQCQ0FwuSd2q690otD6KKxZTR34loefN2tWzKNg1BoA7lm8V6I0jg/qZVYlPdoji93UDbYANgVJJQOdtIaPErs/s7eCxVNIHNOruXG1c9A0dHpHRgRPfnH7BIsW/d7Qrwhci9xjd2g6l1dPVsyCRzg1lgSXEADvJ7UwMgaVIRlVNZpfRRe9UtJ4NzSfhuFof31En+Vo56jgcuRp/m1rWOHqtX0Xb1epc3YyliKSdtJX9FrfJa+h1AhUhEFyn9o4rL7tNDTDjJJ1pH0/ooOwaul+PiTmDe2GMM8nXB5I8G21OK979ri8a+zCT5L/Zp9DrZXtYLucGt4kho8yqis0qoor5qlpPBhMp/puqlmhVLfNL1k7+L5Xa/KytaTB6aL4dPG08eraT9R1o0aK3yfsl8vsF6zyUVzfSy7nJ4vpFHO7NTRSyjjlyNPjr9F1WjlU6Smjc9nVusWlt72yuIGvussOkA9juRo268LhwkeOQP5pTlBq0Y297v4XQcIzTvKV/ay+X1ZalyjdQzJF6zNDJdRusZekXoAzXUS5YjIoGRCEZ86iXrXMiiZExmwZFEyLWMqgZUCNoyKJkWo6ZY3VCANwypdcq91Ssf2rtQB8/pJqcMeZzWja5zW+ZsvRPKPTdAej2GaBlVW5nCT2oow4sGTc55Gs32gA7LLvaPROjh1xU0be3I1zvqOtRxS0bYoG6mMY1oA1CzRlA8glg9aWODCfYOr5SuCU3J5npQpxitSLeOmaNgCyBoCzZOCkICoNbGBNSqJYoheWVkY+89rPUqsk0qowcscjpncI4pJb+IFuaqMJy2U37MidSEdppe5ZBqyCM8FTux6d3wMPkI4yyR048rkqLpMQk2yU9MPuMfUPHi6zVXhPe0vddldi8Vbk37fLsi9EBWOokjjF5JGsH3ntZ6qjODvd8etqJeIY4U7D4NH5qVPo9SRm4gY528vvMT3l5KNGCzlfgvzbsLSm8o24v4V+5T6Q4vSl3+HMJDwYHP5gW5qx0fcyrppI5YndXnLS1wtmHsvB1G+30U8Zja1lmtDQNga0NA8AoaKu9mb5m+hQ3FW0U0/W//SBRk9ppr0t+/BZ02GQRfCgYw8Qxt/q2rbLljLlEvUN3d3rLSSVkZbpXWEyKJlQM2MyRetUzLE+psgDXx6X2E9GtUDjxkkPID8lU45Vi3NXdDGYqaNp1Oygu7C45iOaBGcyKJkWo6ZYzOgDcMiiZVouqFidUoAsHSrG6ZV76tYH1vagC0dOsTqhVEleOK1pK9AF26qWF9Yuaqcbjb70rR45j5BVtRpPGNmZ3cA0cyrjTnLJMzlWpx2pI7F9b2rXkrxxXHx4rUzaoKZzuBs9/MAALdg0exWfaBCO1zWfhuVfgNbTS4v8AFzPzEXspvgvzYupcQtr2d5stR2MR/wDMZ9YTpujWR9jUVV+Ia1zv6nH8las6M6YAXdKTxzN18ktGks5P2X5DTrPKCXF/g8RWWjflkjPCSM+TgViCF2HEfQ2O/EvuLRZaAWxTz/aaWiqR+3DFm7HZRmH1AhNsK821tR66d9Zb1P2mVsRgqGwMLPbJhEry77tzYBa5wYv+PWVE3ECTqWn+VgHqtujNomd7hzKn1q0VSSVl2V+dr9TPw4t3d+btyyNSmwClj1tp2ZuLwZnebyVYsIaLNAaOAAaPILWdOoGdKUnLXJ346xxjGKtFW4ajbL1EyBaTqntWB9WBvU2GWRmWN1QqiXEAN60JsU7UAbuMVNxZbGiwtDK8/tSOA7Q1oHqSqAsmqCGxscSd5aQxvaXbLc100wbTQRxA7Ba/8W9x8SeaBmy6ZYXTqnlxMDetKbGAN6YjoX1IWF9aBvXG1ek8bdsjfA5zyuqep0tGvKHO77NCuNKcskZSrU45yR382JAb1WVWLgftW8VyWGaRRveRUtLWn3S1zrD5ra/ELt8NoaSUNc1kUo3GzZPO/wCaU6coPWh06sKi/izBgVMat4kOuBpBJ3SEbGjiL7fJdBjFWAQy+zWfyWviWPU9I2zpGh1vZYHNB7NW4Lhq3SuMlzi8ucTc5Wn1OpKMJPJFTqRjtNI6mSsWu+uHFcVUaU392Mn5nW5BV82kE7thDO5o9TdbRw1R7rHPLGUlk78P1HfPr1pVOMMb70jW97hfyXATVkj/AHpC7vcbeS11rHCesuRhLHfTHmdnUaTRDY5z/lbb1sk2rq5dcNFK4HY5zX2PjYDmtzo5wWPK6uqG5mtdlgaRcFw2utvI2DtB4LtzpMGn2o/Z7HXNu47VjU8Om9FK/Fm9LxakdKTtf0S7u5wUeBYrL+w2Edrox6XK3afo5qJNdRVd4aHv5uI9F6XTSslaJIzdp8LeG5Zcqnx5LZSXBF+Wi9pt8WcRR9G1Iz3+sl+Z+UeTbK+otGqWK3V07AeOQOd9R1q6sms5VZyzbNY0oR2UkYWQAbBZTDFMNUhGVBpYx5U7LMIVPqUgPk1JNJeoeQeudEOLCWCWhefaYXSRdrHHXbud+Jdl1RabEa18/wCDYnJSTR1EJtIw3HBw2FrhvBFwvZcM6S6GSMOle6CQD2mOY99j91zQbjmuWrTeldHbQrLRs2dJVyCNrG79Z/35rRfWjiuFxvpEikeTG17m7G6g3V23/Rc7VaazO9xjWd5c8/kpVKb3FyrwW89TkxEDetCpxljBdzw0dpA9V5PUY7UybZnAcG2Z6LQc8u1kkntJK0WHe9mEsWtyPTqvTGBv7wOP3QXcxqVLVab39yMnvIb+q4pAWqw8N5jLF1HlZF/U6VVD72ys7hc+Z/RXGimmggOSqj6xt7iQNaXsvxH7Q5riwmFp4MGrWMvMVE73PbH9INA1mYTF5tqa2KXMezWAB4lcRjOnjp3FzYrDY0F+wdtt64tMKVh4IqWMqPLUW0+kE79jgz5Wj1N1Xyzvfre8u7ySsKa2jCMckc8qkpbTJhCAgKzMFNjyNhI7ja6ghMQ0IQgMjLBA+Q5Y2Oe7g1pefIK0o9Fa2X3aWQfO3qvx2Xp+jtPHhtLE0MBnka18p2EuIvYngL2A71e4Rizai7S0seNeu5Dh2O/JcM8ZZ2ij0qeATScnyseX0fRrWP8AfcyIfMXkeAFuau6PosZq62pe75GtZ63XpFkwFi8TUe86Y4OitxTUOj0cMUcDbmNl8oJ4kkk22m5KzPwkWIaA09wVqGHgpCIrBy13Z0JW1IoMNqDHJ1btVzY9+4q9ESpdJYMgbKNVtROxYqyknquqkhrn08DomEtiYxxebm7hJtGogW7FMm9xpCMZO0mkvV3fZN/H3OgLABdxsO02CrazSOhhvnqobjaA8SOH8rblVA0OpzrmfUVTv+tOXDyFlZ0mD00Pw6aJvaY2k/UblR/N7kupvbDR3ylwSiubbf8AiaQ02hf/AJanqao7urgdl+o7Ev7XxKQ/4VDHA3+Kea5H8jbFXmbyUS5Gg3m+WoXj0o7NJf8AJuT6aK6FC7D8Rl+LiLIW7xTwD8T7FH91r63V9c528iqDb+GXUrwuSzpqlH9bDzlbJNLhGK+NfF6/ufLqSaS9Y+fJBMJBMIJBTCgpqkIaAhATJJJhJMJkkkwkEwqQhqQUVIIIEmkmmBMJtFzYaydgGslIL3HBKaGgiigbEC7IwzvsMznkXceJ17Bwssq1VU0tVzehQdVvXax5HSaO1cvuU0h7SwsHm6yvKLo5rH2z5Ih2uLj5AfmvY2AEAt1ggEdxWQRE7lyyxc3lZHbHA01m2zzaj6LG/vqlx+RjWc3XV5SdH1CzbGZD997jyFguqnLYxmle2NvFzmtHmVpjGqY/DeZzs/wY5KgX+ZgI5rCWJlvkddPBRzjTv7N9ciTsOYTci54k3VXWNMDwR7t7j9FZHE5T8KjeDuM0kUI/pzuH0qtx0VMkd3mCMDXZjZJXeD3Fo/pWWl9jo8P6ml73/wBbvoW9XjVPCIzLJlMjS6Noa+Rzxq91rQSdoWudISfgUVTJwLo207D/ADSEG3gjAHn7PFd2YgPaTYAmziNy3i9JpveCnCK2bv7vVysmudyv+117/djpoBwfJLUuHg0NHNROHVEnxa+W28QRw09vEhzua3zIoumCNBb78x+YktlJey7u76lNiOj0Ajc9wfLINYdNNLMfImw8lv4FYU8QaA1oztAAAAAcdgWvjFWBG4X7FLDzkp4AdpaXfUSR6qlBLJETqzntSb4t/wDhZF6gZVouqFidVdqdjIsTKsbplWPrBxWvJiA4pgW7p1H7QqGXFBxWt/awQB4kkmkvRPKJBAQEwgkApKIUwqQhoCEBMkkgIQEySYTSCYVIQ1IKKkEEAhCEwMjHWIPAg+RXtuIm8jjuIY4dxaF4gvZdF6oVVHTS7XxsEE283jFgT3ix8VyYxakzvwEv5SXr+/Jd4e+V0QbHII8ryHExCUlpFwG3IDTe+sg9yy/YC74lRUSdnXdU3yiDed1CEiNhPFwt22CxSYgBvXA4J5nqxqyirR1eyvztfqbEWHU8ZzNhjDt7ixrnnve655rZdP2qgqMaY3WXAd5sqWs0xhb+8BPZ7XoqjDdFcjOpUvrm+b/J2j6sBVWMV4LCLrhqnThpIAa4i4udQ1b7C+vkukoarDnsEslW14Gste8R+Do/e8N6t0pxzRnGtTlqUkdBhrurp4AdRLC/6jmHIpyVo4rh8a07ie8mLMW7G2bbUN5vay52q0tld7rbd5J5CyuNCo9xEsVSj/blrPUJsUaN6r58b3Nu49gJ9F5VUYxO/bIR8vs+ilhmNT07i6N512zB3tNd3ha+VlbMw8/C+Tsem0cE1W8Nex0cIPtOcCzMODQdZJ47ArHFcTaHloIs32Rbs22/3uXn1R0gVTmZGNZFcWLmhxd4XOpc/Ni079srvD2fRSsLN+hUsdTWV2elz4wG7XADtNvVVNVpREP3gPdd3ovPXOJ1k3PbrSWqwi3swlj5bo/vQ62p0vH7DHHvIZ+qrZ9JZnbAG+Bcef6KkQtlh6a3GEsVVe825sSmf70rvA5R5BaqSFqklqRhJuWt6ysSTSXOdhIICAmEEgphQCmFSENAQgJkkkBCYTJJBSUUwqQhqQUVIIIBNRUkwJBXei2kstA9zmAPjcAJIySA+2wg7iOKpAgIlFSVmOMnF3WZ2uM9IUs5HVwtiaBqBcX+J1Bc9UY/UP2ykfLZvPaqtCiNGEckXLEVZZyZkklc7W5xce0k+qghC1MQQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAKwJIQuY7SQTCEIJAKYSQqQiSAhCZJJAQhMkmE0IVIRJJCEEjTQhMRMICEJiBCEJiGhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQB//2Q=="
    },

]


export default PipeObj