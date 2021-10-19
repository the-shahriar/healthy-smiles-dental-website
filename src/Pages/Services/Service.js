import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';

const Service = memo((props) => {
    const { id } = useParams();
    const service = useService();
    console.log(service);
    return (
        <div>

        </div>
    );
});

export default Service;